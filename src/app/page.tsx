import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";




 function Home() {
  let hideDescription = true;
  return (

    <main>
      <Header text="hej from header"/>
      <Paragraph text="Paragraph"/>
      {/* text props is optional deu to ? in definition type */}
      <Paragraph />
      {/* conditional show */}
      {hideDescription && <Paragraph text="true"/>}
      {hideDescription ? <Paragraph text="true"/> : null}
    </main>
    
  );

}
export default Home;
