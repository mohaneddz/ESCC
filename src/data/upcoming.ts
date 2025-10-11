export interface UpcomingEvent {
    show?: boolean;
    open: boolean;
    image: string;
    title: string;
    date: string;
    description: string;
}

export const upcomingEvents: UpcomingEvent[] = [
    {
        show: true,
        open: false,
        image: "/image/events/the_hunt.avif",
        title: "The Hunt",
        date: "To be announced",
        description: "One day event, a new version of treasure hunt! prepare yourself for a day full of fun and excitement."
    },
    {
        image: "",
        open: false,
        title: "",
        date: "",
        description: ""
    },
    {
        image: "",
        open: false,        
        title: "",
        date: "",
        description: ""
    }
];
