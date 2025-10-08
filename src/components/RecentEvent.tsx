import Image from "next/image";

type RecentEventProps = {
    image: string;
    title: string;
    date: string;
};

export default function RecentEvent({ image, title, date }: RecentEventProps) {
    return (
        <div className="relative rounded-xl overflow-hidden aspect-video w-[50vw]">
            <Image
                src={image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
            />
            <div className="bg-gradient-to-b from-transparent via-transparent/40 to-[#00C9FF] absolute inset-0"></div>
            <div className="absolute bottom-0 center col w-full py-8 font-lexend gap-4">
                <h2 className="font-bold text-6xl text-center">{title}</h2>
                <p className="font-bold">{date}</p>
            </div>
        </div>
    );
};