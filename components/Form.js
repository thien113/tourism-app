import Button from "./Button";

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const attractionData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.error(response.status);
    }
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
        <label htmlFor="mapUrl">Image Url: </label>
        <input name="mapUrl" id="mapUrl" />
        <label htmlFor="description">Description: </label>
        <textarea rows={4} name="description" id="description" />
        <Button text="Save Place" url="/api/attractions" />
      </form>
    </>
  );
}
