import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import About from "./about/page";

 function Home() {
  let hideDescription = true;
  return (

    <main style={{color:"yellow", backgroundColor:"red"}}>
      <Header text="hej from header"/>
      <Paragraph text="Paragraph"/>
      {/* text props is optional deu to ? in definition type */}
      <Paragraph />
      {/* conditional show */}
      {hideDescription && <Paragraph text="true"/>}
      {hideDescription ? <Paragraph text="true"/> : null}
      <Link href="/about">About</Link>
    </main>
    
  );

}
export default Home;
