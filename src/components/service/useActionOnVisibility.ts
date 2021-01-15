import { useEffect, useRef } from 'react';

interface IntersectionObserverProps {
    /**
     * Default: 100px
     */
    rootMargin: string;
    /**
     * Default: 0.25
     */
    threshold: number;
}

const defaultOptions = {
    rootMargin: '100px',
    threshold: 0.25,
};

function useActionOnVisibility(action: Function, options?: IntersectionObserverProps) {
    const ref = useRef(null);

    useEffect(() => {
        if (!action) {
            return undefined;
        }
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    action();
                }
            },
            { ...defaultOptions, ...(options || {}) },
        );
        observer.observe(ref.current);

        return () => {
            observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [action]);

    return ref;
}

export default useActionOnVisibility;
