"use client"
import { useState } from 'react';
import Button from './Button'

const Accordian = () => {
    const [ openStatus, setOpenStatus ] = useState(false);
    return (
        <div className={`accordian transition ${ openStatus ? 'accordian--open' : '' }`}>
            <div className="accordian_header cursor-pointer" onClick={() => { setOpenStatus(status => !status) }}>
                <h3>Title</h3>
                <img src="/img/accordian-closed.png" className='accordian_icon transition' alt="closed accordian" title="closed accordian" />
            </div>
            <div className="accordian_body transition">
                <p>Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
            </div>
            <div className="accordian_footer transition">
                <Button btnTxt='DETAILS' btnClasses='btn--outline' />
                <Button btnTxt='VISIT' btnClasses='ml-1' />
            </div>
        </div>
    );
}

export default Accordian