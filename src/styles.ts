import styled, { createGlobalStyle } from "styled-components"

const estiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding : 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  list-style: none;
}

body {
  padding-top: 80px;
  @media (max-width: 768px) {
  padding-top: 16px;
  }
}
`

export default estiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 58px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`
