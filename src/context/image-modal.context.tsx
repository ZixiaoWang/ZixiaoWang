import { createContext, Context } from "preact";

export interface ImageModalContextInterface {
    visibility: boolean,
    src: null | string,
    show: (url: string) => void,
    close: () => void,
}

export const ImageModalContext: Context<any> = createContext({
    visibility: false,
    src: null,
    show: () => {},
    close: () => {}
})