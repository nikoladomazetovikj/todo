import AddElement from "./AddElement";
import MyList from "./MyList";
import {useState} from "react";

function CardsContainer () {

    const [items, setItems] = useState([]);

    function handleOnAddItem(item) {
        setItems(prevItems => [...prevItems, item]);
    }

    function removeItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleCheckedItem(id) {
        setItems(items =>
            items.map(item =>
                item.id === id ? { ...item, is_done: !item.is_done } : item
            )
        );
    }

    return <>
        <div className='centered-position margin-top'>
            <AddElement onAddItem={handleOnAddItem}/>
        </div>
        <div className='centered-position margin-top'>
            <MyList items={items} onDelete={removeItem} onUpdate={handleCheckedItem}/>
        </div>
    </>
}

export default CardsContainer;