import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
//to='..' це відносний шлях, який повертає назад на один крок якщо вказати relative='path', 
//або в корінь сторінки якщо вказати relative='path' (або не вказувати, стоїть за замовчуванням)
  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative='path' >Back</Link></p>
    </>
  );
};

export default ProductDetailPage;
