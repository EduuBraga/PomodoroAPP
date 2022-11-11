import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   ::-webkit-scrollbar {
    display: none;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: ${props => props.fonts.font};
  }

  body{
    background-color: #1E213F;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    color: #D7E0FF;
    height: 800px;
  }

  h1{
    font-size: 100px;
    line-height: 120px;
    font-weight: ${props => props.fonts.font === "'Space Mono', monospace" ?  '400' : '700'};
    letter-spacing: -5px;

    @media screen and (max-width: 425px){
      font-size: 70px;
      line-height: 99px;
      letter-spacing: -4px;
    }
  }

  h2{
    font: 28px;
    font-weight: 700;
    line-height: 34px;
  }

  h3{
    font-size: 16px;
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

    @media screen and (max-width: 700px){
      font-size: 11px;
    }
  }
`