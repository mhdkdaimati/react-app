//type of props
type ParagraphParams={
    text: string;
  }
function Paragraph(props:ParagraphParams){
    return(
    <div>{props.text}</div>
    )
}
export default Paragraph;