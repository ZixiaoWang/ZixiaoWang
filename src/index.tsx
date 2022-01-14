import { h, render } from "preact";
import {
    Greeting,
    Coding,
    Photograph,
    Cats,
    Drawing,
    Contact
} from "./components";

import "./styles/main.scss";

export const ZiXiaoPage = () => {

    return (
        <div class="zx-dynamic-background">
            <div class="zx-body" id="zx_body">
                <div class="zx-container" id="zx_container">
                    <Greeting />
                    <Coding />
                    <Photograph />
                    <Cats />
                    <Drawing />
                    <Contact />
                    <div class="zx-logo">zixiao.website </div>
                    <div class="zx-footer-shadow"></div>
                </div>
            </div>
        </div>
    )
}

render(
    <ZiXiaoPage />,
    document.getElementById("root") as HTMLElement
);