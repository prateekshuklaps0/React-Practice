import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Pages from "./Pages";

function getUrl(url) {
  return fetch(url);
}

function FixSearchParam(val) {
  val = Number(val);
  if (val == null || val <= 0) {
    val = 1;
  }
  return val;
}

function Products() {
  const [searchparam, setSearchParam] = useSearchParams();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(FixSearchParam(searchparam.get("page")));

  async function FetchData(url) {
    try {
      let res = await getUrl(url);
      let dat = await res.json();
      setData((prev) => dat);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setSearchParam({ page });
    FetchData(`http://localhost:8080/products?_limit=5&_page=${page}`);
  }, [page]);

  return (
    <div style={{ textAlign: "center" }}>
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        -
      </button>
      <button disabled={true}>{page}</button>
      <button disabled={page === 4} onClick={() => setPage((prev) => prev + 1)}>
        +
      </button>
      <div
        style={{
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {data?.map((item, ind) => (
          <NavLink
            to={`/products/${item.id}`}
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "15px",
              textDecoration: "none",
              color: "black",
            }}
            key={item.id}
          >
            <img
              style={{ width: "100px", height: "100px" }}
              src={item.image}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <h4>Category : {item.category}</h4>
            <h5>Price : Rs.{item.price}</h5>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Products;
