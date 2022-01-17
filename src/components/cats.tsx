import { h, createRef, Ref, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";

interface GridItem {
    src: string
}

const images: GridItem[] = [
    { src: "assets/cats/cat_min_1.jpg" },
    { src: "assets/cats/cat_min_2.jpg" },
    { src: "assets/cats/cat_min_3.jpg" },
    { src: "assets/cats/cat_min_4.jpg" },
    { src: "assets/cats/cat_min_5.jpg" },
    { src: "assets/cats/cat_min_6.jpg" },
    { src: "assets/cats/cat_min_7.jpg" },
    { src: "assets/cats/cat_min_8.jpg" }
]

export const Cats = () => {
    const [trigger, setTrigger] = useState(false);
    const refList = new Array(images.length).fill(null);

    const triggerAnimate = (ref: HTMLElement | null) => {
        if (ref) {
            document.body.addEventListener("scroll", () => {
                const pos: DOMRect = ref.getBoundingClientRect();
                if (pos.top < (window.innerHeight * 0.5) && pos.top > (window.innerHeight * -0.5)) {
                    setTrigger(true);
                } else {
                    setTrigger(false)
                }
            })
        }
    }

    useEffect(() => {
        if (trigger) {
            refList.forEach((refItem: any, index: number) => {
                if (refItem) {
                    setTimeout(() => {
                        refItem?.classList?.add("is-shown")
                    }, index * 100)
                }
            })
        } else {
            refList.forEach((refItem: any, index: number) => {
                if (refItem) {
                    setTimeout(() => {
                        refItem?.classList?.remove("is-shown")
                    }, index * 20)
                }
            })
        }
    }, [trigger]);

    return (
        <section className="zx-section zx-photograph" id="zx_photograph">
            <div className="zx-section-intro">
                Oh right, I'm 🐈 lover
            </div>
            <div className="zx-grid" ref={currentRef => triggerAnimate(currentRef)}>
                {
                    images.map((image: GridItem, index: number) => {
                        const classList: string[] = ["zx-grid-item"];
                        classList.push("is-" + (index + 1));
                        return (
                            <div style={{ backgroundImage: `url(${image.src})`}}
                                ref={currentEle => refList[index] = currentEle}
                                className={classList.join(" ")} 
                                key={index}>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}