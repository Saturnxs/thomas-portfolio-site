import { IResourceItemLink, IResourceItemResource } from "../Interfaces/IResourceItem";

const ResourceList: (IResourceItemLink | IResourceItemResource)[] = [
    {
        media: 'Github',
        icon: 'static/svg/github-icon.svg',
        title: 'Check out my code on Github!',
        text: 'github.com/Saturnxs',
        link: 'https://github.com/Saturnxs',
    },
    {
        media: 'LinkedIn',
        icon: 'static/svg/linkedin-icon.svg',
        title: "Let's connect on LinkedIn!",
        text: 'in/thomas-bermudez-mora',
        link: 'https://www.linkedin.com/in/thomas-bermudez-mora/'
    },
    {
        media: 'Email',
        icon: 'static/svg/email-icon.svg',
        title: 'Need help with your project?',
        text: 'bmthomas.code@gmail.com',
        link: 'mailto:bmthomas.code@gmail.com'
    }
];

export { ResourceList };