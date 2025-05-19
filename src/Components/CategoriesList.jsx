import './ComponnetsStyle/categoriesList.scss';
import DataHandler from '../utils/DataHandler.jsx';
import CategoryCard from './CategoryCard.jsx';
import useCategories from '../hooks/useCategories.js';

export default function CategoriesList() {

    const {categories, loading, error} = useCategories();

    return (

        <div className='categories-list'>
            <DataHandler
                loading={loading}
                error={error}
            >
                {categories.map(elem => (
                    <CategoryCard
                        imageSrc={elem.imageSrc}
                        title={elem.title}
                        key={elem.id}
                        categoryId={elem.id}
                    />
                ))}
            </DataHandler>
        </div>
    )
}
