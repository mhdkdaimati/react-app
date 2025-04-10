//type of props
type ParagraphParams={
    // ? string or undifiend (optional)
    text?: string;
    textSub?: string;

  }

function Paragraph(props:ParagraphParams){
    return(
    <>
     
      <div>{props.text}</div>
      <h6>{props.textSub}</h6>
    </>
    )
}
export default Paragraph;