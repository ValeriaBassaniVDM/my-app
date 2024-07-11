import { useState } from "react";
import Icon from "../Icon";
import down from "./chevron-down.svg"
import up from "./chevron-up.svg"
import "./OrderBy.css"

export default function OrderBy() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("Dal più recente");

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };

    const chooseValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setValue(e.currentTarget.value)
        setVisible(!visible);
    };

    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column gap-3">
                    <div className="Options">
                        <button className="Option" onClick={handleClick}>{value} <Icon url={visible ? up : down}></Icon></button>
                        <div className={visible ? 'Down' : 'Up'}>
                            <button className="Option" value="Dal più recente" onClick={chooseValue}><p>Dal più recente</p> </button>
                            <button className="Option" value="Dal meno recente" onClick={chooseValue}><p>Dal meno recente</p> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}