import './pagesStyle/productsPage.scss';
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import PlantCardList from "../Components/PlantCardList";
import SecondTitle from "../Components/SecondTitle";
import CategoryFilter from '../Components/CategoryFilter';
import PriceFilter from '../Components/PriceFilter';


export default function ProductsPage() {
  const [sortType, setSortType] = useState('deals');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  /* Nuskaito parametrus iš URL dėl category filtrų */
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');

    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([Number(category)]);
    }
  }, [searchParams])

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories || []);
    setSearchParams({ category: categories[0] || '' });
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <>
      <SecondTitle big="Shop" small="Find the perfect plant for your space" />
      <div className="wrapper productsContainer">
        <aside className="aside">
          <CategoryFilter
            onCategoryChange={handleCategoryChange}
            selectedCategories={selectedCategories} />

          <PriceFilter onPriceChange={handlePriceChange} />
        </aside>

        <div className="cardsContainer">
          <div className="sortBlock">
            <label htmlFor="sort">Sort by</label>
            <select
              className="sort"
              id="sort"
              value={sortType}
              onChange={handleSortChange}
            >
              <option value="hot">Popular</option>
              <option value="deals">Biggest discount</option>
              <option value="price-low">Price (low to high)</option>
              <option value="price-high">Price (high to low)</option>
            </select>
          </div>

          <PlantCardList
            filterType={sortType}
            selectedCategories={selectedCategories}
            priceRange={priceRange}
          />
        </div>
      </div>
    </>
  );
}
