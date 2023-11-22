import { useSpring, animated, config } from '@react-spring/web'

const MovingIcon = ({ source, iconName, width, height, left, top, mainIcon } : { source: string, iconName: string, width: number, height: number, left: number, top: number, mainIcon: boolean }) => {
    const springs = useSpring({
        from: { opacity: 1, scale: 1 },
        to: [
            { opacity: 0.3, scale: mainIcon ? 1.2 : 1 },
            { opacity: 1, scale: 1 },
        ],
        loop: true,
        config: {
            tension: 120, friction: 14,
            duration: 1000
        }
    })

    return (
        <animated.img
            className={`movingIcon ${mainIcon ? 'main' : ''}`}
            src={source}
            alt={iconName}
            title={iconName}
            width={width}
            height={height}
            style={{
                position: 'absolute', zIndex: '-1',
                left: `${left}%`,
                top: `${top}%`,
                ...springs
            }}
        />
    );
}

export default MovingIcon;