import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <Button text="+Place" url="/new-attraction" />
      </main>
    </>
  );
}
