import './pagesStyle/productsPage.scss';
import { useState } from "react";
import PlantCardList from "../Components/PlantCardList";
import SecondTitle from "../Components/SecondTitle";
import CategoryFilter from '../Components/CategoryFilter';
import PriceFilter from '../Components/PriceFilter';



export default function ProductsPage({ onPriceChange }) {

  const [sortType, setSortType] = useState('deals');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [priceRange, setPriceRange] = useState([0, Infinity]);


  //Price changing function
  const handlePriceChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  }

  //Sorting change
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  }

  //Sorting category change
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories || []);
  }

  return (
    <>
      <SecondTitle big='Shop' small='Find the perfect plant for your space' />
      <div className="wrapper productsContainer">
        <aside className="aside">
          <CategoryFilter onCategoryChange={handleCategoryChange} />
          <PriceFilter onPriceChange={handlePriceChange} />
        </aside>
        <div className="cardsContainer">
          <div className="sortBlock">
            <label htmlFor="sort">Sort by</label>
            <select className='sort' id="sort" value={sortType} onChange={handleSortChange}>
              <option value='hot'>Popular</option>
              <option value='deals'>Biggest discount</option>
              <option value='price-low'>Price (low to high)</option>
              <option value='price-high'>Price (high to low)</option>
            </select>
          </div>
          <PlantCardList filterType={sortType} selectedCategories={selectedCategories} priceRange={priceRange} />
        </div>
      </div>
    </>
  )
}
