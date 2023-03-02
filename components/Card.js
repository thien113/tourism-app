import Image from "next/image";
export default function Card({ attraction }) {
  return (
    <section>
      <Image
        src={attraction.image}
        alt={attraction.name}
        width={500}
        height={500}
      />
      <h2>Location: {attraction.location}</h2>
    </section>
  );
}
