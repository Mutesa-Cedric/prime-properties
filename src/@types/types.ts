
interface FilterPropertyOption {
    label: string;
    value: string;
}

export interface FilterProperty {
    title: string
    options?: FilterPropertyOption[]
    type?: string
}

export interface ServiceAd {
    icon: string,
    title: string,
    description: string
}

export type Address = {
    _type: string
    lat: number
    long: number
}

export type Feature = {
    name: number
    value: number
    icon: string
}
export type Image = {
    _type: "image"
    asset: {
        _ref: string;
        _type: "reference"
    }
}

export type Slug = {
    _type: "slug";
    current: string;

}

export interface Achievement {
    icon: string;
    description: string;
    title: string;
}

export interface Partener {
    logo:string
    name:string
}

export type PlanFeature={
    title:string;
    isAvailable:boolean;
}

export interface Plan{
    title:string;
    price:number;
    description:string;
    features:PlanFeature[];
}

export interface Property {
    name: string;
    price: number;
    overview: string;
    bannerImage: Image;
    address: Address;
    features: Feature[];
    geallery: Image[]
}

export interface Agent {
    _key: string;
    name: string;
    profileImage: string;
    role: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
    about: string;
    socialMedia: {
        name: string;
        url: string
    }[];
    slug: string;
}