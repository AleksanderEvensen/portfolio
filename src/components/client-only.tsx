import React, { useEffect, useState } from "react";
export default function ClientOnly({children}: React.PropsWithChildren<{}>) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) return <></>
    return children;
}