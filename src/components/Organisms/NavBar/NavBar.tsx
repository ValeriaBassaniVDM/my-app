import { Link } from "react-router-dom";
import './NavBar.css';
import { useCallback, useEffect, useState } from "react";
import Icon from "../../Atoms/Icon";
import heart from './heart.svg';
import message from './message.svg';
import plus from './plus.svg';
import logo from './logo.svg';
import { useTranslation } from "react-i18next";
import { emptyUser, getActualUser } from "../../../storesData/users";
import { User } from "../../../storesData/account";

export default function NavBar() {
    const { t } = useTranslation();

    const [isLogin, setIsLogin] = useState(false)
    //const user = getActualUser()

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getActualUser();
                setUser(user);
                if (user.email === "") {
                    setIsLogin(false);
                } else {
                    setIsLogin(true)
                }
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

    const [visible, setVisible] = useState(true);

    const handleClick = useCallback(() => {
        setVisible(!visible);
    }, [visible])

    return (
        <>
            <div className="container-fluid py-3 px-5 navbar">
                <div className="row">
                    <div className="col-1 d-flex align-items-center">
                        <Link to={`/`}><Icon url={logo} alt="home" /></Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end gap-4">
                        {isLogin ? (<><Link to={`/preferiti`} className="navbar__link"><Icon url={heart} margin="0.3em" alt="preferiti" />{t('navbar.favourites')}</Link>
                            <Link to={`/messages`} className="navbar__link"><Icon url={message} margin="0.3em" alt="messaggi" />{t('navbar.messages')}</Link>
                            <Link to={`/vendi`} className="btn--secondary"><Icon url={plus} margin="0.3em" alt="crea un annuncio" />{t('navbar.create')}</Link>
                            <Link to={`/area-riservata`} className="btn--primary">{user.name}</Link></>) : (
                            <>
                                <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link>
                                <Link to={`/login`} className="btn--primary">{t('navbar.logIn')}</Link>
                            </>)}

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 navbar__hamburgher">
                <div className="row mb-3">
                    <div className="col-1 d-flex align-items-center">
                        <Link to={`/`}><Icon url={logo} alt="home" /></Link>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center gap-3">
                        {isLogin ? (
                            <>
                                <Link to={`/vendi`} className="btn--secondary"><Icon url={plus} margin="0.3em" alt="crea un annuncio" />{t('navbar.create')}</Link>
                                <Link to={`/area-riservata`} className="btn--primary">{user.name}</Link>
                                <button className="navbar--icon" onClick={handleClick}></button>
                            </>) : (
                            <>
                                <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link>
                                <Link to={`/login`} className="btn--primary">{t('navbar.logIn')}</Link>
                            </>)}

                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className={`navbar__more col-auto d-flex flex-column text-end ${visible ? 'navbar__more--invisible' : ''}`}>
                        <Link to={`/preferiti`} className="navbar__link"><Icon url={heart} margin="0.3em" alt="preferiti" />{t('navbar.favourites')}</Link>
                        <Link to={`/messages`} className="navbar__link"><Icon url={message} margin="0.3em" alt="messaggi" />{t('navbar.messages')}</Link>
                        <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 navbar__hamburgher navbar__hamburgher--mobile">
                <div className="row mb-3">
                    <div className="col-1 d-flex align-items-center Logo">
                        <Link to={`/`}><Icon url={logo} alt="home" /></Link>
                    </div>
                    <div className="col d-flex justify-content-end gap-1">
                        {isLogin ? (
                            <>
                                <Link to={`/area-riservata`} className="btn--primary">{user.name}</Link>
                                <button className="navbar--icon" onClick={handleClick}></button>
                            </>) : (
                            <>
                                <Link to={`/login`} className="btn--secondary">{t('navbar.logIn')}</Link>
                            </>)}
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className={`navbar__more col-auto d-flex flex-column text-end ${visible ? 'navbar__more--invisible' : ''}`}>
                        <Link to={`/vendi`} className="btn--secondary"><Icon url={plus} margin="0.3em" alt="crea un annuncio" />{t('navbar.create')}</Link>
                        <Link to={`/preferiti`} className="navbar__link"><Icon url={heart} margin="0.3em" alt="preferiti" />{t('navbar.favourites')}</Link>
                        <Link to={`/messages`} className="navbar__link"><Icon url={message} margin="0.3em" alt="messaggi" />{t('navbar.messages')}</Link>
                        <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link>
                    </div>
                </div>
            </div>
        </>

    )
}