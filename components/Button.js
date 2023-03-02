export default function Button({ text, url }) {
  return (
    <button>
      <a href={url}>{text}</a>
    </button>
  );
}
