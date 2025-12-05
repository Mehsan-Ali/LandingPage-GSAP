import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

const About = () => {
    const refTxt = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        const text = refTxt.current?.textContent || ""
        const splittedText = text.split("");
        let clutteredText = ''
        splittedText.map((char) => {
            clutteredText += `<span className="char">${char === ' ' ? "&nbsp;" : char}</span>`;
        })
        console.log(clutteredText)
        refTxt.current!.innerHTML = clutteredText;
        gsap.from(".animateText span", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: {
                grid: [2,-2], //row column
                from: "end",
                each: 0.3
            }
        },)
    }, [])
    return (
        <section className='min-h-screen bg-gray-900 text-white'>
            <h3 ref={refTxt} className="animateText h-30 overflow-hidden p-5 flex text-6xl md:text-8xl font-bold">
                Mehsan
            </h3>
        </section>
    )
}

export default About