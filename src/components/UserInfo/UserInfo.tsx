import { Link } from "react-router-dom"
import Icon from "../Atoms/Icon"
import edit from "./edit.svg"
import logout from "./log-out.svg"
import "./UserInfo.css"
import InputField from "../Atoms/InputField/InputField"
import { useState } from "react"
import Button from "../Atoms/Buttons/Buttons"

type Props = {
    mail: string,
    isUser: boolean,
}
export default function UserInfo({ mail, isUser }: Props) {

    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <>
            <div className="row ">
                <div className="col-auto">
                    <div className="profile__icon">
                        <h3>V</h3>
                    </div>
                </div>
                <div className="col">
                    <div className={`row ${visible ? 'profile--show' : ''}`}>
                        <div className="col d-flex flex-column gap-2" >
                            <p className="profie__active">3 annunci attivi</p>
                            <h4>Valeria Bassani</h4>
                            <p>{mail}</p>
                            <p>tel: 3475693160</p>
                            {isUser ? (
                                <p>Via natale battaglia 8, Milano (MI), 24050</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        {isUser ? (
                            <div className="col-auto d-flex align-items-start" >
                                <Button className="btn--edit" onClick={handleClick}><Icon url={edit} margin="0.5em" />Modifica</Button>
                                <Button className="btn--edit" onClick={handleClick}><Icon url={logout} margin="0.5em" />Esci</Button>
                            </div>
                        ) : (
                            <></>
                        )}

                    </div>
                    <div className={`row ${visible ? '' : 'profile--show'}`}>
                        <div className="col d-flex flex-column gap-2">
                            <p id="category">3 annunci attivi</p>
                            <h4>Valeria Bassani</h4>
                            <p>{mail}</p>
                            <div className="row">
                                <div className="col">
                                    <InputField label="Indirizzo" type="text" name="street" placeholder="Via" required={true}></InputField>
                                </div>
                                <div className="col-4">
                                    <InputField label="N." type="number" name="number" placeholder="N." required={true}></InputField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <InputField label="Città" type="text" name="city" placeholder="Città" required={true}></InputField>
                                </div>
                                <div className="col-4">
                                    <InputField label="Pv" type="text" name="provincia" placeholder="Pv" required={true}></InputField>
                                </div>
                            </div>
                            <InputField label="Telefono" type="tel" name="phone" placeholder="Tel." required={true}></InputField>
                        </div>
                        <div className="col d-flex align-items-start justify-content-end" >
                            <div className="row">
                                <div className="col d-flex gap-2">
                                    <button className="btn--confirm" onClick={handleClick}>Salva</button>
                                    <button className="btn--edit" onClick={handleClick}>Annulla</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}