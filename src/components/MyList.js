import '../styles/ListItems.css';

function MyList({items}) {
    console.log(items)
    return (
        <ul className="notebook-list">
            {items.map((item) => (
                <li key={item.id}>
                    <input type="checkbox" id={item.id} />
                    <label htmlFor={item.id}>{item.item}</label>
                    <button className="delete-button">X</button>
                </li>
            ))}
        </ul>

    );
}


export default MyList;