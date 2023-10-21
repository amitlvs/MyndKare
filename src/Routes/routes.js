import { classes } from "istanbul-lib-coverage"
import Class from "../Pages/Class/Class"
import Exam from "../Pages/Exam/Exam"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import PageNotFound from "../Pages/PageNotFound/PageNotFound"
import FAQ from "../Pages/Privacy/FAQ"
import PrivacyAndRefundPolicy from "../Pages/Privacy/PrivacyAndRefundPolicy"
import TermsAndCondition from "../Pages/Privacy/TermsAndCondition"
import Question from "../Pages/Question/Question"
import Report from "../Pages/Report/Report"
import School from "../Pages/School/School"
import SchoolResult from "../Pages/SchoolResult/SchoolResult"
import Section from "../Pages/Section/Section"
import Student from "../Pages/Student/Student"
import User from "../Pages/User/User"

const routes = [
    { path: "/", Component: Home },
    { path: "/school", Component: School },
    { path: "/schoolResult", Component: SchoolResult },
    { path: "/class", Component: Class },
    { path: "/section", Component: Section },
    { path: "/student", Component: Student },
    { path: "/exam", Component: Exam },
    { path: "/question", Component: Question },
    { path: "/report", Component: Report },
    { path: "/user", Component: User },
    { path: "/login", Component: Login },
    { path: "/privacy-and-refund-policy", Component: PrivacyAndRefundPolicy },
    { path: "/faq", Component: FAQ },
    { path: "/terms-and-condition", Component: TermsAndCondition },
    { path: "*", Component: PageNotFound },
]

export default routes