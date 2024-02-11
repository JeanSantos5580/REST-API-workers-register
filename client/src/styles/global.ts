import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px #9f75ff
}

body{
    background: ${({ theme }) => theme.colors.gray_800};
    color: #cdcdcd;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

@media screen and (max-width: 750px){
    body, input, textarea, button{
        font-size: 85%;
    }
}

@media screen and (min-width: 751px) and (max-width: 1024px){
    body, input, textarea, button{
        font-size: 90%;
    }
}
`
