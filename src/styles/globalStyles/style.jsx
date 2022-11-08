import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: 'Kumbh Sans', sans-serif;
    /* font-family: 'Roboto Slab', serif; */
    /* font-family: 'Space Mono', monospace; */
  }

  body{
    background-color: #1E213F;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    width: 100vw;
    height: 100vh;
    color: white;
  }

  h1{
    font-size: 100px;
    line-height: 120px;
    font-weight: 700;
    letter-spacing: -5px;
  }

  h2{
    font: 28px;
    font-weight: 700;
    line-height: 34px;
  }

  h3{
    font: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 15px;
    text-transform: uppercase;
  }

  h4{
    font: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`