import { useState, useEffect } from "react";
import Input from "@/components/auth/InputText";

export default function MotivationSection({ setMotivationData }: { setMotivationData?: (data: { choice1: { work: string, experience: string, expectations: string }, choice2: { work: string, experience: string, expectations: string }, choice3: { work: string, experience: string, expectations: string } }) => void }) {
    const [choice1, setChoice1] = useState({ work: "", experience: "", expectations: "" });
    const [choice2, setChoice2] = useState({ work: "", experience: "", expectations: "" });
    const [choice3, setChoice3] = useState({ work: "", experience: "", expectations: "" });

    useEffect(() => {
        setMotivationData?.({ choice1, choice2, choice3 });
    }, [choice1, choice2, choice3, setMotivationData]);

    return (
        <div className="bg-white z-10 col full gap-4 w-full h-screen max-h-[screen] md:max-h-120 overflow-y-auto md:px-24 px-8 ">
            <div>
                <h4 className="colored font-bold text-2xl md:text-4xl mb-8 mt-6 text-nowrap">First choice motivation</h4>
                <div className="col gap-4">
                    <Input placeholder="Describe your experience if any" value={choice1.experience} onChange={(e) => setChoice1({ ...choice1, experience: e.target.value })} />
                    <Input placeholder="Link to your previous work" value={choice1.work} onChange={(e) => setChoice1({ ...choice1, work: e.target.value })} />
                    <Input placeholder="What are your expectations from this department?" value={choice1.expectations} onChange={(e) => setChoice1({ ...choice1, expectations: e.target.value })} necessary />
                </div>
            </div>
            <div>
                <h4 className="colored font-bold text-2xl md:text-4xl my-8 text-nowrap">Second choice motivation</h4>
                <div className="col gap-4">
                    <Input placeholder="Describe your experience if any" value={choice2.experience} onChange={(e) => setChoice2({ ...choice2, experience: e.target.value })} />
                    <Input placeholder="Link to your previous work" value={choice2.work} onChange={(e) => setChoice2({ ...choice2, work: e.target.value })} />
                    <Input placeholder="What are your expectations from this department?" value={choice2.expectations} onChange={(e) => setChoice2({ ...choice2, expectations: e.target.value })} />
                </div>
            </div>
            <div>
                <h4 className="colored font-bold text-2xl md:text-4xl my-8 text-nowrap">Third choice motivation</h4>
                <div className="col gap-4">
                    <Input placeholder="Describe your experience if any" value={choice3.experience} onChange={(e) => setChoice3({ ...choice3, experience: e.target.value })} />
                    <Input placeholder="Link to your previous work" value={choice3.work} onChange={(e) => setChoice3({ ...choice3, work: e.target.value })} />
                    <Input placeholder="What are your expectations from this department?" value={choice3.expectations} onChange={(e) => setChoice3({ ...choice3, expectations: e.target.value })} />
                </div>
            </div>
        </div>
    );
}
