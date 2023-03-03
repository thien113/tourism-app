import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function DetailsPage() {
  const [attraction, setAttraction] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    getAttractionById();
  }, []);

  async function getAttractionById() {
    const response = await fetch(`/api/attractions/${id}`);
    const attraction = await response.json();
    setAttraction(attraction);
  }

  async function handleDelete() {
    const response = await fetch(`/api/attractions/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.log(response.status);
    }
  }

  async function handleEdit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const productData = Object.fromEntries(formData);
      await trigger(productData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
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
      <Button text="Delete" onClick={handleDelete} />
      <Button text="Edit" onClick={() => setIsEditing(!isEditing)} />
      {isEditing && <Form />}
    </>
  );
}
