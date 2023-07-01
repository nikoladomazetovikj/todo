import Button from "../UI/Button";
import '../styles/Form.css';
import {useState} from "react";

function AddElement(props) {

    const [item, setItem] = useState( "" );

    function handleOnSubmit(e) {
        e.preventDefault();

        if (item.trim() === '') return alert('Please enter text')

        let id = crypto.randomUUID();

        const newItem = {
            item,
            id,
            is_done: false
        }

        props.onAddItem(newItem);
        setItem("");
    }

    function handleInputOnChange(e) {
        setItem(e.target.value)
    }

    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
                <input type='text' value={item} onChange={handleInputOnChange}/>
                <Button children='ADD' className='button-margin-right add-button'/>
            </form>
        </div>
    );
}

export default AddElement;