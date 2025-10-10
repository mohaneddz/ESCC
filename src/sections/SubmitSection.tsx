import React, { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from '@/components/ui/button';

import { postData } from "@/server/post";

interface SubmitSectionProps {
    mainData: any;
    departmentData: any;
    motivationData: any;
}

const SubmitSection: React.FC<SubmitSectionProps> = ({ mainData, departmentData, motivationData }) => {
    const [mainOpen, setMainOpen] = useState(false);
    const [deptOpen, setDeptOpen] = useState(false);
    const [motivOpen, setMotivOpen] = useState(false);
    const [hasApplied, setHasApplied] = useState(false);

    const isMainComplete = () => {
        return (
            mainData.firstName !== "" &&
            mainData.lastName !== "" &&
            mainData.email !== "" &&
            mainData.phone !== "" &&
            mainData.school !== "" &&
            mainData.year !== ""
        );
    };

    const isDepartmentsComplete = () => {
        return (
            departmentData.department1 !== "" &&
            departmentData.department2 !== "" &&
            departmentData.department3 !== ""
        );
    };

    const isMotivationsComplete = () => {
        return (
            motivationData.choice1.expectations !== ""
        );
    };

    const allComplete = isMainComplete() && isDepartmentsComplete() && isMotivationsComplete();

    const handleSubmit = () => {
        if (allComplete && !hasApplied) {
            postData({ mainData, departmentData, motivationData })
                .then((response) => {
                    document.cookie = "registered=true; path=/; max-age=31536000";
                    setHasApplied(true);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const renderFieldStatus = (label: string, value: string) => (
        <li className={value !== "" ? "text-green-600" : "text-red-600"}>
            {label}: {value !== "" ? "Filled" : "Not Filled"}
        </li>
    );

    return (
        <div className="bg-white h-max z-10 flex flex-col items-center p-6 overflow-y-auto">

            <h3 className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-400 text-center mb-8">
                Submit Your Application
            </h3>

            <div className="mb-6 w-full max-w-md overflow-y-auto">

                <div className="space-y-4 overflow-y-auto max-h-70">

                    <div className={isMainComplete() ? "text-green-600" : "text-red-600"}>
                        <Collapsible open={mainOpen} onOpenChange={setMainOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${mainOpen ? 'rotate-180' : ''}`} />
                                Main Information: {isMainComplete() ? "Complete" : "Incomplete"}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 pl-6">
                                <ul className="list-disc list-inside space-y-1">
                                    {renderFieldStatus("First Name", mainData.firstName)}
                                    {renderFieldStatus("Last Name", mainData.lastName)}
                                    {renderFieldStatus("Email", mainData.email)}
                                    {renderFieldStatus("Phone", mainData.phone)}
                                    {renderFieldStatus("School", mainData.school)}
                                    {renderFieldStatus("Year", mainData.year)}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    <div className={isDepartmentsComplete() ? "text-green-600" : "text-red-600"}>
                        <Collapsible open={deptOpen} onOpenChange={setDeptOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${deptOpen ? 'rotate-180' : ''}`} />
                                Department Selection: {isDepartmentsComplete() ? "Complete" : "Incomplete"}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 pl-6">
                                <ul className="list-disc list-inside space-y-1">
                                    {renderFieldStatus("Department 1", departmentData.department1)}
                                    {renderFieldStatus("Department 2", departmentData.department2)}
                                    {renderFieldStatus("Department 3", departmentData.department3)}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>

                    <div className={isMotivationsComplete() ? "text-green-600" : "text-red-600"}>
                        <Collapsible open={motivOpen} onOpenChange={setMotivOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${motivOpen ? 'rotate-180' : ''}`} />
                                Motivations: {isMotivationsComplete() ? "Complete" : "Incomplete"}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 pl-6">
                                {[1, 2, 3].map((choice) => (
                                    <div key={choice} className="mb-2">
                                        <h6 className="font-medium">Choice {choice}:</h6>
                                        <ul className="list-disc list-inside ml-4 space-y-1">
                                            {renderFieldStatus("Work", motivationData[`choice${choice}`].work)}
                                            {renderFieldStatus("Experience", motivationData[`choice${choice}`].experience)}
                                            {renderFieldStatus("Expectations", motivationData[`choice${choice}`].expectations)}
                                        </ul>
                                    </div>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
            </div>
            {hasApplied && (
                <p className="text-gray-400 font-semibold mb-4">You already applied!</p>
            )}
            <Button
                variant="primary"
                className={`mt-4 ${!allComplete || hasApplied ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleSubmit}
                disabled={!allComplete || hasApplied}
            >
                Submit
            </Button>
        </div>
    );
};

export default SubmitSection;
