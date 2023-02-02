import { ITechnologyStack } from "../Interfaces/ITechnologyStack";

const TechnologiesList: ITechnologyStack[] = [
    {
        field: 'Design & Prototype',
        technologies: [
            {
                name: 'Figma',
                icon: 'static/svg/figma-icon.svg'
            },
            {
                name: 'Adobe Illustrator',
                icon: 'static/svg/illustrator-icon.svg'
            },
            {
                name: 'Draw.io',
                icon: 'static/svg/drawio-icon.svg'
            },
            {
                name: 'Notion',
                icon: 'static/svg/notion-icon.svg'
            }
        ]
    },
    {
        field: 'Frontend',
        technologies: [
            {
                name: 'React',
                icon: 'static/svg/react-icon.svg'
            },
            {
                name: 'Angular',
                icon: 'static/svg/angular-icon.svg'
            },
            {
                name: 'JavaScript (ES6+)',
                icon: 'static/svg/javascript-icon.svg'
            },
            {
                name: 'TypeScript',
                icon: 'static/svg/typescript-icon.svg'
            }
        ]
    },
    {
        field: 'Backend & Cloud',
        technologies: [
            {
                name: 'Node.js',
                icon: 'static/svg/nodejs-icon.svg'
            },
            {
                name: 'Amazon Web Services',
                icon: 'static/svg/aws-icon.svg'
            },
            {
                name: 'Python',
                icon: 'static/svg/python-icon.svg'
            },
            {
                name: 'Postman',
                icon: 'static/svg/postman-icon.svg'
            },
        ]
    },
    {
        field: 'Database',
        technologies: [
            {
                name: 'Microsoft SQL Server',
                icon: 'static/svg/mssql-icon.svg'
            },
            {
                name: 'MySQL',
                icon: 'static/svg/mysql-icon.svg'
            },
        ]
    },
    {
        field: 'VCS',
        technologies: [
            {
                name: 'Git',
                icon: 'static/svg/git-icon.svg'
            },
            {
                name: 'GitHub',
                icon: 'static/svg/github-icon.svg'
            },
            {
                name: 'Bitbucket',
                icon: 'static/svg/bitbucket-icon.svg'
            },
        ]
    }
];

export { TechnologiesList };