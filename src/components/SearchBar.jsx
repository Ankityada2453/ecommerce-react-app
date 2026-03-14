const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;