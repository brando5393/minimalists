import { useEffect, useRef } from "react";

const useScrollToBottom = (todos) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [containerRef.current?.scrollHeight, todos]); // Trigger effect when container's scrollHeight or todos change

    return containerRef;
};

export default useScrollToBottom;
