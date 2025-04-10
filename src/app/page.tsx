'use client';

import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import { useEffect, useState } from "react";
//to deal with functions

export default function Home() {
  let hideDescription = true;

  const [counter, setCounter] = useState(0);
  
  const handleClick=()=>{
    setCounter(counter + 1);
  }

  useEffect(()=>{
    console.log('use effect')

  },[])
  //use effect renders only one time in case of [] existance

  return (

    // <main style={{color:"yellow", backgroundColor:"red"}}>
    <main>
      <Header text="hej from header"/>
      <Paragraph text="Paragraph" textSub="optional"/>
      {/* text props is optional deu to ? in definition type */}
      <Paragraph />
      {/* conditional show */}
      {hideDescription && <Paragraph text="true"/>}
      {hideDescription ? <Paragraph text="true"/> : null}
      <Link href="/about">About</Link>

      <div>counter {counter}</div>
      <button onClick={handleClick}>count</button>
    </main>
    
  );

}
 
