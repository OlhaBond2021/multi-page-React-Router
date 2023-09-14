import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/*<a href="/products">the list of products</a> таким чином відправляється новий http запит і сторінка оновлюється, також заново запускається react app*/} 
        Go to <Link to='products'>the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
