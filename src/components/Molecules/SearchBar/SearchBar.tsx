import { useState } from "react";
import "./SearchBar.css"
import lens from "./lens.svg"
import CategoryFilter from "../FiletrByCategory/FiletrByCategory";
import PriceFilter from "../FilterByPrice/FilterByPrice";
import Shipping from "../FilterByShipping/FilterByShipping";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import Button from "../../Atoms/Buttons/Buttons";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="row ">
                <div className="col d-flex flex-column ">
                    <div className="row align-items-end gap-2">
                        <div className="col p-0">
                            <h4>{t('home.search')}</h4>
                            <div className="search-bar">
                                <InputField type="text" name="search" placeholder={t('home.search-placeholder')} />
                                <Button className="btn__secondary"><img src={lens} className="search-bar__lens" alt="cerca"></img></Button>
                            </div>
                        </div>
                        <div className="col-auto p-0 search-bar__filter" >
                            <Submit label='Filtri' className='btn--primary' onClick={() => { setVisible(!visible) }} />
                        </div>
                    </div>
                    <div className={`row search-bar__more ${visible ? 'search-bar__more--visible' : ''} my-3`}>
                        <div className="main__section">
                            <h4>{t('home.filters')}</h4>
                            <div className="col d-flex flex-column gap-2 p-0">
                                {/* <CategoryFilter />
                                <PriceFilter /> */}
                                {/* <Shipping /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}