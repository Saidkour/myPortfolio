import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { useSelector } from "react-redux";
import { loadSlim } from "tsparticles-slim";

const AppParticals = () => {
  const dark = useSelector((state) => state.dark);
  const [showParticles, setShowParticles] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute w-full h-full top-0 left-0 z-[-1] max-w-full"
          options={{
            background: {
              color: {
                value: "transaprent",
              },
            },
            fpsLimit: 120,
            fullScreen: { enable: false },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
              fullScreen: { enable: false },
            },
            particles: {
              color: {
                // value: `${dark ? "#ffffff" : "#000000"}`,
                value: ["#1A1A1A", "#F5F5F5", "#707070", "#845EC2"],
              },
              links: {
                color: `${dark ? "#ffffff" : "#000000"}`,
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 0.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default AppParticals;
