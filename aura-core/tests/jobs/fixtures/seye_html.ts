// Mock HTML containing Next.js hydration data for testing
export const MOCK_NEXT_DATA_HTML = `
<!DOCTYPE html>
<html>
<body>
    <script>
        self.__next_f.push([1,"4:["$","$L5",null,{"children":["$","$L6",null,{"children":["$","div",null,{"children":[["$","h1",null,{"children":"Test Page"}],["$","div",null,{"children":"Some content"}]]}]}]}]
"]);
        self.__next_f.push([1,"25:[{"products":[{"id":101,"name":"Pico Toning","amount":99000,"eventAmount":150000},{"id":102,"name":"Aqua Peel","amount":50000,"eventAmount":null}],"translations":[{"languageType":"ko","name":"피코 토닝","description":"기미 개선"},{"languageType":"en","name":"Pico Toning","description":"Melasma treatment"}]}]
"]);
    </script>
</body>
</html>
`;

export const MOCK_EMPTY_HTML = `<html><body><div id="no-data"></div></body></html>`;
