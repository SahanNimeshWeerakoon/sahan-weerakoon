const Title = ({ title, textAlign="center" }: { title: String, textAlign?: any, }) => {
    return (
        <div className="title_mini" style={{ textAlign }}>{ title }</div>
    );
}

export default Title