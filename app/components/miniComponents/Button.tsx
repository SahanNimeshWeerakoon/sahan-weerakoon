const Button = ({ btnTxt, btnClasses, onClick }: { btnTxt: string, onClick: () => {}, btnClasses?: string  }) => {
    return (
        <button className={`btn cursor-pointer transition ${btnClasses}`} onClick={onClick}>
            {btnTxt}
        </button>
    );
}

export default Button