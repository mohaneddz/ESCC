import Image from "next/image";

type RecentEventProps = {
    image: string;
    title: string;
    date: string;
};

export default function RecentEvent({ image, title, date }: RecentEventProps) {
    return (
        <div className="relative rounded-xl overflow-hidden aspect-video lg:w-[50vw] w-[90vw]">
            <Image
                src={image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
            />
            <div className="bg-gradient-to-b from-transparent via-transparent/40 to-[#00C9FF] absolute inset-0"></div>
            <div className="absolute bottom-0 center col w-full py-8 font-lexend gap-4">
                <h3 className="font-bold text-md lg:text-6xl text-center">{title}</h3>
                <p className="font-bold text-sm lg:text-2xl text-center">{date}</p>
            </div>
        </div>
    );
};