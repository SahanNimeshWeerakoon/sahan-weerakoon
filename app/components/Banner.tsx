import MovingIcon from "./miniComponents/MovingIcon";
import Title from "./miniComponents/Title";

const Banner = () => {
    const movingIconsList = [
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 30, height: 30, x: 10, y: 10, mainIcon: false },
        { source: "/img/movingIcons/vue.png", iconName: "Node JS", width: 30, height: 30, x: 70, y: 10, mainIcon: false },

        { source: "/img/movingIcons/angular.png", iconName: "Node JS", width: 30, height: 30, x: 20, y: 30, mainIcon: false },
        { source: "/img/movingIcons/react.png", iconName: "Node JS", width: 55, height: 55, x: 50, y: 35, mainIcon: true },
        { source: "/img/movingIcons/php.png", iconName: "Node JS", width: 30, height: 30, x: 80, y: 30, mainIcon: false },

        { source: "/img/movingIcons/angular.png", iconName: "Node JS", width: 30, height: 30, x: 15, y: 60, mainIcon: false },
        { source: "/img/movingIcons/nodejs.png", iconName: "Node JS", width: 30, height: 30, x: 78, y: 60, mainIcon: false },
        
        { source: "/img/movingIcons/php.png", iconName: "Node JS", width: 30, height: 30, x: 5, y: 90, mainIcon: false },
        { source: "/img/movingIcons/js.png", iconName: "Node JS", width: 30, height: 30, x: 40, y: 100, mainIcon: false },
        { source: "/img/movingIcons/figma.png", iconName: "Node JS", width: 30, height: 30, x: 75, y: 90, mainIcon: false },
    ];
    return (
        <div className="banner">
            <h1 className="banner_title">
                <img src="/img/titleIcon.png" alt="Sahan Weerakoon" title="Sahan Weerakoon" />
                <Title title="HEY I’M SAHAN WEERAKOON" />
            </h1>
            <p className="banner_desc">
                A Frontend Main Full-Stack Engineer With More Than Seven Years of experience. Let Me
                Know What’s On Your Mind & The Time You Need It. I’ll Handle The Rest. Please Make It Challenging.
            </p>
            {movingIconsList.map(icon => {
                return (
                    <MovingIcon
                        key={`${icon.x}${icon.y}`} source={icon.source}
                        iconName={icon.iconName} width={icon.width}
                        height={icon.height} left={icon.x}
                        top={icon.y} mainIcon={icon.mainIcon} />
                )
            })}
        </div>
    );    
}

export default Banner;