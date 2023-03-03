import Image from "next/image";
import Link from "next/link";
export default function Card({ attraction }) {
  console.log("card component", attraction);
  return (
    <section>
      <Link href={`/attractions/${attraction._id}`}>
        <Image
          src={attraction.image}
          alt={attraction.name}
          width={500}
          height={500}
        ></Image>
      </Link>
      <h2>Location: {attraction.location}</h2>
    </section>
  );
}
