import Tittle from "../../components/Tittle/index"
import Avatar from "../../components/Avatar"
import Paragraph from "../../components/paragraph"
import { Description, Theme, SideBarContainer } from "./styles"

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Tittle fontSize={20}>Jean Fonseca</Tittle>
        <Paragraph fontSize={16}>SJeanF</Paragraph>
        <Description primary fontSize={12}>
          Desenvolvedor FullStack
        </Description>
        <Theme onClick={props.trocaTema}>Trocar tema</Theme>
      </SideBarContainer>
    </aside>
  )
}

export default SideBar
