import Image from "next/image";
//import  styles  from "./page.module.css";


type HeaderParams={
  text: string;
}
  function Header(props:HeaderParams){
    return(
      <div>{props.text}</div>
    )
  }

 function Home() {
  return (

    <main>
      <h1>React</h1>
      <Header text="hej from header"/>
    </main>
    
  );

}
export default Home;
