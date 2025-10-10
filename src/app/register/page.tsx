"use client";

import { useCallback, useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import CarousalNavigation from "@/components/auth/CarousalNavigation";

import BecomeMember from "@/sections/BecomeMember";
import MotivationSection from "@/sections/MotivationSection";
import DepartmentSelection from "@/sections/DepartmentSelection";
import SubmitSection from "@/sections/SubmitSection";
import ThankYou from "@/sections/ThankYou";

export default function page() {

    const [api, setApi] = useState<CarouselApi>();
    const [currPage, setCurrPage] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);
    const [isRegistered, setIsRegistered] = useState<boolean | null>(null);

    const [mainData, setMainData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "ensia",
        year: "1",
    });

    const [departmentData, setDepartmentData] = useState({
        department1: "",
        department2: "",
        department3: "",
    });

    const [motivationData, setMotivationData] = useState({
        choice1: {
            work: "",
            experience: "",
            expectations: "",
        },
        choice2: {
            work: "",
            experience: "",
            expectations: "",
        },
        choice3: {
            work: "",
            experience: "",
            expectations: "",
        },
    });

    useEffect(() => {
        const cookieExists = document.cookie.includes("registered=true");
        setIsRegistered(cookieExists);
    }, []);

    useEffect(() => {
        if (!api) return;

        setTotalSteps(api.scrollSnapList().length);
        setCurrPage(api.selectedScrollSnap());

        const handleSelect = () => setCurrPage(api.selectedScrollSnap());
        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = useCallback(() => api?.scrollNext(), [api]);
    const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

    return (
        <main className="relative bg-primary/10 md:h-screen w-screen h-full md:py-12 center col">

            <div className={`relative bg-white z-10 md:rounded-xl md:w-max md:h-max h-screen w-screen` + (isRegistered ? " center" : "")}>

                <div className="z-1 md:p-8 pt-8 rounded-xl center col gap-8 w-max">

                    {isRegistered === null ? null : isRegistered ? (
                            <ThankYou />
                    ) : (
                        <>
                            <Carousel className="flex justify-center max-w-screen md:max-h-120 md:max-w-2xl max-h-screen overflow-y-hidden" opts={{ align: "center", loop: true }} setApi={setApi}>
                                <CarouselContent>

                                    <CarouselItem className="full flex justify-center items-start">
                                        <BecomeMember setMainData={setMainData} />
                                    </CarouselItem>

                                    <CarouselItem className="full flex justify-center items-start">
                                        <DepartmentSelection setDepartmentData={setDepartmentData} />
                                    </CarouselItem>

                                    <CarouselItem className="full flex justify-center items-start">
                                        <MotivationSection setMotivationData={setMotivationData} />
                                    </CarouselItem>

                                    <CarouselItem className="full flex justify-center items-start">
                                        <SubmitSection
                                            mainData={mainData}
                                            departmentData={departmentData}
                                            motivationData={motivationData}
                                        />
                                    </CarouselItem>

                                </CarouselContent>
                            </Carousel>

                            {/* Navigation Controls */}
                            <CarousalNavigation
                                scrollPrev={scrollPrev}
                                scrollNext={scrollNext}
                                scrollTo={scrollTo}
                                current={currPage}
                                count={totalSteps}
                            />
                        </>
                    )}

                </div>

            </div>
        </main>
    );
};