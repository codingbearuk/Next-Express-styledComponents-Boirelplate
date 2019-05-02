import React from 'react';
import { createGlobalStyle } from 'styled-components'
import colors from "../styles/colors";

const Global = createGlobalStyle`
    body{
        margin: 0;
        background: ${ colors.darkWhite };
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }

    *, *::after, *::before{
        box-sizing: border-box;
    }
`;

const MainLayout = ({ children }) => (
    <>
        <Global />
        { children }
    </>
);

export default MainLayout;