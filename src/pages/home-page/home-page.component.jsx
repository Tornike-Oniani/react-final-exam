import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchCategories } from '../../features/categories/categoriesSlice';
import { setOptions } from '../../features/test/testSlice';

import './home-page.style.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const difficulties = useSelector((state) => state.difficulties);

  const [selectedDifficulty, setSelectedDifficulty] = useState('Any');
  const [selectedCategory, setSelectedCategory] = useState('Any');

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.currentTarget.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <div className="home-page">
      <h1>Choose test</h1>
      <label htmlFor="difficulty">Difficulty:</label>
      <select
        name="difficulty"
        id="difficulty"
        onChange={handleDifficultyChange}
      >
        {difficulties.map((difficulty, i) => {
          return (
            <option key={i} value={difficulty}>
              {difficulty}
            </option>
          );
        })}
      </select>
      <label htmlFor="category">Category:</label>
      <select name="category" id="category" onChange={handleCategoryChange}>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <NavLink
        onClick={() => {
          dispatch(setOptions(selectedDifficulty, selectedCategory));
        }}
        to="/test"
      >
        Start test
      </NavLink>
    </div>
  );
};

export default HomePage;
