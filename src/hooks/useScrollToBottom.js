import { useEffect, useRef } from "react";

const useScrollToBottom = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, []);

    return containerRef;
};

export default useScrollToBottom;