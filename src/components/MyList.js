import '../styles/ListItems.css';

function MyList() {
    return (
        <ul className="notebook-list">
            <li>
                <input type="checkbox" id="item1"/>
                <label htmlFor="item1">List item 1</label>
                <button className="delete-button">X</button>
            </li>
            <li>
                <input type="checkbox" id="item2"/>
                <label htmlFor="item2">List item 2</label>
                <button className="delete-button">X</button>
            </li>
            <li>
                <input type="checkbox" id="item3"/>
                <label htmlFor="item3">List item 3</label>
                <button className="delete-button">X</button>
            </li>
        </ul>

    );
}


export default MyList;