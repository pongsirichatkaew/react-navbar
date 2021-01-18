import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";
export const GlobalStyles = createGlobalStyle`
    
    body{
        background: ${themes.light.backgroundColor};
        align-items: center;
        /* background: #0D0C1D; */
        /* color: #EFFFFA; */
       
        @media (prefres-color-scheme: dark){
            background: ${themes.dark.backgroundColor};
        }
}`;
