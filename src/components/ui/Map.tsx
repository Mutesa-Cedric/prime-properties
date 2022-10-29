import React from "react";
import Image from "next/image"

interface MapProps {
    height?: string;
}
const Map = ({ height }: MapProps) => {
    return (
        <div className="w-full h-96 relative"
            style={height ? { height: `${height}` } : {}}>
            {/* <Image src={'/images/map.png'} layout="fill" objectFit="cover" /> */}
            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45013501344!2d-115.31508467759912!3d36.12491845142954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2srw!4v1667030889176!5m2!1sen!2srw`}
                style={{ border: 0,width:"100%",height:"100%" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map;