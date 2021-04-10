import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script data-goatcounter="https://tweet2pic.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
        <meta name="google-site-verification" content="-CZnyT9ZXXRn8ojKcnr-R47fjCVKsqAnxD7fh6eKagE" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
