import Skills from "@/app/components/Skills/Skills";
import IconTextLink from "@/app/components/TextLinks/IconTextLink";
import TiltImage from "@/app/components/TiltImage/TiltImage";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <header className="container mx-auto">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="mb-4 text-3xl md:text-5xl font-bold leading-tight">
                            Bonjour, je suis{" "}
                            <span className="text-primary">Jayson Mourier</span>
                        </h1>
                        <p className="py-4 text-neutral-500 leading-relaxed">
                            Passionné par les nouvelles technologies et diplômé en informatique, je
                            conçois des applications performantes et fiables en appliquant les meilleures
                            pratiques de développement. Mes compétences en data science et machine learning
                            me permettent de proposer des solutions innovantes, alliant rigueur, efficacité
                            et créativité.
                        </p>
                        <div className="flex gap-2 mt-4">
                            <IconTextLink
                                icon={faGithub}
                                text="GitHub"
                                href="https://www.github.com/jaysonmourier"
                                externalLink
                                aria-label="Lien vers mon profil GitHub"
                            />
                            <IconTextLink
                                className="ml-2"
                                icon={faLinkedin}
                                text="LinkedIn"
                                href="https://www.linkedin.com/in/jaysonmourier"
                                externalLink
                                aria-label="Lien vers mon profil LinkedIn"
                            />
                        </div>
                    </div>
                    <TiltImage />
                </div>
                <Skills />
            </div>
        </header>
    );
};

export default Header;
