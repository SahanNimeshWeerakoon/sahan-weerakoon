const Button = ({ btnTxt, btnClasses, url }: { btnTxt: string, btnClasses?: string, url?: string }) => {
    return (
        <button className={`btn ${btnClasses}`}>
            { url ? (
                <a href={url} title="link to the project">{btnTxt}</a>
            ) : (
                btnTxt
            )}
        </button>
    );
}

export default Button