// import React, {useState,useEffect} from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, NavLink, Route, Routes, useNavigate, useParams } from "react-router";
// import App from "./App";
// import "./index.css";
// import useFetch from "./components/hooks/useFetch";

// const root = ReactDOM.createRoot(document.getElementById("root"));



// const Home = () => {
//   return (
//     <main>
//       <h1>Home Page</h1>
//     </main>
//   );
// };

// const About = () => {
//   return (
//     <main>
//       <h1>About Page</h1>
//     </main>
//   );
// };

// const Contact = () => {
//   return (
//     <main>
//       <h1>Contact Page</h1>
//     </main>
//   );
// };

// const Profile = () => {
//   return (
//     <main>
//       <h1>Profile Page</h1>
//     </main>
//   );
// };

// const UserProfile = () => {
//   const params = useParams();

//   return (
//     <main>
//       <h1>This is a profile of {params.username}</h1>
//       <h2>Age: {params.age}</h2>
//     </main>
//   );
// };

// const ProfileSetting = () => {
//   return (
//     <main>
//       <h1>Profile Setting Page</h1>
//     </main>
//   );
// };

// const CartPage1 = () => {
//   const [cartItems, setCartItems] = useState([]);
  
//   useEffect(() => {
//     const storedCart = localStorage.getItem("userCart");
//     if (storedCart) {
//       try {
//         setCartItems(JSON.parse(storedCart));
//       } catch (err) {
//         console.error("Error parsing cart:", err);
//         setCartItems([]);
//       }
//     }
//   }, []);
  
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("userCart", JSON.stringify(updatedCart));
//   };
  
//   const navigate = useNavigate();
//   const goToProduct = (id) => {
//     navigate(`/products/${id}`);
//   };

//   return (
//     <main>
//       <h1>Cart Page</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <img src={item.image} alt={item.title} width={100} height={100} />
//             <div>
//               <h2>{item.title}</h2>
//               <p>Price: ${item.price}</p>
//               <p>Category: {item.category}</p>
//               <button onClick={() => goToProduct(item.id)}>View Product Details</button>{" "}
//               <button onClick={() => removeItem(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))
//       )}
//     </main>
//   );
// };
// // => /products
// const Products = () => {
//   const { data, error, loading } = useFetch({
//     url: "https://fakestoreapi.com/products",
//     method: "GET"
//   });

//   return (
//     <main style={{ display: "flex", flexDirection: "column", overflow: "auto", height: "100vh" }}>
//       <h1>Products</h1>
//       {loading ? (
//         "Loading..."
//       ) : (
//         <>
//           {data?.map((product, i) => {
//             return (
//               <NavLink to={`/products/${product.id}`} key={i}>
//                 <img src={product.image} alt={product.title} width={200} height={200} />
//                 <p>{product.title}</p>
//               </NavLink>
//             );
//           })}
//         </>
//       )}
//     </main>
//   );
// };

// // => /products/:id
// const ProductPage = () => {
//   const { id } = useParams();
//   const { data, error, loading } = useFetch({
//     url: `https://fakestoreapi.com/products/${id}`,
//     method: "GET"
//   });
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//   const cartItems = JSON.parse(localStorage.getItem("userCart") || "[]");
//   localStorage.setItem("userCart", JSON.stringify([...cartItems, data]));
//   navigate("/cart");
// };

//   return (
//     <>
//       {loading ? (
//         <h1>Product is loading...</h1>
//       ) : (
//         <main>
//           <img src={data?.image} alt={data?.title} width={200} height={200} />
//           <h2>{data?.title}</h2>
//           <h3>{data?.price}</h3>
//           <p>{data?.category}</p>
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </main>
//       )}
//     </>
//   );
// };

// // const CartPage = () => {
// //   return (
// //     <main>
// //       <h1>Cart Page</h1>
// //     </main>
// //   );
// // };

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<CartPage1 />} />
//         <Route path="/profile">
//           <Route index element={<Profile />} />
//           <Route path=":username">
//             <Route index element={<UserProfile />} />
//             <Route path=":age" element={<UserProfile />} />
//           </Route>
//           {/* <Route path=":username/:age" element={<UserProfile />} /> */}
//           <Route path="setting" element={<ProfileSetting />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes, useNavigate, useParams } from "react-router";
import App from "./App";
import "./index.css";
import useFetch from "./components/hooks/useFetch";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};

const About = () => {
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
};

const Contact = () => {
  return (
    <main>
      <h1>Contact Page</h1>
    </main>
  );
};

const Profile = () => {
  return (
    <main>
      <h1>Profile Page</h1>
    </main>
  );
};

const UserProfile = () => {
  const params = useParams();

  return (
    <main>
      <h1>This is a profile of {params.username}</h1>
      <h2>Age: {params.age}</h2>
    </main>
  );
};

const ProfileSetting = () => {
  return (
    <main>
      <h1>Profile Setting Page</h1>
    </main>
  );
};

// => /products
const Products = () => {
  const { data, error, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
    method: "GET"
  });

  return (
    <main style={{ display: "flex", flexDirection: "column", overflow: "auto", height: "100vh" }}>
      <h1>Products</h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data?.map((product, i) => {
            return (
              <NavLink to={`/products/${product.id}`} key={i}>
                <img src={product.image} alt={product.title} width={200} height={200} />
                <p>{product.title}</p>
              </NavLink>
            );
          })}
        </>
      )}
    </main>
  );
};

// => /products/:id
const ProductPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch({
    url: `https://fakestoreapi.com/products/${id}`,
    method: "GET"
  });
  const navigate = useNavigate();

  console.log({ data });

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem("userCart") || [];
    if (cartItems.length > 0)
      localStorage.setItem("userCart", JSON.stringify([...cartItems, data]));
    else localStorage.setItem("userCart", JSON.stringify([data]));
    navigate("/cart");
  };

  return (
    <>
      {loading ? (
        <h1>Product is loading...</h1>
      ) : (
        <main>
          <img src={data?.image} alt={data?.title} width={200} height={200} />
          <h2>{data?.title}</h2>
          <h3>{data?.price}</h3>
          <p>{data?.category}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </main>
      )}
    </>
  );
};

// => /cart
function CartPage() {
  const [cItems, setItems] = useState([]);

  const handleRemoveCart = (id) => {
    const items = cItems.filter((item) => item.id !== id);
    localStorage.setItem("userCart", items.length ? JSON.stringify(items) : []);
    setItems(items);
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("userCart") || [];
    if (cartItems.length > 0) setItems(JSON.parse(cartItems));
  }, []);

  return (
    <main>
      <h1>Cart Page</h1>

      {cItems.length > 0 ? (
        cItems.map((item) => (
          <li key={item.id}>
            <NavLink key={item?.id} to={`/products/${item.id}`}>
              <img src={item?.image} alt={item?.title} width={200} height={200} />
            </NavLink>
            <h2>{item?.title}</h2>
            <h3>{item?.price}</h3>
            <p>{item?.category}</p>
            <button onClick={() => handleRemoveCart(item.id)}>Remove from Cart</button>
          </li>
        ))
      ) : (
        <h3>No Items in cart</h3>
      )}
    </main>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path=":username">
            <Route index element={<UserProfile />} />
            <Route path=":age" element={<UserProfile />} />
          </Route>
          {/* <Route path=":username/:age" element={<UserProfile />} /> */}
          <Route path="setting" element={<ProfileSetting />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
