const Modal = ({ isOpen, children } : {isOpen: boolean, children: string | JSX.Element | JSX.Element[] }) => {
    if(isOpen) {
        return (
            <div className="modal">
                <div className="modal_content">
                    {children}
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}

export default Modal;