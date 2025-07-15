import styled from "styled-components"
import { Props } from "."

export const Paragraph = styled.p<Props>`
  color: ${(props) =>
    props.primary ? props.theme.corPrincipal : props.theme.corSecundaria};
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: 22px;
`
