import {useState} from "react";

const User = (props)=>{
    const [user, setStatus] = useState({firstName: "Hilma", lastName: "Af Klint", status: "Offline"});
    
    function swapStatus(){
        if(user.status==="Offline"){
            let paint = Object.assign({}, user, {status: "Is painting"});
            console.log(paint);
            setStatus(paint);
        }
        else{
            let off = Object.assign({}, user, {status: "Offline"});
            console.log(off);
             setStatus(off);
        }
    }
    
    return(
        <article>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.status}</p>
            <button onClick={swapStatus}>Connecter</button>
        </article>
    );
};

export default User;