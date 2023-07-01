import AddElement from "./AddElement";
import MyList from "./MyList";

function CardsContainer () {
    return <>
        <div className='centered-position margin-top'>
            <AddElement/>
        </div>
        <div className='centered-position margin-top'>
            <MyList/>
        </div>
    </>
}

export default CardsContainer;