import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/products');
  });
  return (
    <h1 className="text-3xl font-bold text-blue-500 underline">Hello world!</h1>
  );
};

export default Home;
