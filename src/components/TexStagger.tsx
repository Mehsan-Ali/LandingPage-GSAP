import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TexStagger = () => {
    useGSAP(() => {
        gsap.to('.page-5 h6',
            {
                transform: 'translateX(-212%)',
                scrollTrigger: {
                    trigger: '.page-5',
                    scroller: "body",
                    // markers: true,
                    start: 'top -30%',
                    end: 'top -120%',
                    scrub: 2,
                    pin: true,
                }
            },
        )
    }, [])
    return (
        <section className='page-5 bg-white overflow-x-hidden  '>
            <h6 className='text-animt text-[100vh] font-extrabold text-black'>
                Collaboration
            </h6>
        </section>
    )
}

export default TexStagger
