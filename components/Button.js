export default function Button({ text, url, onClick }) {
  return (
    <button onClick={onClick}>
      <a href={url}>{text}</a>
    </button>
  );
}
