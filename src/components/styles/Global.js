import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
    h1,h2,h3,h4,h5,h6,span,p{
        font-family: 'Poppins', sans-serif;
    }
    body{
        box-sizing: border-box;
    }
    img{
        max-width: 100%;
        height: auto;

    }
    :root{
        --color-black:#2B283A;
    }
`;
export default GlobalStyle;
