const MovingIcon = ({ source, iconName, width, height } : { source: string, iconName: string, width: number, height: number }) => {
    return (
        <img className="movingIcon" src={source} alt={iconName} title={iconName} width={width} height={height} />
    );
}

export default MovingIcon;