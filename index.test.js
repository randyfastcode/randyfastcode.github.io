const fs = require('fs');

test('La página HTML debe contener "Hola Mundo"', () => {
    const htmlContent = fs.readFileSync('index.html', 'utf-8');
    expect(htmlContent).toContain('Hola Mundo');
});
