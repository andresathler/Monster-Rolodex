import {ChangeEvent, useEffect, useState} from "react";

import CardList from "./components/card-list/card-list.component";

import './App.css';
import SearchBox from "./components/search-box/search-box.component";
import {getData} from "./utils/data.utils";

export type Monster = {
    email: string;
    id: number;
    name: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
      const fetchUsers = async () => {
          const user = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
          setMonsters(user)
      };

      fetchUsers();
  }, []);

  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField)
      });

      setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const setSearchFieldString = event.target.value.toLowerCase();
    setSearchField(setSearchFieldString);
  }

  return(
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange}  placeholder='search monsters'/>

        <CardList monsters={filteredMonsters}/>
      </div>
  )
}

export default App;
