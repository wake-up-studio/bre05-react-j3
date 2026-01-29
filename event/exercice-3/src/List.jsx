import {useState} from "react";

const List = (props)=>{
    const [fruits, setDelete] = useState(["banane", "orange", "pomme", "citron", "mangue"]);
    
    function deleteFruit(){
        let list = fruits.slice(0, -1);
        setDelete(list)
    }
    
    return(
        <>
            <ul>
                {fruits.map((fruit, i)=> <li key={i}>{fruit}</li>)}
            </ul>
            <button onClick={deleteFruit}>Supprimer le dernier fruit</button>
        </>
    );
    
};

export default List;