const FilterBar = ({ setCategory, setSort }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="smartphones">smartphones</option>
        <option value="laptops">laptops</option>
        <option value="fragrances">fragrances</option>
        <option value="skincare">skincare</option>
        <option value="groceries">groceries</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default FilterBar;