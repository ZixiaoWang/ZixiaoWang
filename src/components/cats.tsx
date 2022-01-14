import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface GridItem {
    src: string,
    size: "large" | "middle" | "small"
}

const images: GridItem[] = [
    { src: "http://placekitten.com/361/360", size: "large" },
    { src: "http://placekitten.com/361/360", size: "small" },
    { src: "http://placekitten.com/361/360", size: "small" },
    { src: "http://placekitten.com/361/360", size: "small" },
    { src: "http://placekitten.com/361/360", size: "middle" },
    { src: "http://placekitten.com/361/360", size: "small" },
    { src: "http://placekitten.com/361/360", size: "small" },
    { src: "http://placekitten.com/361/360", size: "small" }
]

export const Cats = () => {

    return (
        <section className="zx-section zx-photograph" id="zx_photograph">
            <div className="zx-section-intro">
                Oh right, I'm 🐈 lover
            </div>
            <div className="zx-grid">
                {
                    images.map((image: GridItem, index: number) => {
                        const classList: string[] = ["zx-grid-item"];
                        classList.push("is-" + image.size);
                        return (
                            <div className={classList.join(" ")}>
                                <img src={image.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}