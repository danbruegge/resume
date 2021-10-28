import { FC } from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

const CustomGlobalStyles = createGlobalStyle`
  html, body {
      ${tw`h-full`}
  }

  body {
    ${tw`h-full antialiased`}
    ${tw`text-sm lg:text-base`}
    ${tw`text-trueGray-700 dark:text-white`}
    ${tw`bg-white dark:bg-trueGray-900`}
  }
`;

export const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <CustomGlobalStyles />
  </>
);
