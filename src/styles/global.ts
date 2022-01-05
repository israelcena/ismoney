import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --shape: #fff;
  --primary: #ff5c5c;
  --secondary: #5429cc;
  --secondary-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
  }
  @media (max-width: 480px) {
    font-size: 80%; //12px
  }
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background);
  -webkit-font-smoothing: antialiased; /* for fonts show more details */
}

input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}


button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`