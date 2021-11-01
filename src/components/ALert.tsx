import React, {FC} from "react"


interface AlertProps {
    message: string;
    onClose: () => void
}


 export const Alert: FC<AlertProps> = ({ message, onClose }) => {
    return(
        <div className=" modal is-active has-text-centered">
            <div className= "modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-danger">
                    <p className="modal-card-title has-background-danger">{message}</p>
                </header>
                <footer className="modal-card-foot" style={{justifyContent:"center"}}>
                    <button onClick={onClose}>  Close</button>
                </footer>
            </div>
        </div>
    )
}

