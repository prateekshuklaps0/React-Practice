import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");

  async function FetchData(url) {
    try {
      let res = await fetch(url);
      let dat = await res.json();
      setData((prev) => dat);
      const obj = dat?.filter((item, ind) => item.id === Number(id));
      setProduct((prev) => obj[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData(`http://localhost:8080/products`);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img
          style={{ width: "250px", height: "250px" }}
          src={product.image}
          alt={product.title}
        />
        <h1>{product.title}</h1>
        <h2>Category : {product.category}</h2>
        <h5>{product.description}</h5>
        <h3>Price : {product.price}</h3>
        <h4>
          Rating : {product?.rating?.rate}
          {"       "} {"  "}
          <span>Reviews : {product?.rating?.count}</span>
        </h4>
      </div>
    </div>
  );
}

export default SingleProduct;
