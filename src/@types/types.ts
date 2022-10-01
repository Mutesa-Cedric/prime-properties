
interface FilterPropertyOption{
    label: string;
    value: string;
}

export interface FilterProperty{
    title: string
    options?:FilterPropertyOption[]
    type?:string
}

export interface ServiceAd{
    icon:string,
    title:string,
    description:string
}