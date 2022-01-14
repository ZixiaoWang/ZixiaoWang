import { h, createRef, Ref, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";

const images = [
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
    "http://placekitten.com/120/120",
]

export const Photograph = () => {
    const [trigger, setTrigger] = useState(false);
    const refList = new Array(images.length).fill(null);

    const triggerAnimate = (ref: HTMLElement | null) => {
        if (ref) {
            document.body.addEventListener("scroll", () => {
                const pos: DOMRect = ref.getBoundingClientRect();
                if (pos.top < (window.innerHeight * 0.5)) {
                    setTrigger(true);
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
                    }, index * 200)
                }
            })
        }
    }, [trigger]);

    return (
        <section className="zx-section zx-photograph" id="zx_photograph">
            <div className="zx-section-intro" id="zx_photograph_intro">
                I take 📸 sometimes
            </div>
            <div className="zx-photos" ref={currentRef => triggerAnimate(currentRef)}>
                {
                    images.map((image: string, index: number) => {
                        return (
                            <div ref={currentEle => refList[index] = currentEle}
                                className="zx-photo" 
                                key={index}>
                                <img src={image} alt="CAT" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}