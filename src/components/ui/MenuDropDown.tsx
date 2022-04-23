import Link from "next/link";
import React from "react";
import { navLinks } from "../../constants/sitemap";
// import Fade from "react-reveal/fade";
import Router from "next/router";
import { useRecoilState } from "recoil";
import { showDropDownMenu } from "../../atoms/states";


const MenuDropDown = () => {
    const [_dropDownMenuState, setShowDropDownMenu] = useRecoilState(showDropDownMenu);
    Router.events.on("routeChangeComplete", () => {
        setShowDropDownMenu(false);
    });

    React.useEffect(() => {
        window.addEventListener("scroll", () => setShowDropDownMenu(false));
        // window.addEventListener("click", (e) => {
        //     console.log(e.target);
        // })
        return () => {
            window.removeEventListener("scroll", () => setShowDropDownMenu(false));
        }
    }, [])
    return (
        // <Fade duration={1300}>
            <div onClick={() => console.log("clicked")} className="absolute xl:right-60 lg:right-40 md:right-12 top-32 flex flex-col bg-white p-8 pr-24 shadow-xl rounded z-20 space-y-2 ">
                {navLinks.map((link) => (
                    <Link href={link.href} key={link.title}>
                        <p className="text-base  text-heading-1 cursor-pointer hover:text-primary-light">{link.title}</p>
                    </Link>
                ))
                }
            </div>
        // </Fade>
    )
}


export default MenuDropDown;