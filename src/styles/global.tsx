import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: "Roboto", sans-serif;
    background-color: #171923;
    color: white;
}
`;

export default Global;
