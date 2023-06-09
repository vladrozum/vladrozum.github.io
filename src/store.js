import React from "react";
import storeData from "./data/storeData";
import "./styles/store.css";

export default function Store({ on }) {
  const trash =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAMAAAC9ZjJ/AAAAY1BMVEX///8AAAD19fUqKirp6elERET4+PiFhYWysrJra2uvr68TExPd3d3g4OA8PDyoqKjT09N7e3sZGRkwMDDIyMiYmJi6urphYWFycnIICAjAwMAlJSVQUFDv7+9bW1uenp6QkJAEI9U9AAAIsUlEQVR4nO2ca3uqOhCFvSDWKhS1Wi1i/f+/8tTdnTUTWUBucvZzzp6PKMkLSSZzC5NJhBRvH9NeKW9VE9NBuFSnXT/aL7m8/gtozdKB7Of1VWOzFRdXtm95GZdts/dgm04PY7JlLrNNy9t4bLOBRUpkvHl382abnsdia+xuyw6ZW3/7GgluK13uv/qU7Kda0vtiFLaiRI/XgR7zN6EbR58c0d9l+M9vPn9OIBjV+cbh3yfQzZ5O9i216W3p8u8N4EbRJp69YS8ZQxGLInEbp5X5+xh7WAa43On/sF6cZkGk/EFweVZsLCneZc5tHKTAcj09tlTErd/icCrr3doWwD3+wOVs/n5++KHefyw/g9E2KzT8NCmPYWyvz0e7yzbEBXL2EWKl9qcLsNlCZZ95sr2MxzadfvixZcMtphQ/S3Q73GBK2ftMu0KZ2LvFk6RUdD5GgTJgD1X2JCmOgvfhsVnIqIarcAdp4GOc3Res3PRkS+Idzrm7JdqY971+fyLZXRYGzn0Xy4wl/nR/7uq/IhAKeTrcx1+4QPnPws2rfPZMiVoQ03r+VNmfY+BGk79w/3O4ZjHcWmLx2MRH87yM1B4+TuaTn0kgZy+zMduOOe0uvpbZ7NuQnmHuvTRpLXTT7vr9u+HGLVz1KNhdEofCZ6bdXcTmjX05cYoDcAGhCAgcncS+BHz2OiJEB5WyTQd2F4TY67Dp9kvgv67Sgd0F0dF9RCMI53iGWoYEcIuIRpBJSpwb+kzRbpInJPIaOCLNQaVMkX0pHyZu87JdttV6tdy+tnRDcdgeHpNkiEzuFtLZdjCVVvDKgtJe8j/1BysbJP+Vq5k/MP+8pDf74ToMi6EddsVvs+GyBVvDv3ssLQPDTAy73xPtZMjZe++IoNu3YcroqxsTw7B2EzMQO5dXMGBydoWCa2s+oG1dCoSVfdJDiBascb1OufRvRJ8dd+2smUS3XDzXSnFgE7VTjF3mYn9isSn5XXYsbMsao3CS/7TeXEcvQ8b6kd9lm6rQBLchOInK6/vzDrhB8+LIX7kV3Duw1qLhaods8SwrRDD1rXX0Za5qY4XCSYZf399AmVbSVeZt2kFbWvoBxsppCK4yF9f6/g0yCVF1iTcKBz2ntTCFw+Zc6/sroxLXUXAYQGs+YNXofZvC4WKp7383CeUyCg4DeLMad4bD/ZZtBLhLVCJdZpfWU5Uz3Bf75+TzTP7qLzK79DMC7qquUjgoHb10+F/95cgwBO6i5gztEQvK0q8Yj20UHPI/Fwq3UOYRhYMqshYUBjvO4wTcQq+rjZkzpbKZPOAO9Kq3QCNZMSqYbqWypCgcrEpLT2Kw42qvRJdrONQe7ofgqOUn7zMOLsMWrY1eY6ZP5yoTSeFg+WnDIT+lgZMgmAVnLJfaGU5balJmHBm8onBIFp9Vn/1wOtk7M1a6X0CzB0633sAHGIDLr/R282y7yFwzTE/9kDIu6iqDk3y8BWfMuTqyjBMYernlWIRqnjO4jL54pDli4fjCOjnCSb2zBWcuxmZMuYpfOsJtDNxO+70IV8eZc10Vl7iqdAGFM7PLekeAW0Tt+2obtAwy5lowuMpsMAtr9wNcHFuHKcsGm8KZTfii4ZJF/RCfsJwAZqYxOLHH9exKFi+F6WaFljHYynGlcObaVcNhNGIjzYCzfDvmuDI4vHeryov65CGClbXTK4s5rgzuSK512e4xcGv97EdfOMu/QZDqFgmHGNZarzc2pXvhrAGENRCbUcspHFvDDA7XrAHEhht7RjI3vsxZ745YhTsCouDeKBxiTLHVeXnNWsIanvbD0UDeBH5J7MGXnNYGFo5w2Eluus2AWsgOwezVEyQ7u8HR4PEMcNE1ZtSgmznC0ZsbnKjwrUlvCY1tYpmoCH4vnH7tAhd9EoxOG4GTh2dwzJyfFICLNOe6FhzaFwuXwV0YXGWebB0NJ+EqfRUKRhYcg4MLoX03aPB9NBzfgYgeJXBcSeKPl3RwVuB14QZnLlkaLTRN3QdnmWTE1+6F084XnyhBIrUC2pgldUR9cFbRfqK45l3gBlgOFKnv7YXTb52m9cIE3p2VHod2lX2JwCHbetbzlaesgkSimHonJEVOBC6jcLg3/pMXgFvrSY2hkUlN4OA9W2k5wAWe5FPCA0WY1OIcEDjqutEQVaDwEBtxvwgcraeSyGP8+R4enCQVWH1wOu4gxaoJztCsWFuSduqDo/VUmCe7BMfTAadD36RbAkceQWUP9i6fAXCF02pJBgwkBI4GRXAar0xwEoT655UTHGxBnW5H4mwRbaV3RDYk/oeNicDRkk+aDw0VGhOSyCl6IHC0WFbgEnxMgk8cc1F2XAJHduCOHHyoYMnp2CbgZMclcDRniIWeooIWC1N/5iYzhpR8FqQPTm9UtCglVCQuouGMPpAkDIG7MjhekxAotFYKpWySWyNwNHGW9FsSDYUz/a574HK6i9L4SajQ4kGkTHvhiI+mJmKKj6uIC6WUJpKaks9tw0maW++il5RwUhOq9sJZeyH2welddN66M0YQTlPPn7fjR224hlYv4FmTHIlmIdwc0xqD04aTam0Kl8Bi6jiU3fbv2nBIaFo+NeASGCUdh7JhDsAEhfcN/YVhtWqNAJfkI1L020UmyCaf80AJq2hcM/Y3daPvl5MGhIfEb62h/r0JK8uq+QmBWdlyXpwbLB2Bl5drXa+sFVed5vXV0l7NrazLpfWKYKam+VxeVwZyVhQP0b+8KB6t26x4mPewI+ZJ4JLaOB2p72CR8GF0mHSiHjXNsR4pvE2xvnj9a7BIoj4FHJy5FLamdpdS6PSEcc27VKx8NFgSxjXvgvLRFMGNjsqtYEFss04Bx0tMg0X8hdvLa7QEfHjGCS6tpPn8zqzrlNafAJd3nW+Lk0Sf3ew4GRgnKYKud3nKV8uSKM2J2g5TShIrYqLd6oSS7LMFVdfZwGA531Kx3U8pL5NK6xwzl38A5OuEMthfhGcAAAAASUVORK5CYII=";

  const [data, dataArray] = React.useState(storeData);
  const [cart, setCart] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [pay, setPay] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [form, setForm] = React.useState();
  const [zamoviti, setZamoviti] = React.useState(false);
  const [query, setQuery] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [all, setAll] = React.useState(false);
  const [block, setBlock] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      var full_screen_element = document.fullscreenElement;

      if (full_screen_element === null) {
        paid();
      }
    });
  }, []);

  function paid() {
    on(false);
    setPrice(0);
    setPay(false);
    setCounter(0);
    setQuery({ name: "", lastName: "", email: "", phoneNumber: "" });
    setZamoviti(false);
    setAll(false);
    setBlock(false);
    setCart([]);
  }

  function addTo(id) {
    if (counter === 8) {
      alert("Нашо тобі стіки карт?");
    } else {
      setCart((previousCart) => [
        ...previousCart,
        {
          dataOrder: `${data[id - 1].name}\n`,
          price: data[id - 1].price,
          description: data[id - 1].description,
          id: data[id - 1].id,
        },
      ]);
      setPrice((prevPrice) => prevPrice + data[id - 1].price);
      setCounter((prevCount) => prevCount + 1);
    }
  }

  function setOrder() {
    if (counter > 0 && cart.length > 0) {
      setPay(!pay);
      window.scrollTo(0, 0);
    } else {
      alert("Ти нічого не купила!!!!!!!!!!");
    }
  }

  function orderNumber() {
    let genOrder = [];
    const numbers = "0123456789";
    for (let i = 0; i < 25; i++) {
      genOrder.push(Math.floor(Math.random() * numbers.length));
    }
    localStorage.setItem("orderNumber", genOrder.join(""));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ [name]: value });
  }

  function del(id) {
    // alert('Куда видаляєш? Купляй давай')
    const abc = cart.splice(id, 1);
    setCounter((prevCount) => prevCount - 1);
    setPrice((prevPrice) => prevPrice - abc[0].price);
  }

  function setZakaz() {
    setZamoviti(!zamoviti);
    setPay(false);
  }

  function closed() {
    setBlock(true);
    setAll(false);
    var element = document.querySelector("*");
    element.requestFullscreen();
    on(true);
  }

  function zakaz() {
    setAll(true);
    setZamoviti(false);
  }

  function move() {
    var rng = document.getElementById("r1");
    var i1 = document.getElementById("i1");
    i1.value = "+380" + rng.value;
  }

  const info = data.map((item) => {
    return (
      <div className="containeri">
        <p className="discount">
          {item.oldPrice + 1 === "1"
            ? ""
            : `${Math.ceil(
                Math.abs(100 - (item.price * 100) / item.oldPrice)
              )}%`}
        </p>
        <img src={item.image} className="images"></img>
        <p className="name">{item.name}</p>
        <p className="description">{item.description}</p>
        <div className="priceBuy">
          <p className="price">
            {item.price}
            <span className="priceCart">₴</span>
          </p>
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

  const carts = cart.map((prevCart, i) => {
    return (
      <div>
        <div className="orders">
          {prevCart.dataOrder}
          <span className="priceCart">{prevCart.price} ₴</span>
          <img className="trash" onClick={() => del(i)} src={trash}></img>
        </div>
      </div>
    );
  });

  const cartsBuy = cart.map((prevCart) => {
    return (
      <div>
        <div className="containerCart">
          <div className="ordersBuy">{prevCart.dataOrder}</div>
          <div className="description">{prevCart.description}</div>
          <div
            className={
              prevCart.price.toString().length === 3
                ? `priceCartBuy`
                : `priceCartBuyMore`
            }
          >
            {prevCart.price}
            <span className="priceCart">₴</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
            <a href="/products" onClick={()=>on(true)}>Зайка</a>

      {(() => {
        if (pay) {
          return (
            <div className="containerOrder">
              {price > 3000 ? (
                <form className="form">
                  <p>Обери безкоштовний подарунок</p>
                  <input
                    className="inputForm"
                    type="radio"
                    id="cover"
                    name="giftValue"
                    value="Коврик для гадання"
                    onChange={handleChange}
                  />
                  <label className="label" htmlFor="cover">
                    Коврик для Таро
                  </label>
                  <br />

                  <input
                    className="inputForm"
                    type="radio"
                    id="nothing"
                    name="giftValue"
                    value="nothing"
                    onChange={handleChange}
                  />
                  <label htmlFor="nothing" className="label">
                    Нічого не треба
                  </label>
                  <br />
                </form>
              ) : (
                ""
              )}
              {cartsBuy}
              {form ? (
                <div>
                  {form.giftValue === "nothing" ? (
                    ""
                  ) : (
                    <div className="containerCart">
                      <div className="ordersBuy">{form.giftValue}</div>
                      <div className="description">
                        Коврик щоб гадилось добре
                      </div>
                      <div className="priceCartBuy">
                        0<span className="priceCart">₴</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
              <p className="priceOrder">
                <span className="price">
                  {price}
                  <span className="priceCart">₴</span>
                </span>
              </p>

              <div className="ag">
                <button className="disagree" onClick={setOrder}>
                  Назад
                </button>
                <button className="agree" onClick={setZakaz}>
                  Замовити
                </button>
              </div>
            </div>
          );
        } else if (zamoviti) {
          return (
            <div>
              <p className="orderNumb">
                Замовлення №{localStorage.getItem("orderNumber")}
              </p>
              <form>
                <label className="inputs">
                  <input
                    placeholder="Ім'я"
                    className={`input`}
                    type="text"
                    value={query.name}
                    onChange={(e) =>
                      setQuery((prevQuery) => {
                        return { ...prevQuery, name: e.target.value };
                      })
                    }
                  />
                  <input
                    placeholder="Прізвище"
                    className={`input`}
                    type="text"
                    value={query.lastName}
                    onChange={(e) =>
                      setQuery((prevQuery) => {
                        return { ...prevQuery, lastName: e.target.value };
                      })
                    }
                  />

                  <input
                    type="text"
                    id="i1"
                    className="input"
                    placeholder="Набери свій номер телефону повзунком"
                  />
                  <input
                    type="range"
                    id="r1"
                    min="100000000"
                    max="999999999"
                    value={110}
                    onInput={move}
                    className="input"
                    onChange={(e) =>
                      setQuery((prevQuery) => {
                        return {
                          ...prevQuery,
                          phoneNumber: "+380" + e.target.value,
                        };
                      })
                    }
                  />

                  <input
                    placeholder="Електронна пошта"
                    className={`input`}
                    type="email"
                    value={query.email}
                    onChange={(e) =>
                      setQuery((prevQuery) => {
                        return { ...prevQuery, email: e.target.value };
                      })
                    }
                  />
                </label>
              </form>
              <div className="buttonContainer">
                {query.name.trim().length > 0 &&
                query.lastName.trim().length > 0 &&
                query.email.trim().length > 0 &&
                query.phoneNumber.trim().length > 0 ? (
                  <button onClick={zakaz} className="zamoviti">
                    Замовити
                  </button>
                ) : (
                  <button className="zamoviti">Пиши давай</button>
                )}
              </div>
              <button className="nazad"></button>
            </div>
          );
        } else if (all) {
          return (
            <div className="containerOrder">
              <p className="thanks">
                {query.name} {query.lastName}, Дякую за покупку
              </p>
              <p className="email">
                Я вам зателефоную за номером {query.phoneNumber}
              </p>
              <p className="email">
                Деталі будуть надіслані на пошту {query.email}
              </p>
              <button onClick={closed} className="get">
                Отримати безкоштовну колоду моїх карт
              </button>
            </div>
          );
        } else if (block) {
          return (
            <div className="containerOrder">
              <div className="blocked">
                <p>Гаджет заблоковано</p>
                <p>
                  Щоб роблокувати, за допомогою карт дізнайтеся мій
                  біткоін-гаманець і скиньте туди 500 BTC
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="containerAll">
              <div className="containerBasket">
                <p className="cart">Корзинка</p>
                {carts}
                {counter > 0 ? (
                  <button
                    className="order"
                    onClick={() => {
                      setOrder();
                      orderNumber();
                    }}
                  >
                    В кошик
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="containerInfo">{info}</div>
            </div>
          );
        }
      })()}
    </div>
  );
}
