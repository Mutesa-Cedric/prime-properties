
interface FilterPropertyOption{
    label: string;
    value: string;
}

export interface FilterProperty{
    title: string
    options?:FilterPropertyOption[]
    type?:string
}