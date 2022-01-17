import { Fragment, h, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import {
    Greeting,
    Coding,
    Photograph,
    Cats,
    Drawing,
    Contact
} from "./components";

import "./styles/main.scss";

const LOADING_TIME: number = 500;

export const ZiXiaoPage = () => {
    const [loading, setLoading] = useState(true);
    const [bgIndex, setBgIndex] = useState(Math.ceil(Math.random() * 5));

    const initLoading = (ref: HTMLElement | null) => {
        if (ref) {
            setTimeout(() => {
                ref.classList.add("is-hidden")
            }, LOADING_TIME);

            setTimeout(() => {
                setLoading(false);
            }, (LOADING_TIME + 300));
        }
    }

    const classList: string[] = ["zx-dunamic-background"];
    classList.push("index-" + bgIndex);

    return (
        <div class={classList.join(" ")} key={bgIndex}>
            <div class="zx-body" id="zx_body">
                <div class="zx-container" id="zx_container">
                    <Greeting />
                    <Coding />
                    <Photograph />
                    <Cats />
                    <Drawing />
                    <Contact />
                    <Fragment>
                        <div class="zx-logo">
                            <div className="zx-container">
                                zixiao.website
                            </div>
                        </div>
                        <div class="zx-footer-shadow"></div>
                    </Fragment>
                </div>
            </div>
            {
                loading &&
                <div className="zx-loading" ref={currentRef => initLoading(currentRef)}>
                    <div className="zx-loading-spinner">
                        &nbsp;
                    </div>
                </div>
            }
        </div>
    )
}

render(
    <ZiXiaoPage />,
    document.getElementById("root") as HTMLElement
);