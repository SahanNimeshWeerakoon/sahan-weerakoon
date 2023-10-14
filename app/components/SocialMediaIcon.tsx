const SocialMediaIcon = ({ name, link, source }: { name: string, link: string, source: string } ) => {
    return (
        <a href={link} className="SocialMediaIcon" target="_blank">
            <img alt={name} title={name} src={source} className="SocialMediaIcon_image" />
        </a>
    );
}

export default SocialMediaIcon