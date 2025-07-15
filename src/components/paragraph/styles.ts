import styled from "styled-components"
import { Props } from "."

export const Paragraph = styled.p<Props>`
  color: ${(props) => (props.primary ? "#282a35" : "#949494")};
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: 22px;
`
