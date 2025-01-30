import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faFlutter, faGit, faJava, faDocker } from "@fortawesome/free-brands-svg-icons";

const skills = [
    { icon: faReact, name: "React" },
    { icon: faFlutter, name: "Flutter" },
    { icon: faPython, name: "Python" },
    { icon: faJava, name: "Java" },
    { icon: faGit, name: "Git" },
    { icon: faDocker, name: "Docker" },
];

const Skills = () => {
    return (
        <div className={`flex flex-wrap justify-between mt-20`}>
            {skills.map((skill, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={skill.icon}
                    title={skill.name}
                    style={{ width: "2.5em" }}
                    className="hover:text-primary hover:scale-110 transition-transform duration-200 max-w-14 md:max-w-20"
                />
            ))}
        </div>
    );
};

export default Skills;
