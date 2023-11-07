import { animated, useSpring } from '@react-spring/web'

const MovingIcon = ({ source, iconName, width, height, left, top, mainIcon } : { source: string, iconName: string, width: number, height: number, left: number, top: number, mainIcon: boolean }) => {
    const [ springs, api ] = useSpring(() => ({
        from: { x: 0 }
    }));

    const handleClick = () => {
        api.start({
            from: { x: 0 },
            to: [{ x: 100 }, { x: 0 }],
            loop: true
        })
    }
    
    return (
        <img
            className={`movingIcon ${mainIcon ? 'main' : ''}`}
            src={source}
            alt={iconName}
            title={iconName}
            width={width}
            height={height}
            style={{
                position: 'absolute', zIndex: '-1',
                left: `${left}%`, top: `${top}%`,
                animationName: `${mainIcon ? 'breathIcon' : 'moveIcon'}`
            }} />
        // <animated.div
        //     onClick={handleClick}
        //     style={{
        //         width: 80,
        //         height: 80,
        //         background: '#ff6d6d',
        //         borderRadius: 8,
        //         ...springs
        //     }}
        // />
    );
}

export default MovingIcon;