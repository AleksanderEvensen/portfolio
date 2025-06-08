export function NorwegianFlag({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-no"
            viewBox="0 0 640 480"
            className={className}
        >
            <path fill="#ed2939" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M180 0h120v480H180z" />
            <path fill="#fff" d="M0 180h640v120H0z" />
            <path fill="#002664" d="M210 0h60v480h-60z" />
            <path fill="#002664" d="M0 210h640v60H0z" />
        </svg>
    );
}

export function AmericanFlag({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-us"
            viewBox="0 0 640 480"
            className={className}
        >
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path
                stroke="#fff"
                strokeWidth="37"
                d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
            />
            <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
            <marker id="us-a" markerHeight="30" markerWidth="30">
                <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
            </marker>
            <path
                fill="none"
                markerMid="url(#us-a)"
                d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
            />
        </svg>
    );
}
