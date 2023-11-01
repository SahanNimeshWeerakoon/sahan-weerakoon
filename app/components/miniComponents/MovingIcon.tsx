const MovingIcon = ({ source, iconName, width, height, left, top, mainIcon } : { source: string, iconName: string, width: number, height: number, left: number, top: number, mainIcon: boolean }) => {
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
    );
}

export default MovingIcon;