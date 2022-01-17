import { h, createRef, Ref, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";

interface GridItem {
    src: string
}

const images: GridItem[] = [
    { src: "http://placekitten.com/412/212" },
    { src: "http://placekitten.com/201/200" },
    { src: "http://placekitten.com/201/200" },
    { src: "http://placekitten.com/201/200" },
    { src: "http://placekitten.com/412/400" },
    { src: "http://placekitten.com/201/200" },
    { src: "http://placekitten.com/201/200" },
    { src: "http://placekitten.com/201/200" }
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
                            <div ref={currentEle => refList[index] = currentEle}
                                className={classList.join(" ")} 
                                key={index}>
                                <img src={image.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}