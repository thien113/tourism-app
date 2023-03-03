import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [attractionList, setAttractionList] = useState([]);
  let attractions;
  function getAllAttractions() {
    fetch("/api/attractions")
      .then((res) => res.json())
      .then((data) => (attractions = data))
      .then(() => {
        console.log("index.js", attractions);
      })
      .then(() => {
        setAttractionList(attractions);
      });
  }
  useEffect(() => {
    getAllAttractions();
  }, []);
  function addAttraction(newAttraction) {
    setAttractionList([newAttraction, ...attractionList]);
  }
  return (
    <>
      <Header />
      <Component
        {...pageProps}
        attractions={attractionList}
        addAttraction={addAttraction}
        getAll={getAllAttractions}
      />
    </>
  );
}
