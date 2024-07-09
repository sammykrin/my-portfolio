import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello <span>I&apos;m</span> <br /><span className="text-accent">Samuel Olamilehin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Frontend Developer, Cyber Security Enthusiast, Auto Dealer & Gadgets Dealer
            </p>
            {/*btn & socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8"> 
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2">
                  <a href="/assets/resume/OLAMILEHIN SAMUEL OLAMIDE's resume.pdf" 
                    target="_blank" 
                    download="OLAMILEHIN SAMUEL OLAMIDE's resume.pdf" >download cv</a>
                {/* <span>Download CV</span> */}
                <FiDownload className="text-xl"/> 
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div> 
      <Stats />
    </section>
  );
}

export default Home;

