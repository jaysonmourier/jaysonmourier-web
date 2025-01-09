import TextLink from "./TextLink";

type NavTextLinkProps = {
    text: string;
    href: string;
    className?: string;
    externalLink?: boolean;
    style?: React.CSSProperties;
};

const NavTextLink = ({text, href, className, externalLink, style}: NavTextLinkProps) => {
    return (
        <TextLink
            text={ text }
            href={ href }
            className={`${className} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
            externalLink={externalLink}
            style={style}
        />
    );
}

export default NavTextLink;