import styled from "styled-components"
import { Paragraph } from "../../components/paragraph/styles"

export const Description = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const Theme = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
