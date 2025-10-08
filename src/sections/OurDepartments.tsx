import ESCC from "@/components/ESCC";
import DepartmentCard from "@/components/DepartmentCard";
import { departments } from "@/data/departments";

export default function OurDepartments() {
  return (
    <section className="screen py-24 center">
      <ESCC />
      
      <div className="container mx-auto">
        <h2 className="text-7xl font-bold font-permanent text-center mb-12 text-black">Our Departments</h2>

        <div className="mx-auto container w-[50vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <DepartmentCard
              key={index}
              title={department.title}
              description={department.description}
              image={department.image}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};
