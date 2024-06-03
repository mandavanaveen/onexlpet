import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Scrollinfo from "./Scrollinfo";
import "@fontsource/playfair-display";
import "./App.css";
import opaw from "./orangepaw.svg";
import vpaw from "./violetpaw.svg";
import bone from "./bone.svg";
import gpaw from "./greenpawoutline.svg";
import tag from "./tag.svg";
import ppaw from "./ppaw.svg";
import ball from "./ballpaw.svg";
import petlunch from "./petlunch.svg";
import paw from "./paw.svg";
import ppaw2 from "./ppaw2.svg";
// import bglgreen from "./images/bglgreen.png";

function Home() {
  const [scrollCount, setScrollCount] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const navigate = useNavigate();

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
  const controls12 = useAnimation();
  const controls13 = useAnimation();
  const controls14 = useAnimation();
  const controls15 = useAnimation();
  const controls16 = useAnimation();
  const controls17 = useAnimation();
  const controls18 = useAnimation();
  const controls19 = useAnimation();
  const controls20 = useAnimation();
  const textControl1 = useAnimation();
  const textControl2 = useAnimation();

  const forwardAnimations = [
    [
      {
        control: controls2,
        animation: { y: 54, transition: { duration: 0.5 } },
      },
      {
        control: controls4,
        animation: { y: -156, transition: { duration: 0.5 } },
      },
      {
        control: textControl1,
        animation: { x: -425, transition: { duration: 0.5 } },
      },
      {
        control: controls6,
        animation: { transition: { duration: 0.5 }, opacity: [0.5, 0] },
      },
      {
        control: controls7,
        animation: {
          x: 100,
          y: -150,
          rotate: 0,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls8,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls9,
        animation: {
          x: [-400, 0],
          y: [400, 0],
          transition: { duration: 0.4 },
          opacity: 1,
          scale: 0.8,
        },
      },
      {
        control: controls10,
        animation: {
          x: 30,
          y: 30,
          scale: 0.9,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls11,
        animation: {
          y: -70,
          scale: 0.9,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls12,
        animation: {
          x: [-100, -200],
          y: [500, 640],
          rotate: [-59, 0],
          scale: 1.4,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls13,
        animation: {
          x: [450, -35],
          y: [-200, -500],
          scale: 0.8,
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls14,
        animation: {
          x: [-150, -30],
          y: [-400, -500],
          rotate: [-16, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
    ],
    [
      {
        control: controls1,
        animation: { x: 64, transition: { duration: 0.5 } },
      },
      {
        control: controls2,
        animation: { x: -54, transition: { duration: 0.5 } },
      },
      {
        control: controls3,
        animation: { y: -141, transition: { duration: 0.5 } },
      },
      // {
      //   control: textControl1,
      //   animation: { x: -200, transition: { duration: 0.5 } },
      // },
      {
        control: textControl1,
        animation: { x: -680, transition: { duration: 0.5 } },
      },
      {
        control: controls7,
        animation: {
          x: [300, 400],
          y: [400, 500],
          scale: [0.7, 0.8],
          rotate: [131, 0],
          transition: { duration: 0.4 },
          opacity: [0.8, 1],
        },
      },
      {
        control: controls8,
        animation: {
          x: [-100, 190],
          y: [-300, -550],
          rotate: 0,
          transition: { duration: 0.4 },
          opacity: 0.6,
        },
      },
      {
        control: controls9,
        animation: {
          x: 150,
          y: 100,
          rotate: 0,
          scale: 0.4,
          transition: { duration: 0.4 },
          opacity: 0,
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
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls12,
        animation: {
          scale: 1.4,
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls13,
        animation: {
          x: [50, 0],
          y: [-650, -550],
          scale: 0.8,
          rotate: [-39, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls14,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls15,
        animation: {
          x: [-100, 105],
          y: [-100, 180],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: controls16,
        animation: {
          x: [-1100, 0],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: controls17,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0.7,
        },
      },
      {
        control: controls19,
        animation: {
          rotate: [-30, -30],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls18,
        animation: {
          transition: { duration: 0.4 },
          opacity: 3,
        },
      },
    ],
    [
      {
        control: controls1,
        animation: { x: 180, rotate: -7.36, transition: { duration: 0.5 } },
      },
      {
        control: controls2,
        animation: { x: -170, rotate: 5.26, transition: { duration: 0.5 } },
      },
      {
        control: controls3,
        animation: { x: 115, rotate: 8.87, transition: { duration: 0.5 } },
      },
      {
        control: controls4,
        animation: { x: -110.42, rotate: -4.53, transition: { duration: 0.5 } },
      },
      {
        control: controls5,
        animation: { scale: 1.1, transition: { duration: 0.5 } },
      },
      {
        control: textControl1,
        animation: { x: -1500, transition: { duration: 0.5 } },
      },
      {
        control: textControl2,
        animation: { y: -500, transition: { duration: 0.5 } },
      },
      {
        control: controls13,
        animation: {
          y: -650,
          transition: { duration: 0.4 },
        },
      },
      {
        control: controls8,
        animation: {
          x: 170,
          y: -550,
          transition: { duration: 0.4 },
        },
      },
      {
        control: controls15,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls7,
        animation: {
          x: [800, 500],
          y: [450],
          scale: [0.7],
          transition: { duration: 0.4 },
          opacity: 0.7,
        },
      },
      {
        control: controls10,
        animation: {
          x: [200, 200],
          y: [-150, -150],
          transition: { duration: 0.4 },
          opacity: 1,
          scale: [0.5, 0.5],
        },
      },
      {
        control: controls17,
        animation: {
          x: [0, 60],
          y: [20, 70],
          rotate: 32,
          transition: { duration: 0.4 },
          opacity: 0.7,
          scale: 1.1,
        },
      },
      {
        control: controls19,
        animation: {
          x: [0, 60],
          y: [20, 70],
          rotate: 10,
          transition: { duration: 0.4 },
          opacity: 0.9,
          scale: 0.9,
        },
      },
      {
        control: controls18,
        animation: {
          y: -50,
          transition: { duration: 0.4 },
          opacity: 1,
          scale: 1,
        },
      },
      {
        control: controls20,
        animation: {
          x: [-150, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: controls16,
        animation: {
          x: [0, -300],
          y: [0, -50],
          transition: { duration: 0.2 },
          opacity: [1, 0],
        },
      },
    ],
    [
      {
        control: controls5,
        animation: {
          x: -325,
          y: 161.5,
          rotate: -13,
          transition: { duration: 0.5 },
        },
      },
      {
        control: controls1,
        animation: {
          x: 140,
          y: 30,
          rotate: -7.9,
          transition: { duration: 0.5 },
        },
      },
      {
        control: controls3,
        animation: {
          x: 225,
          y: -255,
          rotate: -5.65,
          transition: { duration: 0.4 },
        },
      },
      {
        control: controls2,
        animation: {
          x: -68,
          y: 345,
          rotate: 20.61,
          transition: { duration: 0.4 },
        },
      },
      {
        control: controls4,
        animation: {
          x: -40,
          y: -164,
          rotate: 11.82,
          transition: { duration: 0.4 },
        },
      },
      {
        control: controls18,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls20,
        animation: {
          x: [0, -100],
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls6,
        animation: {
          x: [400, 50],
          y: [450, 450],
          transition: { duration: 0.4 },
          opacity: 0.5,
          scale: [0.9],
        },
      },
      {
        control: controls17,
        animation: {
          x: [100, 250],
          y: [0, -420],
          transition: { duration: 0.4 },
          opacity: 0.5,
          scale: [0.9],
        },
      },
      {
        control: controls19,
        animation: {
          x: [50],
          y: [100, -230],
          rotate: -70,
          transition: { duration: 0.4 },
          opacity: 0.7,
          scale: 1.1,
        },
      },
      {
        control: controls10,
        animation: {
          x: [-370],
          y: [-150],
          transition: { duration: 0.4 },
          opacity: [0, 1],
        },
      },
      {
        control: controls11,
        animation: {
          x: [100, -100],
          y: [-300, -50],
          transition: { duration: 0.4 },
          opacity: 0.7,
          scale: [0.6, 0.6],
        },
      },
      {
        control: controls13,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls8,
        animation: {
          transition: { duration: 0.4 },
          opacity: 0,
        },
      },
      {
        control: controls14,
        animation: {
          x: [100, -150],
          y: [0],
          rotate: [36, 0],
          transition: { duration: 0.4 },
          opacity: 1,
        },
      },
      {
        control: textControl2,
        animation: { y: -370, transition: { duration: 0.5 } },
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
          if (newCount === 5) {
            navigate("/categories", { state: { initialScrollCount: 1 } });
            return 0;
          }
          return newCount;
          // return prev; // Return the previous value if newCount is out of bounds
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="absolute h-[780px]">
      <Scrollinfo />
      <motion.div className="overflow-y-hidden">
        <motion.img
          className="absolute mt-[88px] ml-[685.58px] "
          src="./onexlpet/bglgreen.png"
          alt="image1"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls1}
          style={{ zIndex: 4 }}
        />

        <motion.img
          className="absolute mt-[36px] ml-[1187px]"
          src="./onexlpet/bgblue.png"
          alt="image2"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls2}
          style={{ zIndex: 2 }}
        />

        <motion.img
          className="absolute mt-[412px] ml-[750px]"
          src="./onexlpet/bgyellow.png"
          alt="image3"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls3}
          style={{ zIndex: 3 }}
        />

        <motion.img
          className="absolute mt-[464px] ml-[1070px]"
          src="./onexlpet/bggreen.png"
          alt="image4"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls4}
          style={{ zIndex: 1 }}
        />

        <motion.img
          className="absolute mt-[89px] ml-[886px]"
          src="./onexlpet/bgorange.png"
          alt="image5"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls5}
          style={{ zIndex: 5 }}
        />

        <motion.img
          className="absolute mt-[180px] ml-[135px] "
          src={opaw}
          alt="opaw"
          initial={{ x: 0, y: 0, scale: 0.4, opacity: 0.5 }}
          animate={controls6}
          style={{ zIndex: 0 }}
        />

        <motion.img
          className="absolute mt-[203px] ml-[163px]"
          src={vpaw}
          alt="vpaw"
          initial={{ x: 0, y: 0, rotate: 131.96, scale: 0.7, opacity: 0 }}
          animate={controls7}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[566px] ml-[229px]"
          src={vpaw}
          alt="vpaw"
          initial={{ x: 0, y: 0, scale: 0.7, opacity: 0.5 }}
          animate={controls8}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[531px] ml-[390px]"
          src={opaw}
          alt="opaw"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls9}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[192px] ml-[500px]"
          src={gpaw}
          alt="gpaw0"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
          animate={controls10}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[726px] ml-[500px]"
          src={gpaw}
          alt="gpaw1"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
          animate={controls11}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[67px] ml-[375px]"
          src={bone}
          alt="bone1"
          initial={{ x: 0, y: 0, scale: 0.9, opacity: 1 }}
          animate={controls12}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[741px] ml-[122px]"
          src={bone}
          alt="bone2"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
          animate={controls13}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[540px] ml-[523px] "
          src={tag}
          alt="tag1"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 0.9 }}
          animate={controls14}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[29px] ml-[523px]"
          src={tag}
          alt="tag2"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
          animate={controls15}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[743px] ml-[1082px]"
          src={ppaw}
          alt="ppaw"
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
          animate={controls16}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[492px] ml-[322px]"
          src={ball}
          alt="ball"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
          animate={controls17}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[505px] ml-[335px]"
          src={paw}
          alt="paw"
          initial={{ x: 0, y: 0, rotate: -30, scale: 0.6, opacity: 0 }}
          animate={controls19}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[725px] ml-[100px]"
          src={petlunch}
          alt="petlunch"
          initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
          animate={controls18}
          style={{ zIndex: 0 }}
        />
        <motion.img
          className="absolute mt-[672px] ml-[962px]"
          src={ppaw2}
          alt="ppaw2"
          initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
          animate={controls20}
          style={{ zIndex: 0 }}
        />
      </motion.div>

      <motion.p
        className="mt-[302px] w-[1277px] ml-[107px] max-h-[128px] text-8xl font-bold playflair leading-[127.97px] tracking-[5.4px] z-10"
        initial={{ x: 0 }}
        animate={textControl1}
      >
        Taking care for your pets!
      </motion.p>

      <motion.p
        className="absolute mt-[310px] ml-[145px] w-[700px] max-h-[106px] text-[40px] font-bold playflair leading-[53.32px] tracking-[3px] z-0 text-center"
        initial={{ y: -1000 }}
        animate={textControl2}
        // style={{ position: "absolute", top: 0, left: 0 }}
      >
        Get various services personalized <br /> for your pets like
      </motion.p>
    </div>
  );
}

export default Home;
