import gsap from "gsap";
import { useEffect, useRef } from "react";
import "../App.css"
const Hero = () => {
  const txtRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const txt = txtRef.current?.textContent || "";
    const splittedText = txt.split("");

    let clutteredText = ''
    splittedText.map((char) => {
      clutteredText += `<span class="char">${char}</span>`;
    })
    txtRef.current!.innerHTML = clutteredText;
    gsap.from(".txt-Aniamte span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out"
    })
  }, [])


  return (
    <section>
      <div className="">
        <h2
          ref={txtRef}
          className="txt-Aniamte flex text-6xl p-5 bg-white md:text-8xl font-bold text-black"
        >
          Mehsan Ali
        </h2>
      </div>
      <div className="mt-10">
        <div className="box bg-amber-500 p-15 w-fit m-5"></div>
      </div>

    </section>
  );
};

export default Hero;
