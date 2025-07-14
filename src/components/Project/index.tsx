import Tittle from "../tittle"
import { Paragraph } from "./../paragraph/styles"
import { Card, LinkBotao } from "./styles"

const Project = () => {
  return (
    <Card>
      <Tittle>Projeto Lista de Tarefas</Tittle>
      <Paragraph>Lista de tarefas feita com Vue.js</Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Project
