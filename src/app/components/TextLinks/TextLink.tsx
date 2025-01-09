type TextLinkProps = {
    text: string;
    href: string;
    className?: string;
    externalLink?: boolean;
    style?: React.CSSProperties;
}

const TextLink = ({ text, href, className, style, externalLink }: TextLinkProps) => {
    return (
        <a className={ className } 
            href={ href } 
            target={ externalLink ? "_blank" : "_self" } 
            style={ style }>
            { text }
        </a>
    );
}

export default TextLink;