import ProductCard from "./components/ProductCard";
import Display from "./components/Display";
import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";

function App() {
  let brandName: string = "Bami Store";

  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const userData = (userName: string, userCity: string) => {
    const message = `Hello ${userName} from ${userCity}`;
    return message;
  };

  return (
    <div>
      {/* pass state to display to allow toggle */}
      {show ? (
        <Display toggleShow={toggleShow} />
      ) : (
        <div>
          <h1>{brandName} welcomes you to React + TS</h1>
          <p>{userData("Bami", "New York")}</p>
          <button onClick={toggleShow}>Show</button>
          <ProductCard
            productName="Samsung"
            productPrice={1000}
            productCategory="Phones"
            productDescription="Samsung Galaxy"
          />
        </div>
      )}
      <Counter />
      <Greetings name="Bami" />
    </div>
  );
}

export default App;
