import { Paragraph as ParagrafoEstilo } from "./styles"

export type Props = {
  children: string
  primary?: boolean
  fontSize?: number
}

const Paragraph = (props: Props) => {
  return (
    <ParagrafoEstilo primary={props.primary} fontSize={props.fontSize}>
      {props.children}
    </ParagrafoEstilo>
  )
}

export default Paragraph
