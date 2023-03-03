import Head from "next/head";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home({ attractions }) {
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
        {attractions.map((attraction) => {
          return <Card key={attraction._id} attraction={attraction} />;
        })}

        <Button text="+Place" url="/new-attraction" />
      </main>
    </>
  );
}
