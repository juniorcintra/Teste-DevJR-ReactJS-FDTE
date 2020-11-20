import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
    scroll-behavior: smooth;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;