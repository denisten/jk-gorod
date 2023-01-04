import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head></Head>
        <NextScript></NextScript>
        <body>
          <Main />
          <div id="CallMeModal" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
