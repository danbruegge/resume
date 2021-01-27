import { FC } from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles } from "twin.macro";

const CustomGlobalStyles = createGlobalStyle`
  body {
    ${tw`h-full antialiased`}
    ${tw`text-gray-700 text-sm lg:text-base`}
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <GlobalStyles />
      <CustomGlobalStyles />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
