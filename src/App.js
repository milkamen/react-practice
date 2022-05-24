import logo from "./logo.svg";
import "./App.css";
// import Try1 from "./try1.js";
import { Card, Header, Content, Footer } from "./Card";
import { CountryCategory, VitaminCategory } from "./category";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Prisum } from "./Components.js";

let items = [
  {
    id: "fdsfsd",
    img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39&#39",
    price: 100,
    name: "Pineapple",
    vitamin: ["c", "b"],
    country: "israel",
  },
  {
    id: "asd332",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80&#39&#39",
    price: 100,
    name: "Banana",
    vitamin: ["a", "b"],
    country: "thailand",
  },
  {
    id: "sadahg5",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80&#39&#39;",
    price: 100,
    name: "Orange",
    vitamin: ["c", "b"],
    country: "turkey",
  },
  {
    id: "ds21sad",
    img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-1.2.1&ixid=https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39&auto=format&fit=crop&w=870&q=80&#39&#39;",
    price: 100,
    name: "Kiwi",
    vitamin: ["b"],
    country: "israel",
  },
  {
    id: "sdfsdf8767",
    price: 100,
    name: "Melon",
    vitamin: ["c"],
    country: "france",
  },
];

const Countries = ["israel", "thailand", "turkey", "france"];
const vitamins = ["a", "b", "c", "d"];
function App() {
  let [fruits, setFruits] = useState(items);
  let [spnlabel, setSpnlabel] = useState(100);

  let [sumFruits, SetSumFruits] = useState(0);

  const deleteCard = (id) => {
    setFruits(fruits.filter((item) => item.id != id));
  };

  const filterByCountry = (country) => {
    setFruits(items.filter((item) => item.country == country));
  };

  const filterByVitamin = (vitamin) => {
    setFruits(items.filter((item) => item.vitamin.includes(vitamin)));
  };

  //פונקציה לחישוב סכום מחירי הפירות
  useEffect(() => {
    sumFruits = 0;
    fruits.forEach((item) => {
      sumFruits += item.price;
    });
    SetSumFruits(sumFruits);
  }, [fruits]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //    <Try1 fname='milka' lname='menachem'/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //    <Try1 fname='yosi' lname='elimelech'/>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     </header>

    <div>
      <div key="countries">
        <label for="site-search">Search by Country:</label>
        {Countries.map((value) => (
          <button key={value} onClick={() => filterByCountry(value)}>
            {value}
          </button>
        ))}
        <button type="checkbox" onClick={() => setFruits(items)}>
          all
        </button>
      </div>

      <div key="vitamins">
        <label for="site-search">Search by Vitamin:</label>
        {vitamins.map((value) => (
          <button onClick={() => filterByVitamin(value)}>{value}</button>
        ))}
        <button onClick={() => setFruits(items)}>all</button>
      </div>

      <div id="searchBox">
        <label>Search fruits:</label>
        <input
          type="search"
          id="site-search"
          name="q"
          onChange={(event) => {
            setSpnlabel(event.target.value);
            setFruits(
              items.filter((item) =>
                item.name.toLowerCase().includes(event.target.value)
              )
            );
          }}
        />
      </div>

      <div id="range">
        <label for="site-search">Search fruits below price:</label>
        <input
          type="range"
          id="mine"
          min="0"
          max="300"
          onChange={(event) => {
            setSpnlabel(event.target.value);
            setFruits(items.filter((item) => item.price < event.target.value));
          }}
        />
        <span id="result">{spnlabel}</span>
      </div>

      <div className="items">
        {fruits.map((item) => {
          return (
            <Card key={item.id}>
              <Header>
                {" "}
                {item.img ? <img src={item.img} /> : <img src="" />}
              </Header>
              <Content>
                <h4>{item.name}</h4>
                <h4>{item.price}$</h4>
              </Content>
              <Footer>
                <button onClick={() => deleteCard(item.id)}>remove me</button>
              </Footer>
            </Card>
          );
        })}
      </div>

      <Prisum>{sumFruits}</Prisum>
    </div>
  );
}

export default App;
