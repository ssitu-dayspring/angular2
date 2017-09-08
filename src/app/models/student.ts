export interface Student
{
    name: string;
    school: string;
}

export interface HighSchoolStudent extends Student
{
    grade: string;
    numAPClasses: number;
}

export interface CollegeStudent extends Student
{
    major: string;
    year: string;
    tuition: number;
}

export interface Students
{
    highSchool: HighSchoolStudent[];
    college: CollegeStudent[];
}