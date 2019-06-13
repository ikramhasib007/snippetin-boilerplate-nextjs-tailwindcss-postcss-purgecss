import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
     <html lang="en" className="text-gray-900 antialiased leading-normal">
        <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1"/>
        {/* <!--[if IE]><link rel="shortcut icon" href="/static/assets/images/logo.ico"/><![endif]--> */}
        <link rel="icon" href="/static/assets/images/logo.png"/>
        {/* <link rel="stylesheet" href="/static/assets/fontawesome/css/all.min.css"/> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"/>
        </Head>
       <body className="min-h-screen not-italic font-sans font-normal text-base">
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
