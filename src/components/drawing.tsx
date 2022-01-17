import { h } from "preact";

const images: string[] = [
    "assets/sketches/sketch_min_1.jpg",
    "assets/sketches/sketch_min_2.jpg",
    "assets/sketches/sketch_min_3.jpg",
    "assets/sketches/sketch_min_4.jpg",
    "assets/sketches/sketch_min_5.jpg",
    "assets/sketches/sketch_min_6.jpg",
]

export const Drawing = () => {

    return (
        <section className="zx-section zx-drawing" id="zx_drawing">
            <div className="zx-section-intro">
                <span>I do drawing too</span> <br />
                <span>sometimes use pencil</span> <br />
                <span>sometimes use Apple pencil</span>
            </div>
            <div className="zx-carousel">
                <div className="zx-carousel-container" 
                    style={{ width: images.length * 300 + "px" }}>
                    {
                        images.map((image: string, index: number) => {
                            return (
                                <div key={index}
                                    style={{ backgroundImage: `url(${image})` }}
                                    className="zx-carousel-item">
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}