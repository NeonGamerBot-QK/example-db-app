// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
if(getUserPreference() === 'dark') {
    document.documentElement.style.setProperty('--bg-color', '#111');
    document.documentElement.style.setProperty('--fg-color', '#fff');
    document.documentElement.style.setProperty('--fg2-color', '#3333');
}
  `;
    return (
      <Html>
        <Head />
        <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
        <footer className='text-center lg:text-left'>
      <div className="text-gray-700 text-center p-4 fixed inset-x-0 bottom-0" style={{background: "var(--fg2-color)", height: "100px"}}>
      Template Made by{' '}
    <a className="" href="https://saahild.com/?ref=exampledbapp">Saahil</a>
  </div>
      </footer>
      </Html>
    );
  }
}

export default MyDocument;