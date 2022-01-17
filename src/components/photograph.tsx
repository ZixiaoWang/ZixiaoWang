import { h, createRef, Ref, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";

const images = [
    "assets/photography/img_min_1.JPG",
    "assets/photography/img_min_2.JPG",
    "assets/photography/img_min_3.JPG",
    "assets/photography/img_min_4.JPG",
    "assets/photography/img_min_5.JPG",
    "assets/photography/img_min_6.JPG",
    "assets/photography/img_min_7.JPG",
    "assets/photography/img_min_8.JPG",
    "assets/photography/img_min_9.JPG",
    "assets/photography/img_min_10.JPG",
    "assets/photography/img_min_11.JPG",
    "assets/photography/img_min_12.JPG",
]

export const Photograph = () => {
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
            <div className="zx-section-intro" id="zx_photograph_intro">
                I take 📸 sometimes
            </div>
            <div className="zx-photos" ref={currentRef => triggerAnimate(currentRef)}>
                {
                    images.map((image: string, index: number) => {
                        return (
                            <div ref={currentEle => refList[index] = currentEle}
                                style={{ backgroundImage: `url(${image})`}}
                                className="zx-photo" 
                                key={index}>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}