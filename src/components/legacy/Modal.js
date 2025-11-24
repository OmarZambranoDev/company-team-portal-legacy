import { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, onClose, title } = this.props;

        return (
            <div
                className="modal-container"
                onClick={onClose}
            >
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1>{title}</h1>
                    <button
                        onClick={onClose}
                        className="modal-close-button"
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;