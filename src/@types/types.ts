
interface FilterPropertyOption {
    label: string;
    value: string;
}

export interface FilterProperty {
    title: string
    options?: FilterPropertyOption[]
    type?: string
}

export interface Fact {
    title: string;
    desc: string;
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
    image: string;
    _type: "image"
    asset: any
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
    logo: string
    name: string
}

export type PlanFeature = {
    title: string;
    isAvailable: boolean;
}

export interface Plan {
    title: string;
    price: number;
    description: string;
    features: PlanFeature[];
}

export type Video = {
    banner: string;
    url: string;
}

export interface Property {
    _id:string;
    name: string;
    price: number;
    overview: string;
    bannerImage: string;
    address: Address;
    features: Feature[];
    gallery: Image[];
    slug: string;
    status: string;
    videos: Video[];
    likedBy: string[] | null;
}

export type SocialMedia = {
    name: string;
    url: string;
}

export interface Agent {
    _id:string;
    name: string;
    profileImage: string;
    role: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
    about: string;
    socialMedia: SocialMedia[];
    slug: string;
    likedBy: string[] | null;
    comments: Comment[]|null;
}

export interface Service {
    name: string;
    description: string;
    banner: string;
    slug: string;
}

export interface Testimonial {
    name: string;
    profileImage: string;
    role: string;
    testimonial: string;
    stars: number;
}

export type Admin = {
    name: string;
    email: string;
}

export interface Comment {
    commentedBy: string;
    profileImage?: string;
    body: string;
    _id: string;
    replies?: Comment[]
}

export interface BlogCategory {
    title: string;
    slug: string
}

export interface Blog {
    _id: string;
    title: string;
    category: {
        title: string,
        slug: string
    };
    banner: string;
    content: string;
    description: string;
    postedBy: Agent | Admin;
    publishedAt: string;
    tags: string[];
    slug: string;
    comments?: Comment[]
}

export interface FAQ {
    question: string;
    answer: string;
    category: string;
}

export interface Agency {
    name: string;
    description: string;
    image: string;
    socialMedia: SocialMedia[];

}

export interface Collection {

}

export interface Contact {
    icon: string;
    title: string;
    contacts: string[];
}

export interface City {
    name: string;
    banner: Image
}


export interface AppData {
    properties: Property[]
    blogs: Blog[]
    agents: Agent[]
    agencies: Agency[]
    services: Service[]
    plans: Plan[]
    testimonials: Testimonial[]
    faqs: FAQ[]
    cities: City[]
}

export interface NavLink {
    title: string;
    href: string;
}
