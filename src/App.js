import React, {useState} from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Body from "./Components/body";
import Footer from "./Components/footer";

function App() {

  const Categories=[
    
    {
      label: "All",
      Status: true,
    },
    {
      label: "Womens",
      Status: false,
    },
    {
      label: "child",
      Status: false,
    },
    {
      label: "Men",
      Status: false,
    }

  ]

  const [cart, cartCategorie] = useState(Categories); 
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
