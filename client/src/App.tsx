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
import Opportunities from "./pages/job-seeker/opportunities/Opportunities.tsx";
import Submissions from "./pages/job-seeker/submissions/Submissions.tsx";
import Error from "./pages/error/Error.tsx";
import JobSeekerProfile from "./pages/job-seeker/profile/JobSeekerProfile.tsx";
import RegisterFormJobSeeker from "./pages/register/RegisterFormJobSeeker.tsx";
import RegisterUser from "./pages/register/RegisterUser.tsx";
import RegisterFormCompany from "./pages/register/RegisterFormCompany.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/job-seeker" element={<JobSeeker/>}>
            <Route path="" element={<HomeHero/>}/>
            <Route path="opportunities" element={<Opportunities/>}/>
            <Route path="submissions" element={<Submissions/>}/>
            <Route path="profile" element={<JobSeekerProfile/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}>
            <Route path="job-seeker" element={<RegisterFormJobSeeker/>}/>
            <Route path="" element={<RegisterUser/>}/>
            <Route path="company" element={<RegisterFormCompany/>}/>
          </Route>
          <Route path="/admin" element={<Admin/>}>
            <Route path="" element={<Stats/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="job-seekers" element={<JobSeekerSection/>}>
              <Route path="" element={<JobSeekers/>}/>
              <Route path=":id" element={<JobSeekerDetail/>}/>
            </Route>
            <Route path="companies" element={<Companies/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
