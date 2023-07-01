import Button from "../UI/Button";
import '../styles/ListItems.css'

function MyList({ items, onDelete, onUpdate }) {
    return (
        <ul className="notebook-list">
            {items.map((item) => (
                <li
                    key={item.id}
                    className={`notebook-list ${item.is_done ? 'green' : 'red'}`}
                >
                    <input type="checkbox" id={item.id} onChange={() => onUpdate(item.id)} />
                    <label htmlFor={item.id}>{item.item}</label>
                    <Button className="delete-button" onClick={() => onDelete(item.id)}>
                        X
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default MyList;
