import { Paragraph as ParagrafoEstilo } from "./styles"

export type Props = {
  children: string
  primary?: boolean
}

const Paragraph = (props: Props) => {
  return (
    <ParagrafoEstilo primary={props.primary}>{props.children}</ParagrafoEstilo>
  )
}

export default Paragraph
