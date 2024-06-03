import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Scrollinfo from "./Scrollinfo";
import { useLocation } from "react-router-dom";
import "@fontsource/playfair-display";
import "./App.css";
import opaw from "./orangepaw.svg";
import vpaw from "./violetpaw.svg";
import bone from "./bone.svg";
import gdpaw from "./gpaw2.svg";
import palmlogo from "./palmlogo.svg";
import petlunch from "./petlunch.svg";
import ppaw2 from "./ppaw.svg";
import tag from "./tag.svg";
import gwdbluebg from "./images/gwdbluebg.png";
import cwdorangebg from "./images/cwdorangebg.png";
import gwdgreenbg from "./images/gwdgreenbg.png";
import mwdfairbg from "./images/mwdfairbg.png";

function Categories() {
  const location = useLocation();
  const initialScrollCount = location.state?.initialScrollCount || 0;
  const [scrollCount, setScrollCount] = useState(initialScrollCount);
  const [scrollDirection, setScrollDirection] = useState(initialScrollCount);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
  const controls10 = useAnimation();
  const controls11 = useAnimation();
  const textControl1 = useAnimation();
  const btControl1 = useAnimation();
  const btControl2 = useAnimation();
  const catControl1 = useAnimation();
  const catControl2 = useAnimation();
  const catControl3 = useAnimation();
  const catControl4 = useAnimation();
  const paracontrols1 = useAnimation();
  const paracontrols2 = useAnimation();
  const paracontrols3 = useAnimation();
  const paracontrols4 = useAnimation();

  const forwardAnimations = [
    [
      {
        control: controls1,
        animation: {
          x: [500, 0],
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: controls5,
        animation: {
          x: [50, 0],
          y: [-25, 0],
          rotate: [15, 15],
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: controls6,
        animation: {
          x: -20,
          y: 20,
          rotate: [116, 20],
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: controls7,
        animation: {
          transition: { duration: 0.2 },
          opacity: [0, 1],
        },
      },
      {
        control: controls8,
        animation: {
          x: [-250, 0],
          transition: { duration: 0.2 },
          opacity: [0, 1],
        },
      },
      {
        control: textControl1,
        animation: {
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: btControl2,
        animation: {
          x: [-500, 0],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: paracontrols1,
        animation: {
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: btControl1,
        animation: {
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
    ],
    [
      {
        control: controls1,
        animation: {
          x: [0, 500],
          y: [0, 800],
          rotate: [0, -200],
          transition: { duration: 0.4 },
          opacity: [1, 0],
        },
      },
      {
        control: controls2,
        animation: {
          x: [500, 0],
          y: [-300, 0],
          rotate: [165, 0],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: controls5,
        animation: {
          transition: { duration: 0.3 },
          opacity: 0,
        },
      },
      {
        control: controls6,
        animation: {
          x: [-200, -150],
          y: [40, 20],
          rotate: [116, 20],
          scale: 0.7,
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: controls7,
        animation: {
          x: [-450, -350],
          y: [0, -100],
          rotate: [200, 0],
          transition: { duration: 0.2 },
          scale: [0.2, 0.8],
        },
      },
      {
        control: controls8,
        animation: {
          transition: { duration: 0.2 },
          opacity: 0,
        },
      },
      {
        control: controls9,
        animation: {
          transition: { duration: 0.2 },
          opacity: 1,
        },
      },
      {
        control: btControl1,
        animation: {
          y: 20,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: btControl2,
        animation: {
          x: -66,
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: catControl1,
        animation: {
          backgroundColor: "transparent",
          color: "black",
          transition: { duration: 1 },
        },
      },
      {
        control: catControl2,
        animation: {
          backgroundColor: "#124C5F",
          color: "white",
          transition: { duration: 1 },
        },
      },
      {
        control: controls10,
        animation: {
          x: [-200, 0],
          y: [20, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: paracontrols1,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: paracontrols2,
        animation: {
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
    ],
    [
      {
        control: controls2,
        animation: {
          x: [0, 500],
          y: [0, 500],
          rotate: [0, -165],
          transition: { duration: 0.4 },
          opacity: [1, 0],
        },
      },
      {
        control: controls3,
        animation: {
          x: [500, 0],
          y: [-300, 0],
          rotate: [165, 0],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: catControl2,
        animation: {
          backgroundColor: "transparent",
          color: "black",
          transition: { duration: 1 },
        },
      },
      {
        control: catControl3,
        animation: {
          backgroundColor: "#124C5F",
          color: "white",
          transition: { duration: 1 },
        },
      },
      {
        control: controls9,
        animation: {
          x: -380,
          y: -180,
          transition: { duration: 0.2 },
          opacity: 1,
        },
      },
      {
        control: controls10,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls11,
        animation: {
          x: [-10, 0],
          y: [-10, 0],
          rotate: [26, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: paracontrols2,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: paracontrols3,
        animation: {
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: btControl1,
        animation: {
          y: -5,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls6,
        animation: {
          x: [300, 400],
          y: [80, 100],
          rotate: [20, 20],
          scale: 0.7,
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: controls7,
        animation: {
          x: [-500, -650],
          y: [-20, -20],
          rotate: [300, 0],
          transition: { duration: 0.2 },
          scale: [0.5, 0.8],
        },
      },
    ],
    [
      {
        control: controls3,
        animation: {
          x: [0, 500],
          y: [0, 500],
          rotate: [0, -165],
          transition: { duration: 0.4 },
          opacity: [1, 0],
        },
      },
      {
        control: controls4,
        animation: {
          x: [500, 0],
          y: [-300, 0],
          rotate: [165, 0],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: controls6,
        animation: {
          x: [400, 370],
          rotate: [20, 20],
          scale: 0.7,
          transition: { duration: 0.3 },
          opacity: [0, 1],
        },
      },
      {
        control: catControl3,
        animation: {
          backgroundColor: "transparent",
          color: "black",
          transition: { duration: 1 },
        },
      },
      {
        control: controls8,
        animation: {
          x: [-930, -930],
          y: [-150, -150],
          scale: [0.6, 0.6],
          transition: { duration: 0.2 },
          opacity: [0.3, 0.3],
        },
      },
      {
        control: controls9,
        animation: {
          transition: { duration: 0.2 },
          opacity: 0,
        },
      },
      {
        control: controls10,
        animation: {
          x: [-1200, -1150],
          y: [-10, 0],
          rotate: [-200, 0],
          transition: { duration: 0.2 },
          opacity: 1,
          scale: [0, 0.7],
        },
      },
      {
        control: controls11,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: btControl1,
        animation: {
          y: -4,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: catControl4,
        animation: {
          backgroundColor: "#124C5F",
          color: "white",
          transition: { duration: 1 },
        },
      },
      {
        control: paracontrols3,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: paracontrols4,
        animation: {
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls7,
        animation: {
          x: [500, 550],
          y: [20, 20],
          transition: { duration: 0.2 },
          scale: [0.5, 0.8],
        },
      },
    ],
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      const deltaY = event.deltaY;
      if (deltaY !== 0) {
        setScrollDirection(deltaY > 0 ? 1 : -1);

        setScrollCount((prev) => {
          const newCount = prev + (deltaY > 0 ? 1 : -1);
          if (newCount >= 0 && newCount <= forwardAnimations.length) {
            return newCount;
          }
          return prev; // Return the previous value if newCount is out of bounds
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [forwardAnimations.length]);

  useEffect(() => {
    const animations = scrollDirection === 1 && forwardAnimations;
    const currentAnimations = animations[scrollCount - 1];
    console.log("currentAnimations", animations[scrollCount - 1]);
    if (currentAnimations) {
      currentAnimations.forEach(({ control, animation }) => {
        control.start(animation);
      });
    }
  }, [scrollCount, scrollDirection]);

  return (
    <div className="absolute w-[1476px] h-[695px]">
      <Scrollinfo />
      <motion.div className="overflow-y-hidden">
        <motion.img
          className="absolute mt-[36px] ml-[729px]"
          src={gwdbluebg}
          alt="image1"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls1}
        />
        <motion.img
          className="absolute mt-[26px] ml-[729px]"
          src={cwdorangebg}
          alt="image2"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls2}
        />
        <motion.img
          className="absolute mt-[36px] ml-[729px]"
          src={gwdgreenbg}
          alt="image3"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls3}
        />
        <motion.img
          className="absolute mt-[36px] ml-[729px]"
          src={mwdfairbg}
          alt="image4"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls4}
        />
        <motion.img
          className="absolute mt-[652px] ml-[124px]"
          src={bone}
          alt="bone"
          initial={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
          animate={controls5}
        />
        <motion.img
          className="absolute mt-[556px] ml-[348px]"
          src={vpaw}
          alt="vpaw"
          initial={{ x: 0, y: 0, scale: 0.9, opacity: 0 }}
          animate={controls6}
        />
        <motion.img
          className="absolute mt-[657px] ml-[763px]"
          src={opaw}
          alt="opaw"
          initial={{ x: 0, y: 0, scale: 0.9, opacity: 0 }}
          animate={controls7}
        />
        <motion.img
          className="absolute mt-[657px] ml-[1313px]"
          src={gdpaw}
          alt="gpaw2"
          initial={{ x: 0, y: 0, scale: 0.9, opacity: 0 }}
          animate={controls8}
        />
        <motion.img
          className="absolute mt-[665px] ml-[750px]"
          src={petlunch}
          alt="petlunch"
          initial={{ x: 0, y: 0, scale: 0.5, rotate: 10, opacity: 0 }}
          animate={controls9}
        />
        <motion.img
          className="absolute mt-[651px] ml-[1295px]"
          src={ppaw2}
          alt="ppaw2"
          initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
          animate={controls10}
        />
        <motion.img
          className="absolute mt-[690px] ml-[1295px]"
          src={tag}
          alt="tag"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
          animate={controls11}
        />
      </motion.div>

      <motion.div
        className="playflair z-10 "
        initial={{ x: 0, opacity: 0 }}
        animate={textControl1}
      >
        <motion.p className="ml-[105px] mt-[23px] h-[23px] w-[215px] font-bold text-[40px] leading-[53.32px] tracking-[3px]">
          Categories
        </motion.p>
        <motion.div
          animate={paracontrols1}
          initial={{ x: 0, opacity: 0 }}
          className=" absolute font-roboto w-[667px] h-[217px] mt-[82px] ml-[115px] flex flex-col gap-[14px]"
        >
          <motion.p className=" font-bold text-2xl leading-[28px] tracking-[2px]">
            Pet Grooming
          </motion.p>
          <motion.p className="font-normal text-2xl leading-[28px] ">
            Pet grooming is the process of maintaining your pet’s <br />
            hygiene and enhancing their physical appearance, which
            <br />
            includes tasks like washing, brushing, trimming fur, and
            <br />
            clipping nail.
          </motion.p>
        </motion.div>

        <motion.div
          animate={paracontrols2}
          initial={{ x: 0, opacity: 0 }}
          className="absolute font-roboto w-[667px] h-[245] mt-[82px] ml-[115px] flex flex-col gap-[14px]"
        >
          <motion.p className=" font-bold text-2xl leading-[28px] tracking-[2px]">
            Pet Clinic
          </motion.p>
          <motion.p className="font-normal text-2xl leading-[28px] ">
            The pet clinic offers comprehensive veterinary services, <br />
            including medical consultations, vaccinations, and
            <br /> surgical procedures, ensuring the well-being of furry
            <br />
            companions. The clinic provides compassionate care
            <br /> and support to pets and their owners.
          </motion.p>
        </motion.div>

        <motion.div
          animate={paracontrols3}
          initial={{ x: 0, opacity: 0 }}
          className="absolute font-roboto w-[667px] h-[245] mt-[82px] ml-[115px] flex flex-col gap-[14px]"
        >
          <motion.p className=" font-bold text-2xl leading-[28px] tracking-[2px]">
            Pet Daycare
          </motion.p>
          <motion.p className="font-normal text-2xl leading-[28px] ">
            Pet daycare offers a safe and stimulating environment <br />
            for pets while their owners are away, providing
            <br /> companionship, exercise, and socialization <br />
            opportunities. Supervised by trained staff, pets engage
            <br />
          </motion.p>
        </motion.div>

        <motion.div
          animate={paracontrols4}
          initial={{ x: 0, opacity: 0 }}
          className="absolute font-roboto w-[667px] h-[245] mt-[82px] ml-[115px] flex flex-col gap-[14px]"
        >
          <motion.p className=" font-bold text-2xl leading-[28px] tracking-[2px]">
            Pet Training
          </motion.p>
          <motion.p className="font-normal text-2xl leading-[28px] ">
            Pet training encompasses teaching animals essential <br />
            behaviors and commands, fostering obedience and good <br />
            manners. Training sessions focus on positive
            <br /> reinforcement techniques, such as rewards and praise.
            <br />
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#C7E7E1] font-roboto font-medium text-base leading-[18px] text-[#124C5F] ml-[115px] mt-[255px] rounded-[5px] flex justify-center items-center w-[146px] h-[49px]"
        initial={{ x: 0, opacity: 0 }}
        animate={btControl1}
      >
        <motion.p>Get Started</motion.p>
      </motion.div>

      <motion.div
        className=" mt-[90px] w-[674px] h-[40px] flex gap-3 ml-[115px]"
        initial={{ x: 0, opacity: 0 }}
        animate={btControl2}
      >
        <motion.div
          className="flex items-center w-[176px]  rounded-[6px] font-roboto font-bold text-xl leading-[23px]"
          animate={catControl1}
          style={{ backgroundColor: "#124C5F", color: "#FFFFFF" }}
        >
          <motion.img className="w-38 h-10" src={palmlogo} alt="palmlogo" />
          <motion.p>Pet Grooming</motion.p>
        </motion.div>

        <motion.div
          className="flex items-center w-[143px] rounded-[6px] font-roboto font-bold text-xl leading-[23px]"
          animate={catControl2}
          style={{ backgroundColor: "transparent", color: "#000000" }}
        >
          <motion.img className="w-38 h-10" src={palmlogo} alt="palmlogo" />
          <motion.p>Pet Clinic</motion.p>
        </motion.div>
        <motion.div
          className="flex items-center w-[160px] rounded-[6px] font-roboto font-bold text-xl leading-[23px]"
          animate={catControl3}
          style={{ backgroundColor: "transparent", color: "#000000" }}
        >
          <motion.img className="w-38 h-10" src={palmlogo} alt="palmlogo" />
          <motion.p>Pet Daycare</motion.p>
        </motion.div>
        <motion.div
          className="flex items-center w-[159px]  rounded-[6px] font-roboto font-bold text-xl leading-[23px]"
          animate={catControl4}
          style={{ backgroundColor: "transparent", color: "#000000" }}
        >
          <motion.img className="w-38 h-10" src={palmlogo} alt="palmlogo" />
          <motion.p>Pet Training</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Categories;
