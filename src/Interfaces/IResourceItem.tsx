interface IResourceItem {
    media: string;
    icon: string;
    title: string;
    text: string;
}

interface IResourceItemLink extends IResourceItem {
    link: string;
}

interface IResourceItemResource extends IResourceItem {
    resource: string;
}

export type { IResourceItemLink }
export type { IResourceItemResource }