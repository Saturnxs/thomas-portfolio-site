import { IResourceItemLink, IResourceItemResource } from "./IResourceItem";
import { ITechnology } from "./ITechnology";

interface IProject {
    title: string;
    subtitle: string;
    year: string;
    icon: string;
    banner: string;
    color: string;
    fontColor: string;
    stack: ITechnology[];
    shortDescription: string;
    description: JSX.Element;
    images: string[];
    resources?: IResourceItemResource[];
    links?: IResourceItemLink[];
}

export type { IProject };