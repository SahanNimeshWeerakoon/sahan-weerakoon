import { FC } from 'react'
import Image from 'next/image';

const HeadBanner: FC = () => {
    return (
        <div className='headBanner'>
            <h1 className='headBanner_title'>Software Engineer</h1>
            <Image
                src="/img/sahan-gray.png"
                width={500}
                height={500}
                alt="Sahan Weerakoon"
                className="headBanner_portrait"
            />
            <h1 className='headBanner_name'>Sahan Weerakoon</h1>
        </div>
    );
};

export default HeadBanner;