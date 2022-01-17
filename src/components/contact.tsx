import { h, Fragment } from "preact";

export const Contact = () => {

    return (
        <Fragment>
            <section className="zx-contact">
                <a className="zx-contact-item" href="#" target="_blank">
                    <img src="assets/github.png" alt="Github" />
                </a>
                <a className="zx-contact-item" href="#" target="_blank">
                    <img src="assets/linkedin.png" alt="Github" />
                </a>
                <a className="zx-contact-item" href="#" target="_blank">
                    <img src="assets/instagram.png" alt="Github" />
                </a>
            </section>
            <section className="zx-copyright" id="zx_contact">
                <div>{`❤️ & ☮️`}</div>
                zixiao.website©2022
            </section>
        </Fragment>
    )
}
