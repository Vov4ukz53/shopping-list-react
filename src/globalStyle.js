import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      height: 100%;
   }

   *,
   ::after,
   ::before {
      box-sizing: inherit;
   }

   body {
      font-family: "Montserrat", sans-serif;
      background-color: #e5e2e2;
   }
`;

export default GlobalStyle;