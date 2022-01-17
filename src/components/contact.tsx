import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

export const Contact = () => {
    const [easterEgg, setEasterEgg] = useState(false);

    const showEasterEgg = () => {
        setEasterEgg(true);
        setTimeout(() => {
            setEasterEgg(false);
        }, 3000);
    }

    return (
        <Fragment>
            <section className="zx-contact">
                <a className="zx-contact-item" href="https://github.com/ZixiaoWang" target="_blank">
                    <img src="assets/github.png" alt="Github" />
                </a>
                <a className="zx-contact-item" href="https://www.linkedin.com/in/jacky-wang-57a59b59/" target="_blank">
                    <img src="assets/linkedin.png" alt="Github" />
                </a>
                <a className="zx-contact-item" href="https://instagram/xiaoxiaoonline" target="_blank">
                    <img src="assets/instagram.png" alt="Github" />
                </a>
            </section>
            <section className="zx-copyright" id="zx_contact">
                {
                    easterEgg ? 
                    <div>{`In ❤️ with Kai`}</div> :
                    <div onDblClick={showEasterEgg}>{`❤️ & ☮️`}</div>
                }
                zixiao.website©2022
            </section>
        </Fragment>
    )
}
