import { createGlobalStyle } from "styled-components";
import "assets/font-icon/style.css";

const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --gray-100: #f7fafc;
        --gray-200: #edf2f7;
        --gray-300: #e2e8f0;
        --gray-400: #cbd5e0;
        --gray-500: #a0aec0;
        --gray-600: #718096;
        --gray-700: #4a5568;
        --gray-800: #2d3748;
        --gray-900: #1a202c;
        --indigo-600: #5a67d8;
        --indigo-700: #4c51bf;
        --blue-700: #2b6cb0;
        --blue-800: #2c5282;
        --blue-900: #2a4365;
        --teal-100: #F4FCFA;
        --teal-300: #81e6d9;
        --teal-400: #4fd1c5;
        --teal-500: #38b2ac;
        --teal-600: #319795;
        --teal-700: #2c7a7b;
        --red-400: #fc8181;
        --red-500: #f56565;
        --red-600: #e53e3e;
    
        --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    }
    body {
        /* font-family: 'Archivo', sans-serif; */
        /* font-family: ".SF NS Display"; */
        font-family: "Rubik", sans-serif;
        overflow-y: scroll;
        overscroll-behavior-y: none;
    }
    ul {
        list-style: none
    }
    a, 
    a:visited, 
    a:hover, 
    a:active {
     color: inherit;
     text-decoration: none;
    }

    button {
        font-family: "Rubik", sans-serif;
        background-color: transparent;
        border: none;
        font-size: inherit;
        outline: none;
    }
`;

export default GlobalStyle;
