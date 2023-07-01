import Button from "../UI/Button";
import '../styles/Form.css';

function AddElement() {
    return (
        <div>
            <form action="">
                <input type='text'/>
                <Button children='ADD' className='button-margin-right add-button'/>
            </form>
        </div>
    );
}

export default AddElement;