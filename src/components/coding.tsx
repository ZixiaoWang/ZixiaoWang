import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

interface AnimatedLineProps {
    text: string,
    initText?: string,
    trigger?: boolean,
    delay?: number,
    className?: string,
    timeout?: number,
    onFinished?: () => void
}

interface Meta {
    className: string,
    text: string,
    timeout?: number,
}

const SPACE: string = String.fromCharCode(160);

const exampleMeta: Array<Meta> = [
    { className: "white", text: `~ const me = new ZiXiao()`, timeout: 60 },
    { className: "green", text: `ZiXiao {`, timeout: 0 },
    { className: "green", text: `name: "zi xiao",`, timeout: 0 },
    { className: "green", text: `englishName: "Jacky",`, timeout: 0 },
    { className: "green", text: `age: 30`, timeout: 0 },
    { className: "green", text: `gender: "male"`, timeout: 0 },
    { className: "green", text: `}`, timeout: 0 },
    { className: "green", text: SPACE, timeout: 0 },
    { className: "white", text: `~ me.getDescription()`, timeout: 60 },
    { className: "green", text: `"Hi, I'm zixiao"`, timeout: 0 },
    { className: "green", text: `"a frontend engineers"`, timeout: 0 },
    { className: "green", text: `"but I also do some backend works too."`, timeout: 0 },
    { className: "green", text: SPACE, timeout: 0 },
    { className: "white", text: `~ me.getPrimarySkills()`, timeout: 60 },
    { className: "green", text: `["HTML", "CSS", "JavaScript", "TypeScript"]`, timeout: 0 },
    { className: "green", text: SPACE, timeout: 0 },
    { className: "white", text: `~ me.getAllSkills()`, timeout: 80 },
    { className: "green", text: `● HTML, CSS`, timeout: 0 },
    { className: "green", text: `● JavaScript (Client + NodeJS)`, timeout: 0 },
    { className: "green", text: `● TypeScript`, timeout: 0 },
    { className: "green", text: `● GraphQL`, timeout: 0 },
    { className: "green", text: `● Ruby (Ruby on Rails)`, timeout: 0 },
    { className: "green", text: `● PostgresQL`, timeout: 0 },
    { className: "green", text: SPACE, timeout: 0 },
    { className: "white", text: `~ me.getJSFrameworks()`, timeout: 60 },
    { className: "green", text: `["React", "Angular"]`, timeout: 0 },
    { className: "green", text: SPACE, timeout: 0 },
    { className: "white", text: `~ me.getWorkingExperiencs()`, timeout: 60 },
    { className: "green", text: `● (2015-2017) ARBA Holdings Limited (HK)`, timeout: 0 },
    { className: "green", text: `● (2017) Digitcube Limited `, timeout: 0 },
    { className: "green", text: `● (2017-2019) CryptoBLK Limited (HK)`, timeout: 0 },
    { className: "green", text: `● (2019-2020) Block.One Limited (HK)`, timeout: 0 },
    { className: "green", text: `● (2020~present) Flexport, Inc (ShenZhen)`, timeout: 0 },
]

const AnimatedLine = (props: AnimatedLineProps) => {
    const [content, setContent] = useState(props.initText || "");
    const [cursorIndex, setCursorIndex] = useState(-1);

    useEffect(() => {
        if (props.trigger && cursorIndex <= props.text.length) {
            setTimeout(() => {
                setContent(content + props.text.substring(cursorIndex, cursorIndex + 1));
                setCursorIndex(cursorIndex + 1);
            }, Number.isNaN(props.timeout) ? 10 : props.timeout);
        }

        if (props.trigger && cursorIndex > props.text.length) {
            if (props.onFinished && typeof props.onFinished === "function") {
                props.onFinished();
            }
        }
    }, [props.trigger, cursorIndex]);

    const className: string = props.className || "";

    if (!props.trigger) {
        return <div className={className}>{content}</div>;
    }

    return (
        <div className={className}>{content}</div>
    )
}


/**
 * This is the REAL <Coding /> component
 * @returns 
 */
export const Coding = () => {
    const [lineNumber, setLineNumber] = useState(-1);
    const [trigger, setTrigger] = useState(false);

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

    return (
        <section className="zx-section zx-program" id="zx_program">
            <div ref={currentRef => triggerAnimate(currentRef)}
                className="zx-section-intro" id="zx_program_intro">
                <AnimatedLine
                    text="I write codes"
                    initText="> "
                    trigger={trigger}
                    timeout={100}
                    onFinished={() => setLineNumber(0)}
                />
            </div>
            <div className="zx-terminal-container">
                <div className="zx-terminal-head">
                    <div className="zx-terminal-btn is-red"></div>
                    <div className="zx-terminal-btn is-yellow"></div>
                    <div className="zx-terminal-btn is-green"></div>
                </div>
                <div className="zx-terminal-body" id="zx_program_example">
                    {
                        exampleMeta
                            .map((meta: Meta, index: number) => {
                                return (
                                    <AnimatedLine
                                        key={`${index}_${lineNumber >= index}`}
                                        text={meta.text}
                                        className={meta.className}
                                        trigger={lineNumber >= index}
                                        timeout={meta.timeout}
                                        onFinished={() => setLineNumber(lineNumber + 1)}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </section>
    )
}
