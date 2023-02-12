import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchCategories } from '../../features/categories/categoriesSlice';
import { initializeTest, setOptions } from '../../features/test/testSlice';

import ComboBox from '../../components/combo-box/combo-box.component';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';

import './home-page.style.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const difficulties = useSelector((state) => state.difficulties);

  const [selectedDifficulty, setSelectedDifficulty] = useState('Any');
  const [selectedCategory, setSelectedCategory] = useState('Any');

  useEffect(() => {
    dispatch(initializeTest());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDifficultyChange = (event) => {
    console.log(event);
    setSelectedDifficulty(event.currentTarget.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <div className="home-page">
      <div className="test-form">
        <h2 className="test-form__title">Choose test</h2>
        <div className="test-form__input-box">
          <ComboBox
            name="difficulty"
            label="Difficulty"
            options={difficulties}
            onChange={handleDifficultyChange}
          />
        </div>
        <div className="test-form__input-box">
          <ComboBox
            name="category"
            label="Category"
            options={categories}
            onChange={handleCategoryChange}
          />
        </div>
        <NavLink
          className="btn-link"
          onClick={() => {
            dispatch(setOptions(selectedDifficulty.name, selectedCategory.id));
          }}
          to="/test"
        >
          Start test
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
