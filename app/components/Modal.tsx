const Modal = ({ isOpen, children, onClose } : {isOpen: boolean, children: string | JSX.Element | JSX.Element[], onClose: any }) => {
    if(isOpen) {
        return (
            <div className="modal">
                <div className="modal_content">
                    <img src="/img/close.png" alt="close contact me modal" title="close contact me modal" onClick={onClose} />
                    {children}
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}

export default Modal;