import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const TextAnimationTwo = () => {
    const textref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const text = textref.current?.textContent || "";
        const splittedText = text.split("");

        let clutteredText = ''
        splittedText.map((char) => {
            clutteredText += `<span class="char-two">${char}</span>`;
        })
        textref.current!.innerHTML = clutteredText;
        gsap.fromTo(".char-two", {
            y: 50,
            opacity: 0.5,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
        },{
            y: 0,
            opacity: 2,
            duration: 1,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".page1",
                start: "top center",
                end: "top -10%",
                scroller: "body",
                scrub: 2,
                markers: true,
            }
        })

    }, [])
    // useGSAP(() => {
    //     // GSAP animation logic can be added here
    //     gsap.fromTo('.page1 h4', {
    //         opacity: 0,
    //         duration: 2,

    //     },{
    //         opacity: 8,
    //         duration: 2,
    //         stagger: {
    //             each: 0.5,

    //         },
    //         scrollTrigger: {
    //             start: "tpp center",
    //             end: "bottom top",
    //             trigger: ".page1",
    //             scroller: "body",
    //             scrub: 1,
    //             // markers: true,
    //         }
    //     })
    // }, [])
    return (
        <div className='page1 min-h-screen flex-center bg-gray-200 text-black'>
            <h4 ref={textref} className='text-4xl font-extrabold'>
                Text Animation Two Component
                Text Animation Two Component
                Text Animation Two Component
            </h4>
        </div>
    )
}

export default TextAnimationTwo
