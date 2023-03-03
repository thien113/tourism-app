import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [attractionList, setAttractionList] = useState([]);
  let attractions;
  useEffect(() => {
    fetch("/api/attractions")
      .then((res) => res.json())
      .then((data) => (attractions = data))
      .then(() => {
        console.log("index.js", attractions);
      })
      .then(() => {
        setAttractionList(attractions);
      });
  }, []);
  console.log(attractionList);

  return (
    <>
      <Head>
        <title>Tourio</title>
        <meta
          name="description"
          content="A Tourism App to find the best places"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {attractionList.map((attraction) => {
          return <Card key={attraction.id} attraction={attraction} />;
        })}

        <Button text="+Place" url="/new-attraction" />
      </main>
    </>
  );
}
