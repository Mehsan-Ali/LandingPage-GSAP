import gsap from "gsap";

const SVGAnimation = () => {
    // const initialPath = "M 10 100 Q 500 100 990 100";

    const handleMouseMove = (event: React.MouseEvent) => {
        
        const rect = event.currentTarget.getBoundingClientRect().top;

        const localY = event.clientY - rect;

        const path = `M 10 100 Q 500 ${localY} 990 100`;

        gsap.to("#string svg path", {
            attr: { d: path },
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to("#string svg path", {
            attr: { d: "M 10 100 Q 500 100 990 100" },
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <div
            id="string"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-[200px] w-full bg-black flex items-center justify-center"
        >
            <svg width="1000" height="200">
                <path
                    d="M 10 100 Q 500 100 990 100"
                    stroke="white"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default SVGAnimation;
