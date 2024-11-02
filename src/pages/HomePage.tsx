import ourmission from "../assets/ourmission.jpg";
import appDownloadImage from "../assets/appDownload.png";
import ourtask from "../assets/ourtask.jpg";
import helcopter from "../assets/helcopter.png";
import luxuryreal from "../assets/luxuryreal.jpg";
import realstate2 from "../assets/realstate2.jpg";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import accommodation2 from "../assets/accommodation2.jpg";
import gym from "../assets/gym.jpg";
import tg1 from "../assets/tg1.jpg";

const HomePage = () => {
  return (
    // bg-[#1c5a7c]
    <div className=" flex flex-col gap-12">
      <div className="bg-[#52646d] rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          The Egyptian Peacekeeping Operations Training Center
        </h1>
        <span className=" text-white text-xl ">International Organization</span>
      </div>

      {/*for the crad*/}

      <div className="bg-cover bg-center hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-3/5">
          <img
            src={ourmission}
            alt="Description"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6 text-center md:text-left">
          <h2 className="text-white font-bold text-3xl tracking-tighter ">
            Our Mission
          </h2>{" "}
          <div className="w-20 border-b-2 border-white my-2"></div>
          <p className=" text-white  text-1xl tracking-tighter">
            To conduct training, studies, research and specialized programs for
            peacekeepers in all aspects of peacekeeping operations in order to
            improve the effectiveness of their contributions and cope with the
            evolving field requirements.
          </p>
        </div>
      </div>

      <div className="bg-cover bg-center hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6 text-center md:text-left">
          <h2 className="text-white font-bold text-3xl tracking-tighter">
            Our Task
          </h2>
          <div className="w-20 border-b-2 border-white my-2"></div>
          <p className="text-white text-1xl tracking-tighter">
            To qualify national and foreign male/female personnel in order to
            improve the effectiveness of their contributions at peacekeeping
            missions. ◄ To organize different events (training courses,
            seminars, conferences, and workshops…etc.), in coordination with
            national institutions, different countries and international /
            regional organizations to enhance the role of the police component
            in peacekeeping missions. ◄ To conduct researches on challenges
            facing peacekeeping missions and means of overcoming them. ◄ To
            cooperate with national, regional and international counterparts,
            exchange expertise in order to enhance the performance of
            peacekeepers.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-3/5">
          <img
            src={ourtask}
            alt="Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-cover bg-center hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={helcopter}
            alt="Description"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6 text-center md:text-left">
          <h2 className="text-white font-bold text-3xl tracking-tighter ">
            Training Topics
          </h2>{" "}
          <div className="w-20 border-b-2 border-white my-2"></div>
          <p className=" text-white  text-1xl tracking-tighter">
            EPOTC conducts peacekeeping training, studies and research, as
            follows: • Qualifying police personnel for participating in
            Peacekeeping operations. • Protection of Civilians in armed
            conflicts. • Disarmament, Demobilization and Reintegration (DDR) of
            (ex-combatants/fighters) at mission host countries . • Capacity
            building of local police at mission host countries. • Political and
            ethnic conflict analysis and mediation. • Preventing radicalization
            and extremism leading to terrorism. • Monitoring elections at
            mission host countries. • Correctional institutions reform and
            security. • Countering illegal immigration, human trafficking, and
            transnational organized crime. • Qualifying female personnel for
            participating in Peacekeeping operations. • Improvised Explosive
            Devices (IEDs) detection. • First aid in police operations.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className=" text-white font-bold text-3xl tracking-tighter">
          Download EPOTC App for following up !
        </span>

        <img src={appDownloadImage} />
      </div>
    </div>
  );
};

export default HomePage;
