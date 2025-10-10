import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
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

    useEffect(() => {
        setDepartmentData?.({ department1, department2, department3 });
    }, [department1, department2, department3, setDepartmentData]);

    const handleSelect = (dept: string, col: number) => {
        if (col === 1) setDepartment1(dept);
        if (col === 2) setDepartment2(dept);
        if (col === 3) setDepartment3(dept);
    };

    const isChecked = (dept: string, col: number) => {
        if (col === 1) return department1 === dept;
        if (col === 2) return department2 === dept;
        if (col === 3) return department3 === dept;
        return false;
    };

    return (
        <div className="bg-white h-max z-10 flex flex-col items-center">

            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-400 text-center mb-8">
                Department Selection
            </h3>
            
            <div className="bg-[#e6faff] p-4 md:p-8 pt-4 rounded-xl relative overflow-hidden">

                <div className="relative">

                    {/* Vertical line */}
                    <div className="absolute left-[5rem] md:left-[9rem] top-4 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-green-400 rounded-full" />

                    <table className="min-w-max border-separate md:border-spacing-x-6 border-spacing-x-2 border-spacing-y-3 relative z-10">
                        <thead>
                            <tr className="text-left text-sm md:text-lg font-semibold">
                                <th className="">           </th>
                                <th className="text-sm">#1</th>
                                <th className="text-sm">#2</th>
                                <th className="text-sm">#3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departmentsList.map((dept) => (
                                <tr key={dept} className="md:text-lg text-xs">
                                    <td className="font-bold md:pr-10 pr-4">{dept}</td>
                                    {[1, 2, 3].map((col) => (
                                        <td key={col} className="text-center">
                                            <Checkbox
                                                checked={isChecked(dept, col)}
                                                onCheckedChange={() => handleSelect(dept, col)}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
