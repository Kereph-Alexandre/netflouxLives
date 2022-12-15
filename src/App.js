
import './App.css';
import { MonBouton } from './Component/SearchBar/MonBouton';
import { SearchBar } from './Component/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">

      <SearchBar text="Search" />

      <MonBouton text="Action" />
      <MonBouton text="Horreur" />
      <MonBouton text="Squeezie" />
      <MonBouton text="ASMR" />
      <MonBouton text="Pop" />
      
      
    </div>
  );
}

export default App;
