import { useState, useReducer, useEffect } from "react";

function getApi(url) {
  return fetch(url).then((res) => res.json());
}

const initState = {
  loading: false,
  data: [],
  error: false,
};
const reducer = (state, action) => {
  if (action.name == "Set_Loading") {
    return {
      ...state,
      loading: true,
      data: [],
      error: false,
    };
  } else if (action.name == "Set_Data") {
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: false,
    };
  } else if (action.name == "Set_Error") {
    return {
      ...state,
      loading: false,
      data: [],
      error: true,
    };
  } else {
    throw new Error("Something Went Wrong");
  }
};

function Products() {
  const [state, action] = useReducer(reducer, initState);
  const { loading, data, error } = state;

  const FetchData = async (url) => {
    action({ name: "Set_Loading" });
    try {
      let dat = await getApi(url);
      action({ name: "Set_Data", payload: dat });
    } catch (error) {
      action({ name: "Set_Error" });
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData(`https://fakestoreapi.com/products`);
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something Went Wrong</h1>
  ) : (
    <div
      style={{
        textAlign: "center",
      }}
    >
      Products
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {data?.map((item, ind) => (
          <div
            style={{
              width: "250px",
              border: "1px solid grey",
              margin: "20px",
              padding: "15px",
              textAlign: "center",
            }}
            key={item.id}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={item.image}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <p>{item.description}</p>
            <h3>Rs. {item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
