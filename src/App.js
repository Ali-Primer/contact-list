import { Add } from "./components/add";
import { useState } from "react";
import { List } from "./components/list";
import { SearchBar } from "./components/searchBar";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const deleteHandle = (deleteId) => {
    const newList = list.filter(({ id }) => id !== deleteId);
    setList(newList);
  }

  const add = ({ Name, num, email }) => {
    const newItem = {
      id: list.length + 1,
      Name,
      num,
      email
    }
    setList([...list, newItem]);
  };

  return (
    <div className="main">
      <SearchBar onSearch={(search) => setSearch(search)} />
      <Add onAdd={add} />
      <List onDelete={deleteHandle} toSearch={search} lists={list} />
    </div>
  );
};

export default App;