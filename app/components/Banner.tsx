import MovingIcon from "./miniComponents/MovingIcon";
import Title from "./miniComponents/Title";

const Banner = () => {
    const movingIconsList = [
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 30, height: 30, x: 10, y: 10 },
        { source: "/img/movingIcons/react.png", iconName: "React JS", width: 20, height: 20, x: 10, y: 10 },
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 10, height: 10, x: 10, y: 10 },
        { source: "/img/movingIcons/react.png", iconName: "React JS", width: 10, height: 10, x: 10, y: 10 },
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 10, height: 10, x: 10, y: 10 },
        { source: "/img/movingIcons/react.png", iconName: "React JS", width: 10, height: 10, x: 10, y: 10 },
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 10, height: 10, x: 10, y: 10 },
        { source: "/img/movingIcons/react.png", iconName: "React JS", width: 10, height: 10, x: 10, y: 10 },
    ];
    return (
        <div className="banner">
            <h1 className="banner_title">
                <img src="/img/titleIcon.png" alt="Sahan Weerakoon" title="Sahan Weerakoon" />
                <Title title="HEY I’M SAHAN WEERAKOON" />
            </h1>
            <p className="banner_desc">
                A Frontend Main Full-Stack Engineer With More Than Five Years of experience. Let Me
                Know What’s On Your Mind & The Time You Need It. I’ll Handle The Rest. Please Make It Challenging.
            </p>
            {movingIconsList.map(icon => {
                return (
                    <MovingIcon source={icon.source} iconName={icon.iconName} width={icon.width} height={icon.height} left={icon.x}  top={icon.y} />
                )
            })}
        </div>
    );    
}

export default Banner;