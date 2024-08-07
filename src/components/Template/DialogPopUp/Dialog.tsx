import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DialogPopUp.css"

type Props = {
    title: string,
    show: boolean,
    onSwitch?: (modale: string) => void;
    children?: React.ReactNode;
    onHide: () => void;
}
export default function Dialog({ title, show, children, onSwitch, onHide }: Props) {
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
                        <h4>{title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row text-center py-4 pop-up">
                        <div className="col d-flex flex-column gap-4 justify-content-center">
                            {children}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="Help">
                        <p>Bisogno di aiuto? <Link to={`/assistenza`} className="link">Contatta l'assistenza</Link></p>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}