import {useState} from "react";

const User = (props)=>{
    const [isOnline, setOnline] = useState(false);
    
    function switchButton(){
        if(isOnline===true){
            setOnline(false);
        }
        else{
            setOnline(true);
        }
    }
    
    if(isOnline===true){
        return(
            <article>
                <h2>Mari Doucet</h2>
                <p>En ligne</p>
                <button onClick={switchButton}>Connecter</button>
            </article>
        );
    }
    else{
        return(
            <article>
                <h2>Mari Doucet</h2>
                <p>Hors-ligne</p>
                <button onClick={switchButton}>Connecter</button>
            </article>
        );
    }
};

export default User;