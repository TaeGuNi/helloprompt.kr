// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

function rehypeWrap() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // 1. 코드 블럭 (pre) 감싸기
      if (node.tagName === 'pre') {
        // 이미 감싸져 있으면 패스
        if (parent && parent.tagName === 'div' && parent.properties.className?.includes('code-wrapper')) {
          return;
        }
        
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['code-wrapper'] },
          children: [node]
        };
        
        parent.children[index] = wrapper;
      }
      
      // 2. 인용구 (blockquote) 감싸기
      if (node.tagName === 'blockquote') {
        if (parent && parent.tagName === 'div' && parent.properties.className?.includes('quote-wrapper')) {
          return;
        }
        
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['quote-wrapper'] },
          children: [node]
        };
        
        parent.children[index] = wrapper;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://helloprompt.kr',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeWrap]
  }
});
