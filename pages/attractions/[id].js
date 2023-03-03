import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DetailsPage() {
  const [attraction, setAttraction] = useState("");
  const router = useRouter();
  const id = router.query.id;

  async function getAttractionById() {
    const response = await fetch(`/api/attractions/${id}`);
    const attraction = await response.json();
    setAttraction(attraction);
  }
  getAttractionById();
  return (
    <>
      <h2>{attraction.name}</h2>
      <Image
        src={attraction.image}
        alt={attraction.name}
        width={500}
        height={500}
      ></Image>
      <h4>{attraction.location}</h4>
      <p>{attraction.description}</p>
      <a target="__blank" href={attraction.mapURL}>
        Map
      </a>
    </>
  );
}
