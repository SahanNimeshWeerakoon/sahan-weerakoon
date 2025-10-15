import { FC } from 'react'

const DownloadResume: FC = () => {
    return (
        <a href='/SahanWeerakoon.pdf' download className='resume'>
            Download CV
        </a>
    );
}

export default DownloadResume;