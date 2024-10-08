import { ReactComponent as Star } from "./star.svg"
import "./Review.css"
import { UserReview } from "../../../storesData/account"
type Props = {
    rev: UserReview
}
export default function Review({ rev }: Props) {
    return (
        <>
            <div className="row review">
                <div className="col-auto">
                    <div className="review__icon">
                        <label>V</label>
                    </div>
                </div>
                <div className="col-auto d-flex flex-column align-items-start gap-2 py-2">
                    <h4>Valeria Bassani</h4>
                    <div className="rating__stars">
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star />
                    </div>
                    <div className="full__review__text">
                        <p>Recensione </p>
                    </div>
                    <p className="adv__date">10/11/2022</p>
                </div>
            </div>
        </>
    )
}