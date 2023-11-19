import { Add } from "./components/add";
import { useState } from "react";
import { List } from "./components/list";
import { SearchBar } from "./components/searchBar";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [existed, setExisted] = useState(false);

  const deleteHandle = (deleteId) => {
    const newList = list.filter(({ id }) => id !== deleteId);
    setList(newList);
  }

  const add = ({ Name, num, email }) => {
    const existedItem = list.find((item) => item.Name.toLowerCase() === Name.toLowerCase());
    if (existedItem) {
      setExisted(true)
    }
    if (existedItem === false) {
      const newItem = {
        id: list.length + 1,
        Name,
        num,
        email
      };
    
      setList([...list, newItem]);

    }
    
};
    
  return (
    <div className="main">
      <SearchBar onSearch={(search) => setSearch(search)} />
      <Add exist={existed} onAdd={add} />
      <List onDelete={deleteHandle} toSearch={search} lists={list} />
    </div>
  );
};

export default App;