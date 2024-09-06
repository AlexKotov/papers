import "./Header.css";

export function Header() {
  const handleAdd = () => {};

  return (
    <header className="header">
      <button type="button" onClick={handleAdd}>
        Add note
      </button>
    </header>
  );
}
