import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/layout/Footer.tsx";
import Login from "./pages/login/Login.tsx";
import Admin from "./pages/admin/Admin.tsx";
import Stats from "./pages/admin/stats/Stats.tsx";
import Users from "./pages/admin/users/Users.tsx";
import JobSeekerSection from "./pages/admin/job-seekers/JobSeekerSection.tsx";
import JobSeekers from "./pages/admin/job-seekers/JobSeekers.tsx";
import JobSeekerDetail from "./pages/admin/job-seekers/JobSeekerDetail.tsx";
import Companies from "./pages/admin/companies/Companies.tsx";
import Register from "./pages/register/Register.tsx";
import Home from "./pages/Home.tsx";
import JobSeeker from "./pages/job-seeker/JobSeeker.tsx";
import HomeHero from "./pages/shared/HomeHero.tsx";
import Requests from "./pages/job-seeker/opportunities/Requests.tsx";
import Applications from "./pages/job-seeker/applications/Applications.tsx";
import Error from "./pages/error/Error.tsx";
import JobSeekerProfile from "./pages/job-seeker/profile/JobSeekerProfile.tsx";
import RegisterFormJobSeeker from "./pages/register/RegisterFormJobSeeker.tsx";
import RegisterUser from "./pages/register/RegisterUser.tsx";
import RegisterFormCompany from "./pages/register/RegisterFormCompany.tsx";
import Payments from "./pages/admin/payemnts/Payments.tsx";
import CompanyHero from "./pages/company/CompanyHero.tsx";
import Company from "./pages/company/Company.tsx";
import ApplicationsReceived from "./pages/company/applications/ApplicationsReceived.tsx";
import MakeVacancy from "./pages/company/make-vacancy/MakeVacancy.tsx";
import VacanciesByCompany from "./pages/company/vacancies/VacanciesByCompany.tsx";
import CompanyProfile from "./pages/company/profile/CompanyProfile.tsx";
import 'react-quill/dist/quill.snow.css';
import ApplicationDetails from "./pages/company/applications/ApplicationDetails.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/*job seeker*/}
          <Route path="/job-seeker" element={<JobSeeker/>}>
            <Route path="" element={<HomeHero/>}/>
            <Route path="requests" element={<Requests/>}/>
            <Route path="applications" element={<Applications/>}/>
            <Route path="profile" element={<JobSeekerProfile/>}/>
          </Route>
          {/*company logged in*/}
          <Route path="/company" element={<Company/>}>
            <Route path="" element={<CompanyHero/>}/>
            <Route path="vacancies" element={<VacanciesByCompany/>}/>
            <Route path="make-vacancy" element={<MakeVacancy/>}/>
            <Route path="requests" element={<Requests/>}/>
            <Route path="applications" element={<ApplicationsReceived/>}/>
            <Route path="profile" element={<CompanyProfile/>}/>
            <Route path="application" element={<ApplicationDetails/>}/>
          </Route>
          {/*logins and register*/}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}>
            <Route path="job-seeker" element={<RegisterFormJobSeeker/>}/>
            <Route path="" element={<RegisterUser/>}/>
            <Route path="company" element={<RegisterFormCompany/>}/>
          </Route>
          {/*admin*/}
          <Route path="/admin" element={<Admin/>}>
            <Route path="" element={<Stats/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="job-seekers" element={<JobSeekerSection/>}>
              <Route path="" element={<JobSeekers/>}/>
              <Route path=":id" element={<JobSeekerDetail/>}/>
            </Route>
            <Route path="companies" element={<Companies/>}/>
            <Route path="payments" element={<Payments/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
