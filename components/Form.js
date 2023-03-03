import Button from "./Button";

export default function Form({ addAttraction }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const location = form.location.value;
    const mapUrl = form.mapUrl.value;
    const description = form.description.value;

    const newCard = {
      name: name,
      imageUrl: imageUrl,
      location: location,
      mapUrl: mapUrl,
      description: description,
    };
    const response = await fetch("/api/attractions", {
      method: "POST",
      body: JSON.stringify(newCard),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      form.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
    addAttraction(newCard);
  }
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" />
        <label htmlFor="imageUrl">Image Url: </label>
        <input name="imageUrl" id="imageUrl" />
        <label htmlFor="location">Location: </label>
        <input name="location" id="location" />
        <label htmlFor="mapUrl">Map Url: </label>
        <input name="mapUrl" id="mapUrl" />
        <label htmlFor="description">Description: </label>
        <textarea rows={4} name="description" id="description" />
        <Button text="Save Place" />
      </form>
    </>
  );
}
