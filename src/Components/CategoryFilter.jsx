import './ComponnetsStyle/categoryFilter.scss';
import useCategories from '../hooks/useCategories.js'

export default function CategoryFilter() {

    const { categories } = useCategories();

    return (
        <div className='categoryFilter'>
            <details>
                <summary>
                    By Categories
                </summary>
                <div className='categoryDropDown'>
                    <label>
                        <input type='checkbox' />
                        All
                    </label>
                    {
                        categories.map(category => (
                            <label key={category.id}><input type='checkbox' />
                                {category.title}
                            </label>
                        ))
                    }
                </div>
            </details>
        </div>
    )
}
