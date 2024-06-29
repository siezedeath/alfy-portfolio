import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-life order-2 xl:order-none">
            <span className="text-xl">Quantitative Researcher</span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-accent">Alfayed Alam</span>
            </h1>
            <p>
            I love working with data and uncovering interesting insights, 
            especially in finance. I'm proficient in various programming 
            languages and technologies, which helps me extract valuable 
            conclusions from complex datasets.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              variant="outline" 
              size = "lg"
              className = "uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-priamry hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
