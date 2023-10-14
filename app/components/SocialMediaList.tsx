import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaList = ({list}: {list: Array<{name: string, link: string, source: string}>}) => {
    return (
        <span className="SocialMediaList">
            {list.map(itm => (
                <SocialMediaIcon key={itm.name} name={itm.name} link={itm.link} source={itm.source}  />
            ))}
        </span>
    );
}

export default SocialMediaList