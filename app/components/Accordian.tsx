import Button from './Button'

const Accordian = () => {
    return (
        <div className="accordian">
            <div className="accordian_header">
                <h3>Title</h3>
                <img src="/img/accordian-closed.png" alt="closed accordian" title="closed accordian" />
            </div>
            <div className="accordian_body">
                <p>Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
            </div>
            <div className="accordian_footer">
                <Button btnTxt='DETAILS' btnClasses='outline' />
                <Button btnTxt='VISIT' />
            </div>
        </div>
    );
}

export default Accordian