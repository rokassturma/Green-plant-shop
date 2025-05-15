import { useLocation } from 'react-router-dom';
import usePlants from '../hooks/usePlants'
import DataHandler from '../utils/DataHandler';
import './ComponnetsStyle/plantCardList.scss'
import PlantCard from './PlantCard';

export default function PlantCardList({ filterType = '', limit = 0, selectedCategories = [], priceRange = [0, Infinity] }) {

    const { plants, loading, error } = usePlants();

    const location = useLocation();

    const getFilteredPlants = (plants) => {

        /* Copy of original array */
        let filtered = [...plants];

        /* Filter by category */
        if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
            filtered = filtered.filter(plant =>
                selectedCategories.includes(plant.categoryId)
            );
        }

        /* Filter by price */

        filtered = filtered.filter(plant => {
            const discountedPrice = plant.price * (1 - plant.discount / 100);

            return (discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1])
        })


        /* Sorting by type */
        if (filterType === 'hot') {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (filterType === 'deals') {
            filtered.sort((a, b) => b.discount - a.discount);
        } else if (filterType === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (filterType === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        }
        return limit ? filtered.slice(0, limit) : filtered;
    }

    const filteredPlants = getFilteredPlants(plants);
    const totalPlants = filteredPlants.length;
    const allPlants = plants.length;

    return (
        <>
            {
                location.pathname == '/products' &&
                (
                    < p className='plantsCounter'>
                        Showing {totalPlants} from {allPlants} plants
                    </p >
                )
            }

            <div className='plantCardList'>
                <DataHandler loading={loading} error={error}>
                    {
                        filteredPlants.map(p => (
                            <PlantCard
                                key={p.id}
                                imageSrc={p.imageSrc}
                                title={p.title}
                                price={p.price}
                                discount={p.discount}
                                plantId={p.id}
                            />
                        ))
                    }
                </DataHandler>
            </div>
        </>
    );
}
