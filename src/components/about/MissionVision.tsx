import Image from 'next/image';
import React from 'react'

interface Section {
  icon: string;
  title: string;
  description: string;
}

const sections: Section[] = [
  {
    title: "Our Mission",
    icon: "/icons/mission_icon.svg",
    description: "It is a long established fact that a reader will be too distracted by the readable content of a page when one looking at its layout."
  },
  {
    title: "Our Vision",
    icon: "/icons/vision_icon.svg",
    description: "It is a long established fact that a reader will be too distracted by the readable content of a page when one looking at its layout."
  }
]
const MissionVision = () => {
  return (
    <div className='w-full flex items-center justify-between space-x-12'>
      {
        sections.map((section, i) => (
          <div key={i} className="mission-vision flex flex-col space-y-4 p-7 ">
            <div className="flex space-x-4 items-center">
              <div className='flex items-center justify-between p-2 bg-[#EEF7FF]'>
                <Image src={section.icon} width={25} height={25} />
              </div>
              <h2 className='text-lg font-medium'>{section.title}</h2>
            </div>
            <p className='text-gray-primary/75'>{section.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MissionVision