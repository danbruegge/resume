import { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class NextDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en" className="h-full">
        <Head />
        <body className="h-full bg-white text-sm font-light text-neutral-700 antialiased dark:bg-black dark:text-white lg:text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
