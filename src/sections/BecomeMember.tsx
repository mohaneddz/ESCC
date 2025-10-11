"use client";

import Input from "@/components/auth/InputText";
import InputSelect from "@/components/auth/InputSelect";
import React from "react";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {verifyFirstName, verifyLastName, verifyEmail, verifyPhone} from "@/utils/verify";
import type { MainFormData } from "@/types/registration";

export default function BecomeMember({setMainData}: {setMainData?: (data: MainFormData) => void}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("ensia");
    const [year, setYear] = useState("1");

    const schoolsList = [
        { title: "ENSIA", value: "ensia" },
        { title: "NHSM", value: "nhsm" },
        { title: "NHSAST", value: "nhsast" },
        { title: "NSNN", value: "nsnn" },
        { title: "ESI", value: "esi" },
        { title: "Other", value: "other" },
    ];

    const yearsList = [
        { title: "1st Year", value: "1" },
        { title: "2nd Year", value: "2" },
        { title: "3rd Year", value: "3" },
        { title: "4th Year", value: "4" },
        { title: "5th Year", value: "5" },
        { title: "Alumni", value: "alumni" },
    ];

    useEffect(() => {
        setMainData?.({
            firstName,
            lastName,
            email,
            phone,
            school,
            year,
        });
    }, [firstName, lastName, email, phone, school, year, setMainData]);

    return (
        <motion.section
            layout
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="bg-white h-max w-full max-w-[70vw] z-10 center col gap-4"
        >
            <h3 className="text-3xl md:text-4xl font-bold colored mb-4">Become a Member</h3>
            <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                verifier={verifyEmail}
                necessary
            />
            <Input
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                verifier={verifyFirstName}
                necessary
            />
            <Input
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                verifier={verifyLastName}
                necessary
            />
            <Input
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                verifier={verifyPhone}
                necessary
            />
            <div />
            <div />
            <InputSelect
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                options={schoolsList}
            />
            <InputSelect
                value={year}
                onChange={(e) => setYear(e.target.value)}
                options={yearsList}
            />


        </motion.section>
    );
};
