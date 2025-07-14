import Tittle from "../../components/tittle"
import Project from "../../components/Project"
import { List } from "./styles"

const Projects = () => {
  return (
    <section>
      <Tittle fontSize={16}>Projetos</Tittle>
      <List>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <Project />
            </li>
          ))}
      </List>
    </section>
  )
}

export default Projects
