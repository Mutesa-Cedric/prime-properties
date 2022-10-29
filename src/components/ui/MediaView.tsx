import React, { useRef, useState } from 'react';
import Image from "next/image";
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import { useRecoilState } from 'recoil';
import { currentImage, currentVideo, showModal } from '../../atoms/states';

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
const MediaView = () => {
  const [img, setImage] = useRecoilState(currentImage);
  const [_showModal, setShowModal] = useRecoilState(showModal);
  const [video, setVideo] = useRecoilState(currentVideo);
  const [muted, setMuted] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current!.contains(e.target as Node)) {
      setShowModal(false);
      setImage(null);
      setVideo(null)
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setImage(null);
    setVideo(null)
  };

  return (
    <>
      <div
        onClick={onClickOutside}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div ref={modalRef} className={`border-0 md:h-[70vh] md:w-[50vw] w-[80vw] h-[70vh] relative rounded-sm shadow-lg  flex flex-col  outline-none focus:outline-none (
            ${img ? '' : 'bg-gray-700 rounded'}
            )`}>
            {
              img ?
                <Image src={img!} alt="img" layout="fill" objectFit="cover" className="rounded-md" />
                :
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=M_tXe-I_zpM"}
                  width={"100%"}
                  height={"100%"}
                  style={{ position: "absolute", top: "0", left: "0" }}
                  playing
                  muted={muted}
                />
            }
            <button onClick={closeModal} className="modalButton
                  absolute  top-2 right-2 !z-40 h-9 w-9 bg-gray-100 hover:bg-primary-light hover:text-white rounded-full flex items-center justify-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default MediaView;