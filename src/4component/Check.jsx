import { useState, useEffect, useRef } from "react";
import { A } from "./indexA";

function Check() {
  const [stockData, setStockData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://api.marketstack.com/v1/eod?access_key=4ca28b1d57a23c184d0ee96169a3041a&symbols=AAPL"
  //         //   {
  //         //     headers: {
  //         //       Authorization: "Bearer 4ca28b1d57a23c184d0ee96169a3041a",
  //         //     },
  //         //   }
  //       );
  //       const data = await response.json();
  //       setStockData(data);
  //     } catch (error) {
  //       console.error("Error fetching stock data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <pre>{JSON.stringify(A, null, 2)}</pre>
      {/* {stockData ? (
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      ) : (
        <p>Loading stock data...</p>
      )} */}
    </div>
  );
}
export default Check;
