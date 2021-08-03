import './App.css';
import SideBar from './components/SideBar';
import { useState, useEffect } from 'react';
import NavMenu from './components/NavMenu';


function App() {
  const [searchVal, setSearchVal] = useState('');
  const [navItem, setNavItem] = useState(0);

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

  const items = [
    {
      section: "",
      items: [
        {
          label: "Acceuil",
        },
        {
          label: "Products",
        },
        {
          label: "Customers",
        },
      ]
    },
    {
      section: "Canaux de vente",
      items: [
        {
          label: "Boutique en ligne",
        }
      ]
    }
  ];

  return (
    <div className="App">
      <div className="rem-page">
        <NavMenu
          selected={navItem}
          onSelect={setNavItem}
          links={items} />
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
