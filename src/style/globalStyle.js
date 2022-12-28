import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    &::-webkit-scrollbar {
    width: 12px; 
    }
    
    &::-webkit-scrollbar-track {
    background: #8d8d99;       
    }

    &::-webkit-scrollbar-thumb {
    background-color: #e1e1e6;    
    border-radius: 20px;     
    }
  }

  

`;
