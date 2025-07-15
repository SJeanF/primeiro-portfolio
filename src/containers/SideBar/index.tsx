import Tittle from "./../../components/tittle/index"
import Avatar from "../../components/Avatar"
import Paragraph from "../../components/paragraph"
import { Description, Theme, SideBarContainer } from "./styles"

const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Tittle fontSize={20}>Jean Fonseca</Tittle>
        <Paragraph fontSize={16}>SJeanF</Paragraph>
        <Description primary fontSize={12}>
          Desenvolvedor FullStack
        </Description>
        <Theme>Trocar tema</Theme>
      </SideBarContainer>
    </aside>
  )
}

export default SideBar
