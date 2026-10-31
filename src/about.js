// Страница «О программе». Файл входит в сборку приложения.
// links: text — подпись слева (строка или {ru:"…", en:"…"}), url — ссылка (только https),
// icon — необязательный значок сайта (файл рядом с программой, например "about/site.svg"); без него рисуется глобус.
const ABOUT = {
  name: 'MonoSystemPanel',
  author: 'Dmitriy Yakovenko (Monoloshka)',
  links: [
    { text: { ru: 'Исходный код', en: 'Source code' }, url: 'https://github.com/Monoloshka/MonoSystemPanel' },
  ],
};
const LICENSE_TEXT = `MIT License

Copyright (c) 2026 Dmitriy Yakovenko (Monoloshka)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
