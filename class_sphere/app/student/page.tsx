import { Metadata } from "next";
import StudentDashboard from "@/components/studentDashboard";

export const metadata: Metadata = {
    title: "Student Page"
}

const Test = () => {
    return  <StudentDashboard />   
}

export default Test;
