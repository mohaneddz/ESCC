import { useState, useEffect } from "react";

import InputSelect from "@/components/auth/InputSelect";
import type { DepartmentPreferences } from "@/types/registration";

export default function DepartmentSelection({
    setDepartmentData,
}: {
    setDepartmentData?: (data: DepartmentPreferences) => void;
}) {
    const [department1, setDepartment1] = useState("");
    const [department2, setDepartment2] = useState("");
    const [department3, setDepartment3] = useState("");

    const departmentsList = [
        "Sports",
        "Culture",
        "Multimedia",
        "Design",
        "Relex",
        "Dev",
        "Marketing",
    ];

    // InputSelect expects options in the shape { title: string; value: string }
    const departmentOptions = departmentsList.map((d) => ({ title: d, value: d }));

    useEffect(() => {
        setDepartmentData?.({ department1, department2, department3 });
    }, [department1, department2, department3, setDepartmentData]);


    return (
        <div className="bg-white h-max z-10 flex flex-col items-center">

            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-400 text-center mb-8">
                Department Selection
            </h3>

            <div className="flex flex-col gap-4 w-full max-w-md">

                <InputSelect
                    value={department1}
                    onChange={(e) => setDepartment1(e.target.value)}
                    options={departmentOptions}
                    placeholder="Select your first choice"
                />
                <InputSelect
                    value={department2}
                    onChange={(e) => setDepartment2(e.target.value)}
                    options={departmentOptions}
                    placeholder="Select your second choice"
                />
                <InputSelect
                    value={department3}
                    onChange={(e) => setDepartment3(e.target.value)}
                    options={departmentOptions}
                    placeholder="Select your third choice"
                />

            </div>


        </div>
    );
}
