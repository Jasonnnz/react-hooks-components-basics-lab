import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return (
    <div id="about">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ut? Molestiae ducimus, corrupti perspiciatis ullam, natus, aut repellat numquam temporibus totam asperiores expedita aperiam consequatur nam architecto voluptate doloremque quae.
    </div>
  )
}
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
