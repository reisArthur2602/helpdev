import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
  /* colors */
  --light-grey-100:#F9FAFB;
  --light-grey-200:#BABABA;
  --dark:#010001;
  --white:#ffff;
  --purple:#5250F3;
  /* weight */
  --regular:400;
  --semibold:600;
  --bold:700;
  --black:900;
  /* border-radius */
  --rounded-200: 1.125rem;
  --rounded-100: 0.75rem;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  outline: none;
  text-decoration: none;
  font-family: inherit;
}

body{
  font-family: "Montserrat", sans-serif;
  color: var(--dark);
}

button{
  cursor: pointer;
}

`;
