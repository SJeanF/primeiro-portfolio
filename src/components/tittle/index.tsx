import { Tittle as TituloEstilo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}

const Tittle = (props: Props) => {
  return <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
}

export default Tittle
