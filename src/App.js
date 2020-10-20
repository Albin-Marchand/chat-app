import React from 'react';
import './App.css';
import Contact from './components/Contact';

const myCard = {
  image: "https://randomuser.me/api/portraits/men/62.jpg",
  name: "Eliss Morren",
  isConnected: true,
};
const myCard2 = {
  image: "https://randomuser.me/api/portraits/women/72.jpg",
  name: "John Doe",
  isConnected: false,
};
const myCard3 = {
  image: "https://randomuser.me/api/portraits/women/40.jpg",
  name: "Jim Morrisson",
  isConnected: false,
};

function App() {
  return (
    <div className="App">
      <Contact {...myCard} />
      <Contact {...myCard2} />
      <Contact {...myCard3} />
    </div>
  );
}

export default App;