import FilteringCars from "@/components/FilteringCars";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Search />
      <FilteringCars />
    </>
  );
}
