import ProjectsCard from "./projectsCard";
import { Arrow, homeImages } from "../image";

export default function ProjectsSection() {
  const [
    amazonOne,
    amazonTwo,
    amazonThree,
    appleOne,
    appleTwo,
    googleOne,
    googleTwo,
    joshuaGPTOne,
    joshuaGPTTwo,
    joshuaGPTThree,
    joshuaGPTFour,
    joshuaGPTFive,
    netflixOne,
    netflixTwo,
    netflixThree,
    netflixFour,
    spotifyOne,
    spotifyTwo,
    spotifyThree,
  ] = homeImages;

  return (
    <>
      <div className="text-center md:text-start">
        <p className="text-4xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
          PROJECTS
        </p>
        <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
      </div>
      <div className="mt-20 md:mt-40">
        <div className="inline md:flex justify-around items-center space-y-32 md:space-y-1">
          {" "}
          <div
            data-scroll
            data-scroll-speed="0.45"
            data-scroll-delay="0.0045"
            className="space-y-32"
          >
            <ProjectsCard
              imgSrc={spotifyThree}
              name="spotify"
              href="joshuaedo-spotify.vercel.app"
            />
            <ProjectsCard
              imgSrc={netflixTwo}
              name="netflix"
              href="joshuaedo-binge.vercel.app"
            />
            <ProjectsCard
              imgSrc={appleTwo}
              name="apple"
              href="apple-joshuaedo.vercel.app"
            />
          </div>
          <div
            data-scroll
            data-scroll-speed="0.90"
            data-scroll-delay="0.0090"
            className="space-y-32"
          >
            <ProjectsCard
              imgSrc={joshuaGPTFive}
              name="joshuaGPT"
              href="t.me/joshuaedo_bot"
            />
            <ProjectsCard
              imgSrc={googleTwo}
              name="google"
              href="joshuaedo-google.vercel.app"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-10 right-10 md:right-3 text-2xs md:text-sm max-w-[7rem] md:max-w-[10rem] text-right">
        <div>VIEW THE REST OF MY WORK</div>
      </div>
    </>
  );
}
