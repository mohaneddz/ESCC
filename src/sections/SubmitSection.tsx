import React, { useMemo, useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from '@/components/ui/button';
import type {
    DepartmentPreferences,
    MainFormData,
    MotivationFormData,
} from "@/types/registration";

interface SubmitSectionProps {
    mainData: MainFormData;
    departmentData: DepartmentPreferences;
    motivationData: MotivationFormData;
    onSubmit: () => void;
    canSubmit: boolean;
    isSubmitting: boolean;
    hasApplied: boolean;
}

const SubmitSection: React.FC<SubmitSectionProps> = ({
    mainData,
    departmentData,
    motivationData,
    onSubmit,
    canSubmit,
    isSubmitting,
    hasApplied,
}) => {
    const [mainOpen, setMainOpen] = useState(false);
    const [deptOpen, setDeptOpen] = useState(false);
    const [motivOpen, setMotivOpen] = useState(false);
    const isMainComplete = useMemo(() => (
        mainData.firstName.trim() !== "" &&
        mainData.lastName.trim() !== "" &&
        mainData.email.trim() !== "" &&
        mainData.phone.trim() !== "" &&
        mainData.school.trim() !== "" &&
        mainData.year.trim() !== ""
    ), [mainData]);

    const isDepartmentsComplete = useMemo(() => (
        departmentData.department1.trim() !== "" &&
        departmentData.department2.trim() !== "" &&
        departmentData.department3.trim() !== ""
    ), [departmentData]);

    const isMotivationsComplete = useMemo(() => (
        motivationData.choice1.expectations.trim() !== ""
    ), [motivationData]);

    const allComplete = useMemo(
        () => isMainComplete && isDepartmentsComplete && isMotivationsComplete,
        [isMainComplete, isDepartmentsComplete, isMotivationsComplete]
    );

    const renderFieldStatus = (label: string, value: string) => {
        const isFilled = value.trim() !== "";
        return (
            <li className={isFilled ? "text-tertiary-dark" : "text-red-600"}>
                {label}: {isFilled ? "Filled" : "Not Filled"}
            </li>
        );
    };

    const motivationKeys = ["choice1", "choice2", "choice3"] as const;

    return (
        <div className="bg-white h-max z-10 flex flex-col items-center p-6 overflow-y-auto">

            <h3 className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-400 text-center mb-8">
                Submit Your Application
            </h3>

            <div className="mb-6 w-full max-w-md overflow-y-auto">

                <div className="space-y-4 overflow-y-auto max-h-70">

                    <div className={isMainComplete ? "text-tertiary-dark" : "text-red-600"}>
                        <Collapsible open={mainOpen} onOpenChange={setMainOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${mainOpen ? 'rotate-180' : ''}`} />
                                Main Information: {isMainComplete ? "Complete" : "Incomplete"}
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

                    <div className={isDepartmentsComplete ? "text-tertiary-dark" : "text-red-600"}>
                        <Collapsible open={deptOpen} onOpenChange={setDeptOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${deptOpen ? 'rotate-180' : ''}`} />
                                Department Selection: {isDepartmentsComplete ? "Complete" : "Incomplete"}
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

                    <div className={isMotivationsComplete ? "text-tertiary-dark" : "text-red-600"}>
                        <Collapsible open={motivOpen} onOpenChange={setMotivOpen}>
                            <CollapsibleTrigger className="flex items-center cursor-pointer gap-2 w-full text-left text-sm md:text-lg hover:bg-gray-100 p-2 rounded font-semibold">
                                <ChevronDown className={`w-4 h-4 transition-transform ${motivOpen ? 'rotate-180' : ''}`} />
                                Motivations: {isMotivationsComplete ? "Complete" : "Incomplete"}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 pl-6">
                                {motivationKeys.map((choiceKey, index) => {
                                    const choice = motivationData[choiceKey];
                                    return (
                                        <div key={choiceKey} className="mb-2">
                                            <h6 className="font-medium">Choice {index + 1}:</h6>
                                            <ul className="list-disc list-inside ml-4 space-y-1">
                                                {renderFieldStatus("Work", choice.work)}
                                                {renderFieldStatus("Experience", choice.experience)}
                                                {renderFieldStatus("Expectations", choice.expectations)}
                                            </ul>
                                        </div>
                                    );
                                })}
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
                className={`mt-4 ${(!allComplete || !canSubmit) ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={onSubmit}
                disabled={!allComplete || !canSubmit}
            >
                {isSubmitting ? "Submitting..." : hasApplied ? "Submitted" : "Submit"}
            </Button>
        </div>
    );
};

export default SubmitSection;
