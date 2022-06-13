import "./App.css";
import Product from "./component/Product";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = () => {
    setLoading(true);

    fetch(`http://localhost:3001/products?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        setError(true);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const addProduct = (title, gender, category, price, image) => {
    let id;
    if (products.length === 0) {
      id = 1;
    } else {
      id = products[products.length - 1].id + 1;
    }

    const product = {
      title: title,
      gender: gender,
      category: category,
      price: price,
      image: image,
      id: id,
    };
    setLoading(true);
    fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getProducts();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getProducts();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return loading ? (
    <h1>loading...</h1>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <div className="App">
      <Product
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        products={products}
      />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREVIOUS
      </button>
      <button onClick={() => setPage(page + 1)} style={{ marginLeft: "1rem" }}>
        NEXT
      </button>
    </div>
  );
}

export default App;
