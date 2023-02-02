import { IProject } from "../Interfaces/IProject";

const ProjectList: IProject[] = [
    {
        title: "Crafting To Do’s",
        subtitle: "A React Front End Project",
        year: "2022",
        icon: "static/svg/thomas-logo.svg",
        banner: "static/img/crafting-to-dos-banner.png",
        color: "#A04CC1",
        fontColor: "#FFFFFF",
        stack: [
            {
                name: "React",
                icon: "static/svg/react-icon.svg"
            },
            {
                name: "JavaScript",
                icon: "static/svg/javascript-icon.svg"
            },
            {
                name: "Git",
                icon: "static/svg/git-icon.svg"
            },
            {
                name: "GitHub",
                icon: "static/svg/github-icon.svg"
            }
        ],
        shortDescription: "A React front end project for a to do list app.",
        description: <>
            <h2 className="subtitle">About.</h2>
            <p className="body-text">Crafting To Do’s is an app created with React and JavaScript (JSX) that allows you to have your tasks organized. It’s a front end app, using local storage for the to-dos. Design based in my Personal Brand Book. Check it out!</p>
        </>,
        images: [],
        links: [
            {
                media: "Website",
                icon: "static/svg/web-icon.svg",
                title: "Click here to test it live!",
                text: "saturnxs.github.io/Crafting-ToDos",
                link: "https://saturnxs.github.io/Crafting-ToDos/"
            },
            {
                media: "GitHub",
                icon: "static/svg/github-icon.svg",
                title: "Check out the repository on GitHub!",
                text: "github.com/Saturnxs/Crafting-ToDos",
                link: "https://github.com/Saturnxs/Crafting-ToDos"
            }

        ]
    },
    {
        title: "Atlas",
        subtitle: "2021 Graduation Project",
        year: "2021",
        icon: "static/svg/atlas-icon.svg",
        banner: "static/img/atlas-banner.png",
        color: "#FFDC40",
        fontColor: "#000000",
        stack: [
            {
                name: "React",
                icon: "static/svg/react-icon.svg"
            },
            {
                name: "JavaScript",
                icon: "static/svg/javascript-icon.svg"
            },
            {
                name: "Node.js",
                icon: "static/svg/nodejs-icon.svg"
            },
            {
                name: "Express",
                icon: "static/svg/express-icon.svg"
            },
            {
                name: "Microsoft SQL Server",
                icon: "static/svg/mssql-icon.svg"
            },
            {
                name: "Adobe Illustrator",
                icon: "static/svg/illustrator-icon.svg"
            },
            {
                name: "Figma",
                icon: "static/svg/figma-icon.svg"
            }
        ],
        shortDescription: "A web app for workaholics to manage their time and tasks during COVID-19 lockdown.",
        description: <>
            <h2 className="subtitle">About.</h2>
            <p className="body-text">First application ever done with React as part of a graduation project. Atlas was a web app that allowed professionals to track workaholics while remote working during COVID-19 lockdown.</p>
        </>,
        images: [],
        resources: [
            {
                media: "Documentation",
                icon: "static/svg/doc-icon.svg",
                title: "Click here to read full documentation!",
                text: "Atlas - Documentación.pdf",
                resource: "static/doc/Atlas - Documentación.pdf"
            }
        ]
    },
    {
        title: "Wonder",
        subtitle: "Expotec 2019 Winning Project",
        year: "2019",
        icon: "static/svg/wonder-icon.svg",
        banner: "static/img/wonder-banner.png",
        color: "#3D2B72",
        fontColor: "#FFFFFF",
        stack: [
            {
                name: "HTML5",
                icon: "static/svg/html-icon.svg"
            },
            {
                name: "CSS3",
                icon: "static/svg/css-icon.svg"
            }, {
                name: "JavaScript",
                icon: "static/svg/javascript-icon.svg"
            },
            {
                name: "Unity",
                icon: "static/svg/unity-icon.svg"
            },
            {
                name: "Adobe Illustrator",
                icon: "static/svg/illustrator-icon.svg"
            },
            {
                name: "Adobe Premiere",
                icon: "static/svg/premiere-icon.svg"
            }
        ],
        shortDescription: "Video game and webpage with the goal of educating children about social, global and environmental problems.",
        description: <>
            <h2 className="subtitle">About.</h2>
            <p className="body-text">Winning project at the Expotec: Science, Engineering and Art fair 2019. Wonder was a video game and a webpage with the goal of educating children about social, global and environmental problems. It’s teachings are part of the Sustainable Development Goals promoted by the United Nations (UN).
                <br />As group project I contributed mainly to the webpage and also the art material for promoting the game in social media and the high school buildings.</p>
            <h2 className="subtitle">Awards.</h2>
            <ul>
                <li>Second place in Software Development at Don Bosco Professional Technical High School.</li>
                <li>Winner of the best project in the art category at Don Bosco Professional Technical High School.</li>
                <li>Special recognition in software development.</li>
                <li>Recognition of Isthmus of Costa Rica for a proposal to solve current problems such as global warming.</li>
            </ul>
        </>,
        images: [],
        resources: [
            {
                media: "Documentation",
                icon: "static/svg/file-icon.svg",
                title: "Download the documentation here!",
                text: "Wonder - Documentation.pdf",
                resource: "static/download/Wonder - Documentation.pdf"
            }
        ],
        links: [
            {
                media: "Instagram",
                icon: "static/svg/instagram-icon.svg",
                title: "Read more about the project on Instagram!",
                text: "_wonder.r",
                link: "https://www.instagram.com/_wonder.r/"
            }
        ]
    },
];

export { ProjectList };