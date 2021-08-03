import './App.css';
import SideBar from './components/SideBar';
import { useState, useEffect } from 'react';

function App() {
  const [searchVal, setSearchVal] = useState('');

  const stores = [
    { abrv: "VDE", name: "Venum EURO DE" },
    { abrv: "VEN", name: "Venum EURO EN" },
    { abrv: "VES", name: "Venum EURO EN" },
    { abrv: "VIT", name: "Venum EURO EN" },
  ];

  const users = [
    "yes",
    "pttr"
  ]

  const [displayedStores, setDisplayedStores] = useState([...stores]);
  useEffect(() => {
    setDisplayedStores((prevState) => {
      return stores.filter(store => store.name.toLowerCase().includes(searchVal));
    })

  }, [searchVal]);



  return (
    <div className="App">
      <div className="rem-page">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tellus non tellus pulvinar aliquet vitae quis nibh. Aenean euismod egestas dolor at fermentum. Proin consequat tortor vel ultrices tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin molestie convallis porttitor. Nulla facilisi. Morbi sagittis ipsum non sem dictum fermentum. Praesent id augue eget neque commodo posuere ac sit amet diam. Donec mollis congue felis. Duis egestas rutrum elit, non congue dui hendrerit maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tellus non tellus pulvinar aliquet vitae quis nibh. Aenean euismod egestas dolor at fermentum. Proin consequat tortor vel ultrices tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin molestie convallis porttitor. Nulla facilisi. Morbi sagittis ipsum non sem dictum fermentum. Praesent id augue eget neque commodo posuere ac sit amet diam. Donec mollis congue felis. Duis egestas rutrum elit, non congue dui hendrerit maximus.</h1>
      </div>
      <SideBar
        users={users}
        serachVal={searchVal}
        onSearchChange={setSearchVal}
        stores={displayedStores}
        username="massilsotre" />
    </div>
  );
}

export default App;
