import { h } from "preact";
import { useState } from "preact/hooks";

export const useImagreModal = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [src, setSrc] = useState<null | string>(null);

    return {
        visibility,
        src,
        show: (url: string) => {
            setSrc(url);
            setVisibility(true)
        },
        close: () => {
            setSrc(null);
            setVisibility(false);
        }
    }
}