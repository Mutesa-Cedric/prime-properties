import React from "react";
import Image from "next/image"

interface MapProps {
    height?: string;
}
const Map = ({ height }: MapProps) => {
    return (
        <div className="w-full h-96 relative"
            style={height ? { height: `${height}` } : {}}>
            <Image src={'/images/map.png'} layout="fill" objectFit="cover" />
        </div>
    )
}

export default Map;