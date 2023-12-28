import HomeHero from "./shared/HomeHero.tsx";
import GuestHeader from "../components/layout/GuestHeader.tsx";

const Home = () => {
  return (
    <>
      <GuestHeader/>
      <HomeHero/>
    </>
  );
};

export default Home;