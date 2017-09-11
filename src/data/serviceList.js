import AerialImg from '../styles/green_layout.jpg';
import MappingImg from '../styles/mapping_course.jpg';
import CourseBuild from '../styles/course_build.jpg';
const serviceList = [
  {
    id: 1,
    name: "Property Consultation",
    price: "$149",
    details: "Let our seasoned GCM professionals come to you and survey your course. After a few hours consulting with our specialists, and you'll know why we're THE brand in the sand",
    imageUrl: MappingImg

},
  { id: 2,
    name: "Course Design",
    price: "$299",
    details: "Take it one step further with our landscape designers as they transform your dream layout into a reality",
    imageUrl: AerialImg
},
  {
    id: 3,
    name: "Bunkers as a Service",
    price: "$499",
    details: "Sit back, relax and let us do all the heavy lifting. From consultation, design and implementation, our all-inclusive package can't be beat!",
    imageUrl: CourseBuild
}
]

export default serviceList;
