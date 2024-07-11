import { useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../SubmitButton/Submit";

export default function RestoreForm() {

    const [email, setEmail] = useState("")

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form ">
                <div className="Fields container-md">
                    <p>Inserisci la mail con cui ha registrato il tuo account. Riceverai le istruzioni per creare una nuova password</p>
                    <div className="Field">
                        <label>Email*</label>
                        <input type="text" name="mail" placeholder="Email" value={email} onChange={HandleChange}></input>
                    </div>
                </div>
                <Submit label="Accedi" className='Primary' />
                <p>Non sei registrato? <Link to={`/signUp`} className="link">Registrati</Link></p>
            </form>
        </>
    )
}