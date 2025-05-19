import './ComponnetsStyle/categoryFilter.scss';
import useCategories from '../hooks/useCategories.js'
import { useState } from 'react';

export default function CategoryFilter({ onCategoryChange, selectedCategories }) {

    const { categories } = useCategories();

    const handleChange = categoryId => {
        if (categoryId === 'all') {
            onCategoryChange([]);
            return;
        }
        const updateCategories = selectedCategories.includes(categoryId)
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];
        onCategoryChange(updateCategories);
    }

    return (
        <div className='categoryFilter'>
            <details>
                <summary>
                    By Categories
                </summary>
                <div className='categoryDropDown'>
                    <label>
                        <input
                            type='checkbox'
                            checked={selectedCategories.length === 0}
                            onChange={() => handleChange('all')}
                        />
                        All
                    </label>
                    {
                        categories.map(category => (
                            <label key={category.id}><input
                                type='checkbox'
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => handleChange(category.id)}
                            />
                                {category.title}
                            </label>
                        ))
                    }
                </div>
            </details>
        </div>
    )
}
