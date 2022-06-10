import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #0290ff;
        --white: white;
        --light-gray: #fafafa;
        --light-blue: #4386bf;
        --mid-gray: #888888;

        --montserrat: 'Montserrat', sans-serif;
        --roboto: 'Roboto Slab', serif;
    }

    body{
        max-width: 1400px;
        margin-inline: auto;
    }
`;

export default GlobalStyle;
