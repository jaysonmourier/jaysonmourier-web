import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconTextLinkProps = {
    icon: IconDefinition
    text: string
    href: string
    externalLink?: boolean
    className?: string
};

const IconTextLink = ({ icon, text, href, externalLink, className }: IconTextLinkProps) => {
    return (
        <a
        className={ className }
        href={ href } 
        target={ externalLink ? "_blank" : "_self" }>
            <div className="flex hover:text-primary">
                <FontAwesomeIcon icon={ icon } style={{ width: "1em", marginRight: "5px" }} />
                { text }
            </div>
        </a>
    );
}

export default IconTextLink;