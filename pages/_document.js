import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body data-spy="scroll" data-target="#abc" data-offset="150">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
