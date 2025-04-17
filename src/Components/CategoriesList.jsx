import './ComponnetsStyle/categoriesList.scss';
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler.jsx';
import CategoryCard from './CategoryCard.jsx';

export default function CategoriesList(url, folder, imgKey) {

    const { data: categories, loading, error } = useFetch(
        'https://gist.githubusercontent.com/rokassturma/45a1b4601a981b72d1bbb41fc50dcc51/raw/899fda68d7ac4f7df606c7ada9b84f63b0b6a72e/data-category.json',
        'categories',
        'fileName'
    );

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
                    />
                ))}
            </DataHandler>
        </div>



    )
}
