import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Agency, Agent, Blog, Collection, FAQ, Plan, Property, Service, Testimonial } from "../@types/types";
import sanityClient from "../lib/sanity";
import { propertiesQuery } from "../utils/queries";


interface ChildrenProps {
    children: React.ReactNode;
}

interface IData {
    properties: Property[] | null;
    agents: Agent[] | null;
    agencies: Agency[] | null;
    testimonials: Testimonial[] | null;
    plans: Plan[] | null;
    services: Service[] | null;
    faq: FAQ[] | null
    blogs: Blog[] | null;
    collections: Collection[] | null;
}


const DataContext = createContext<IData>({
    properties: null,
    agents: null,
    agencies: null,
    testimonials: null,
    plans: null,
    services: null,
    faq: null,
    blogs: null,
    collections: null,
});


export function DataProvider({ children }: ChildrenProps) {
    const [properties, setProperties] = useState<Property[] | null>(null);
    const [agents, setAgents] = useState<Agent[] | null>(null);
    const [agencies, setAgencies] = useState<Agency[] | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);
    const [plans, setPlans] = useState<Plan[] | null>(null);
    const [services, setServices] = useState<Service[] | null>(null);
    const [faq, setFaq] = useState<FAQ[] | null>(null);
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    const [collections, setCollections] = useState<Collection[] | null>(null);

    async function fetchProperties() {
        const properties = await sanityClient.fetch<Property[]>(propertiesQuery);
        setProperties(properties);
        // console.log(properties);
    }
    useEffect(() => {
        fetchProperties();
    }, [])

    const data = useMemo(() => ({
        properties, agents, testimonials, blogs, agencies, plans, services, faq, collections
    }), []);
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>

    )
}

export default function useData() {
    return useContext(DataContext);
}