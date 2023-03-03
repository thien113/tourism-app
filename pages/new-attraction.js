import Button from "@/components/Button";
import Form from "@/components/Form";

export default function newAttraction({ addAttraction }) {
  return (
    <>
      <Button text="Back" url="/" />
      <Form addAttraction={addAttraction} />
    </>
  );
}
