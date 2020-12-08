import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  

  render() {
    return (
      <Html lang="en">
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YRVSTDNJYK"></script>
          <script dangerouslySetInnerHTML={{
            __html:`
            <!-- Global site tag (gtag.js) - Google Analytics -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YRVSTDNJYK');
`
          }}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument