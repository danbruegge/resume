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
    ${tw`text-gray-700 text-sm lg:text-base`}
  }
`;

export const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <CustomGlobalStyles />
  </>
);
