import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        data-spy="scroll"
        data-target="#productPageLeftMenu"
        data-offset="0"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
