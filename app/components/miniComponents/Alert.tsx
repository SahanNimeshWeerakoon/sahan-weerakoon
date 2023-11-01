const Alert = ({children, success}: { children: string | string[] | JSX.Element | JSX.Element[], success: boolean }) => {
    return (
        <div className={`alert ${success ? 'successful' : 'failed'}`}>{children}</div>
    );
}

export default Alert;