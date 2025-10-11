import ESCC from "@/components/ESCC";
import DepartmentCard from "@/components/DepartmentCard";
import { departments } from "@/data/departments";
import AOS from "@/components/AOS";

export default function OurDepartments() {
  return (
    <AOS
      as="section"
      className="relative w-screen h-full md:screen pt-20 md:py-24 center my-8 md:my-24"
      id="departments"
      animation="fade-up"
      offset={160}
    >
      <AOS as="div" animation="zoom-in" className="absolute inset-0">
        <ESCC />
      </AOS>

      <div className="container mx-auto">
        <AOS
          as="h2"
          animation="fade-up"
          className="text-7xl font-bold font-permanent text-center mb-12 text-black"
        >
          Our Departments
        </AOS>

        <div className="mx-auto container w-[80vw] md:w-[55vw] xl:w-[45vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <AOS
              as="div"
              animation="fade-up"
              delay={index * 80}
              key={department.title}
            >
              <DepartmentCard
                title={department.title}
                description={department.description}
                image={department.image}
              />
            </AOS>
          ))}
        </div>
      </div>
    </AOS>
  );
}
