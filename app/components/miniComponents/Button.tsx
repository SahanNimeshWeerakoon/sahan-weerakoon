const Button = ({ btnTxt, btnClasses, url, onClick }: { btnTxt: string, onClick?:any, btnClasses?: string, url?: string }) => {
    return (
        <button className={`btn cursor-pointer transition ${btnClasses}`} onClick={onClick}>
            { url ? (
                <a href={url} title="link to the project" target="_blank">{btnTxt}</a>
            ) : (
                btnTxt
            )}
        </button>
    );
}

export default Button