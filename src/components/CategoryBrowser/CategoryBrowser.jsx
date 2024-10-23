import React, { useState } from 'react';
import './CategoryBrowser.css'; // CSS for styling

const categories = [
  { id: 1, name: 'Phones', icon: '/path/to/icon.png' },
  { id: 2, name: 'Tablets', icon: '/path/to/icon.png' },
  { id: 3, name: 'Chocolate', icon: '/path/to/icon.png' },
  { id: 4, name: 'Laptops', icon: '/path/to/icon.png' },
  { id: 5, name: 'Watches', icon: '/path/to/icon.png' },
  { id: 6, name: 'Gaming', icon: '/path/to/icon.png' }

];

const CategoryBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(3); // Set 'Chocolate' as default

  return (
    <div className="category-browser">
      <div className='redToday'>
       <div className='redBox'></div>
       <div className='Today'>Categories</div>
       </div>
       <div className='BrowseCategories'>
       <h2>Browse By Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <img src={category.icon} alt={category.name} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
       </div>
    </div>
  );
};

export default CategoryBrowser;
