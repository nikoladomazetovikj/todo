import '../styles/ListItems.css';
import Button from "../UI/Button";

function MyList({items, onDelete}) {
    return (
        <ul className="notebook-list">
            {items.map((item) => (
                <li key={item.id}>
                    <input type="checkbox" id={item.id} />
                    <label htmlFor={item.id}>{item.item}</label>
                    <Button className="delete-button" onClick={() => onDelete(item.id)}>X</Button>
                </li>
            ))}
        </ul>

    );
}


export default MyList;