const MovingIcon = ({ source, iconName, width, height, left, top } : { source: string, iconName: string, width: number, height: number, left: number, top: number }) => {
    return (
        <img
            className="movingIcon"
            src={source}
            alt={iconName}
            title={iconName}
            width={width}
            height={height}
            style={{position: 'absolute', left, top}} />
    );
}

export default MovingIcon;