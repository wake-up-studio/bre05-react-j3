import {useState} from "react";

const User = (props)=>{
    const[status, setStatus] = useState({
        loggedIn: props.identity.loggedIn
    });
    
    function swap(){
        if(status.loggedIn===true){
            let beFalse = Object.assign({}, props.identity, {loggedIn: false});
            setStatus(beFalse);
        }
        else{
            let beTrue = Object.assign({}, props.identity, {loggedIn: true});
            console.log(beTrue);
            setStatus(beTrue);
        }
    }

    if(status.loggedIn===false){
        return(
            <li>
                <article>
                    <h2>{props.identity.firstName} {props.identity.lastName}</h2>
                    <p>Offline</p>
                    <button onClick={swap}>Connexion / Déconnexion</button>
                </article>
            </li>
        );
    }
    else{
        return(
            <li>
                <article>
                    <h2>{props.identity.firstName} {props.identity.lastName}</h2>
                    <p>Online</p>
                    <button onClick={swap}>Connexion / Déconnexion</button>
                </article>
            </li>
        );
    }
};

export default User;