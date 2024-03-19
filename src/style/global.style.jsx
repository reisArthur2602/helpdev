import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  font-family: inherit;
}

body{
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
}

button{
  cursor: pointer;
}

`;
