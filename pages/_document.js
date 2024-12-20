// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <meta httpEquiv="refreshhhhx" content="90"></meta>
        <Head />
        <body>
          <Main />
          <NextScript />
          

        </body>
      </Html>
    );
  }
}

export default MyDocument;
