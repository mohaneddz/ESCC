export default function ESCC({ variant, rotate }: { variant?: "primary" | "secondary" | "tertiary"; rotate?: number }) {
    const colors = [
        "text-primary-light",
        "text-primary-dark",
        "text-secondary-light",
        "text-secondary-dark",
        "text-tertiary-light",
        "text-tertiary-dark",
    ];

    const getColor = (variant: string | undefined) => {
        switch (variant) {
            case "primary":
                return colors[Math.floor(Math.random() * 2)];
            case "secondary":
                return colors[Math.floor(Math.random() * 2) + 2]; 
            case "tertiary":
                return colors[Math.floor(Math.random() * 2) + 4]; 
            default:
                return "text-secondary-dark";
        }
    };

    return (
        <h1
            className={`text-[20rem] md:text-[40rem] lg:text-[45rem] absolute font-black z-0 opacity-10 select-none ${getColor(variant)}`}
            style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
        >
            ESCC
        </h1>
    );
};
