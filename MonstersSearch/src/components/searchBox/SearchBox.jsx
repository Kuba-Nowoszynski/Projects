export default function SearchBox({
  search,
  handleChange,
  className,
  placeholder,
}) {
  return (
    <input
      type="search"
      className={className}
      value={search}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
