import React from "react";
import storeData from "./data/storeData";
import "./styles/store.css";

export default function Store() {
  const [data, dataArray] = React.useState(storeData);
  const [cart, setCart] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [pay, setPay] = React.useState(false);
  const [counter, setCounter] = React.useState(0)

  function addTo(id) {
    if(counter===15){
      alert('Навіщо тобі стіко карт?')
    }
    else{
      setCart((previousCart) => [...previousCart, `${data[id - 1].name}\n`]);
      setPrice((prevPrice) => prevPrice + data[id - 1].price);
      setCounter(prevCount => prevCount + 1)
    }
  }

  console.log(cart);

  function setOrder() {
    setPay(!pay);
  }

  function orderNumber() {
    let genOrder = [];
    const numbers = "0123456789";
    for (let i = 0; i < 25; i++) {
      genOrder.push(Math.floor(Math.random() * numbers.length));
    }
    return genOrder;
  }

  const info = data.map((item) => {
    return (
      <div className="containeri">
        <img src={item.image} className="images"></img>
        <p className="name">{item.name}</p>
        <p className="description">{item.description}</p>
        <div className="priceBuy">
          <p className="price">{item.price} грн</p>
          <p className="oldPrice">{item.oldPrice}</p>
          <img
            onClick={() => addTo(item.id)}
            className="buy"
            src={
              "https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-shopping-basket-icon-png-image_1871519.jpg"
            }
          ></img>
        </div>
      </div>
    );
  });


  return (
    <div>
      {pay ? (
        <div className="containerOrder">
          <p className="orderNumb">Замовлення №{orderNumber()}</p>
          <p className="priceOrder">
            На суму <span className="price">{price}</span> грн:
          </p>
          <div className="ordersBuy">{cart}</div>
        </div>
      ) : (
        <div className="containerAll">
          <div className="containerBasket">
            <div className="orders">{cart}</div>
            <p className="price">
              {price===0? '' : `${price} грн`}
              </p>
            <button className="order" onClick={setOrder}>
              Замовити
            </button>
          </div>
          <div className="containerInfo">{info}</div>
        </div>
      )}
    </div>
  );
}
