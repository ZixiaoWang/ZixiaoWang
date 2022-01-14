import { h } from "preact";

export const Drawing = () => {
    
    return (
        <section className="zx-section zx-drawing" id="zx_drawing">
            <div className="zx-section-intro">
                <span>I do drawing too</span> <br />
                <span>sometimes use pencil</span> <br />
                <span>sometimes use Apple pencil</span>
            </div>
            <div className="zx-carousel">
                <div className="zx-carousel-item">
                    <img src="http://placekitten.com/241/360" alt="abc" />
                </div>
                <div className="zx-carousel-item">
                    <img src="http://placekitten.com/242/360" alt="abc" />
                </div>
                <div className="zx-carousel-item">
                    <img src="http://placekitten.com/242/361" alt="abc" />
                </div>
                <div className="zx-carousel-item">
                    <img src="http://placekitten.com/243/361" alt="abc" />
                </div>
            </div>
        </section>
    )
}