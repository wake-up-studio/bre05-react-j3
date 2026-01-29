import {useState} from 'react';

const ToastMessage = (props)=>{
    const [open, setOpen] = useState(true);
    
    function dismiss(){
        if(open===true){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    }
    
    if(open===true){
        return(
            <article className="toastMessage">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>
        );
    }
    else{
        return(
            <article className="dismissed">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>
        );
    }
    
};

export default ToastMessage;