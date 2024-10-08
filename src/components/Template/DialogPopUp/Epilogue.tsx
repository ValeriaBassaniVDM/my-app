import { Modal } from "react-bootstrap";
import UserRate from "../../Molecules/UserRate/UserRate";
import Button from "../../Atoms/Buttons/Buttons";
import ipad from "./ipad.jpg"
import "./DialogPopUp.css"
import { AdvData, purchaseAdv } from "../../../storesData/products";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../../App";

type Props = {
    article: AdvData
    show: boolean,
    onSwitch: (modale: string) => void;
    onHide: () => void;
}
export default function Epilogue({ article, show, onSwitch, onHide }: Props) {

    const { userState } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [isLogin, SetIsLogin] = useState(false)

    useEffect(() => {
        if (userState !== null) {
            SetIsLogin(true)
        } else {
            SetIsLogin(false)
        }
    }, [userState])

    const handleLogin = () => {
        onHide()
        navigate('/login')
    }

    const handlePurchase = useCallback(() => {
        purchaseAdv(article)
        onSwitch('terzo')
    }, [article, onSwitch])

    return (
        <div className="container" style={{ position: "absolute" }}>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Riepologo</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-sm">
                        <div className="row main content mb-3" >
                            <div className="col d-flex flex-column gap-3">
                                <h4>Il tuo acquisto</h4>
                                <div className="row adv__info align-items-center">
                                    <div className="col-auto">
                                        <img src={article.images[0]} alt="Ipad"></img>
                                    </div>
                                    <div className="col d-flex flex-column gap-1 py-3 ">
                                        <h5 className="adv__category">{article.category}</h5>
                                        <h4>{article.title}</h4>
                                        <UserRate mail={article.seller} />
                                    </div>
                                </div>
                                <div className="row border-top pt-2 ">
                                    <div className="col d-flex justify-content-between align-items-center">
                                        <h4>Prezzo</h4>
                                        <h3 style={{ color: "var(--primary)" }}>{article.price},00€</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            {!isLogin ? (<Button className="btn--primary" wide={true} onClick={handleLogin} >Accedi per poter effettuare l'acquisto</Button>)
                                : (
                                    <>{article.shipping && (
                                        <div className="col-6" >
                                            <label>Acquisto a distanza</label>
                                            <div className="row">
                                                <div className="col" >
                                                    <Button className="btn--disabled" wide={true} >Checkout</Button>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col" >
                                                    <div className=" col d-flex adv__shipping gap-2">
                                                        <p>spedizione</p>
                                                        <b>{article.shippingPrice}€</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                        <div className="col-6" >
                                            <label>Scambio a mano</label>
                                            <div className="row">
                                                <div className="col" >
                                                    <Button className="btn--primary" wide={true} onClick={handlePurchase}>Acquista con scambio a mano</Button>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col" >
                                                    <p>Completa subito l'acquisto ed effettua lo scambio di persona</p>
                                                </div>
                                            </div>
                                        </div></>)}
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div >
    );
}