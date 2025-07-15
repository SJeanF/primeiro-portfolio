import Tittle from "../../components/Tittle"
import Paragraph from "../../components/paragraph"
import { GitHubSecao } from "./styles"

const AboutMe = () => {
  return (
    <section>
      <Tittle fontSize={16}>Sobre</Tittle>
      <Paragraph primary>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat illum
        tenetur atque similique eos, ex quo ipsa nulla quas sequi quos rem fuga
        necessitatibus culpa qui. Dolorem dolores obcaecati ipsam.
      </Paragraph>
      <GitHubSecao>
        <img
          src="https://github-readme-stats.vercel.app/api?username=SJeanF&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="grafico de commits"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SJeanF&layout=compact&langs_count=7&theme=dracula"
          alt="linguagens utilizadas"
        />
      </GitHubSecao>
    </section>
  )
}

export default AboutMe
