export interface UpcomingEvent {
    show?: boolean;
    image: string;
    title: string;
    date: string;
    description: string;
}

export const upcomingEvents: UpcomingEvent[] = [
    {
        show: true,
        image: "/image/events/the_hunt.avif",
        title: "The Hunt",
        date: "To be announced",
        description: "One day event, a new version of treasure hunt! prepare yourself for a day full of fun and excitement."
    },
    {
        image: "",
        title: "",
        date: "",
        description: ""
    },
    {
        image: "",
        title: "",
        date: "",
        description: ""
    }
];
