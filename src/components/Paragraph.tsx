//type of props
type ParagraphParams={
    // ? string or undifiend
    text?: string;
  }

function Paragraph(props:ParagraphParams){
    return(
    <div>{props.text}</div>
    )
}
export default Paragraph;