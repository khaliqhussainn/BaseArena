import React, { useRef, useEffect } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import main from "../assets/logo.png";
import { Rings } from "./design/Header";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageRef = useRef(null);

  // Floating animation for bubbles
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouseX.set(x);
      mouseY.set(y);

      const rect = imageRef.current.getBoundingClientRect();
      const imgX = clientX - rect.left;
      const imgY = clientY - rect.top;
      const rotateX = ((imgY - rect.height / 2) / rect.height) * 20;
      const rotateY = ((imgX - rect.width / 2) / rect.width) * 20;

      imageRef.current.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (imageRef.current) {
      imageRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (imageRef.current) {
        imageRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const backgroundX = useTransform(mouseX, [0, 1], [-20, 20]);
  const backgroundY = useTransform(mouseY, [0, 1], [-20, 20]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  // Enhanced Particle component with bubble effect
  const Bubble = ({ delay = 0, size = "small" }) => {
    const sizeClasses = {
      small: "w-2 h-2",
      medium: "w-3 h-3",
      large: "w-4 h-4",
    };

    return (
      <motion.div
        className={`absolute ${sizeClasses[size]} rounded-full bg-gradient-to-r from-[#0969DD]/20 to-[#04B4FF]/20 backdrop-blur-sm`}
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: [-20, -40],
          opacity: [0, 1, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden perspective-1000">
      {/* Enhanced background effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#0969DD_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-black via-black/95 to-[#0969DD]/20">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #0969DD 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #0969DD 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, #0969DD 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, #0969DD 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Bubble effects */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Bubble
          key={i}
          delay={i * 0.2}
          size={i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <Rings />

      <div className="container relative z-10 mx-auto pt-20 pb-20 max-xs:pt-4">
        <div className="flex gap-12 items-center">
          <motion.div
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-custom font-bold leading-tight text-left pt-20 xs:pt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text inline-block"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Base Arena is Here!
              </motion.span>
              <br />
              <span className="text-[#0969DD] inline-block mt-2 bg-gradient-to-r from-[#0969DD] to-[#04B4FF] bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: ["The Only AI App", "You Need", "In Crypto"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="px-8 py-4 rounded-lg bg-[#0969DD]/10 text-white border border-[#0969DD]/30 hover:bg-[#0969DD]/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Launch dApp</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0969DD]/20 to-[#04B4FF]/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Logo Container */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative group"
              animate={floatingAnimation}
            >
              <motion.img
                ref={imageRef}
                src={main}
                alt="Main illustration"
                className="max-w-lg rounded-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              />
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 50%, #0969DD 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 50%, #04B4FF 0%, transparent 70%)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              {/* Floating particles around logo */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#0969DD] rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;