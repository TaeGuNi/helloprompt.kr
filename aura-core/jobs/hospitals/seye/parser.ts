// Copied and adapted from seyeclinic/src/parser.ts
import type { SeyeOption } from './types.js';

export function extractJsonFromHtml(html: string): { options?: SeyeOption[], translations?: any } | null {
    try {
        let allOptions: SeyeOption[] = [];
        let allTranslations: any = {};
        let foundData = false;

        const parseProducts = (str: string) => {
            try {
                const unescaped = str.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                const products = JSON.parse(unescaped);
                if (Array.isArray(products)) {
                    products.forEach((p: any) => {
                         if (typeof p.amount === 'number') {
                            allOptions.push({
                                name: p.name || `Option ${p.id}`,
                                price: p.amount,
                                originalPrice: p.eventAmount
                            });
                            foundData = true;
                        }
                    });
                }
            } catch (e) {
                try {
                    const products = JSON.parse(str);
                    if (Array.isArray(products)) {
                        products.forEach((p: any) => {
                            if (typeof p.amount === 'number') {
                               allOptions.push({
                                   name: p.name || `Option ${p.id}`,
                                   price: p.amount,
                                   originalPrice: p.eventAmount
                               });
                               foundData = true;
                           }
                       });
                    }
                } catch (e2) {}
            }
        };

        const scanForKey = (searchKey: string, callback: (jsonStr: string) => void) => {
            let pos = 0;
            while (true) {
                const idx = html.indexOf(searchKey, pos);
                if (idx === -1) break;
                
                let openBracket = -1;
                for (let i = idx + searchKey.length; i < idx + 50; i++) {
                    if (html[i] === '[') {
                        openBracket = i;
                        break;
                    }
                }
                
                if (openBracket !== -1) {
                    let balance = 1;
                    let closeBracket = -1;
                    let inQuote = false;
                    
                    for (let i = openBracket + 1; i < html.length; i++) {
                        const char = html[i];
                        if (char === '"' && html[i-1] !== '\\') inQuote = !inQuote;
                        if (inQuote) continue;
                        
                        if (char === '[') balance++;
                        else if (char === ']') balance--;
                        
                        if (balance === 0) {
                            closeBracket = i;
                            break;
                        }
                    }
                    
                    if (closeBracket !== -1) {
                        const jsonStr = html.substring(openBracket, closeBracket + 1);
                        callback(jsonStr);
                    }
                }
                pos = idx + 1;
            }
        };

        scanForKey('"products"', parseProducts);
        scanForKey('\\"products\\"', parseProducts);
        
        // Scan for translations
        const parseTranslations = (str: string) => {
             try {
                const unescaped = str.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                const translations = JSON.parse(unescaped);
                if (Array.isArray(translations)) {
                    translations.forEach((t: any) => {
                        if (t.languageType) {
                            const lang = t.languageType === 'zh' ? 'cn' : t.languageType;
                            allTranslations[lang] = {
                                name: t.name,
                                description: t.description
                            };
                            foundData = true;
                        }
                    });
                }
            } catch (e) {
                try {
                     const translations = JSON.parse(str);
                     if (Array.isArray(translations)) {
                         translations.forEach((t: any) => {
                            if (t.languageType) {
                                const lang = t.languageType === 'zh' ? 'cn' : t.languageType;
                                allTranslations[lang] = {
                                    name: t.name,
                                    description: t.description
                                };
                                foundData = true;
                            }
                        });
                     }
                } catch(e2) {}
            }
        };
        
        scanForKey('"translations"', parseTranslations);
        scanForKey('\\"translations\\"', parseTranslations);

        if (foundData) {
            return { options: allOptions, translations: allTranslations };
        }
        return null;

    } catch (error) {
        return null;
    }
}
