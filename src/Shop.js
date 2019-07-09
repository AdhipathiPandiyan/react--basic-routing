import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {

    useEffect( () => {
        fetchItems();
    },[])

    const [items,setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

  return (
    <div>
        {items.map(item => (
                <div key={item.id} className="container">
                    <Link to={`/shop/${item.title}`}>
                        <div>
                            <h3>User ID : {item.id}</h3>
                            <h3>Title : {item.title}</h3>
                        </div>
                    </Link>
                    
                </div>
        ))}
    </div>
  );
}

export default Shop;
