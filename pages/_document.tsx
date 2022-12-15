import { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class NextDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en" className="h-full">
        <Head />
        <body className="h-full bg-white text-sm text-neutral-700 antialiased dark:bg-neutral-900 dark:text-white lg:text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
