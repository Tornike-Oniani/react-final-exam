import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import './home-page.style.scss';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
