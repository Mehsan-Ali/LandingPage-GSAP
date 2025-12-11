import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cross, Menu } from "lucide-react";
import React from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { x: "100%" },
                { x: "0%", duration: 0.5, ease: "power3.out" }
            );
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in",
            });
        }
        gsap.to('.nav-list li', {
            x: isOpen ? 0 : 100,
            opacity: isOpen ? 1 : 0,
            duration: 0.3,
            delay: isOpen ? 0.5 : 0,
            stagger: { each: 0.3, from: "start" },
        })
    }, [isOpen]); 

    return (
        <div className="flex justify-end p-5 bg-black">
            <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="text-white cursor-pointer"
            />

            {/* Keep menu mounted always for GSAP exit animation */}
            <div
                ref={menuRef}
                className={`nav-menu text-white fixed inset-0 bg-black shadow-lg rounded-md p-20 
          ${isOpen ? "block" : "pointer-events-none"}`}
                style={{ transform: "translateX(100%)" }} // initial position
            >
                <Cross className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                <ul className="nav-list space-y-10 text-3xl flex flex-col justify-center h-full">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;