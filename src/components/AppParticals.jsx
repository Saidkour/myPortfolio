import React, { useCallback } from "react";
import Particles from "react-particles";
import { useSelector } from "react-redux";
import { loadSlim } from "tsparticles-slim";

const AppParticals = () => {
  const dark = useSelector((state) => state.dark);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
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
            value: `${dark ? "#ffffff" : "#000000"}`,
          },
          links: {
            color: `${dark ? "#ffffff" : "#000000"}`,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
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
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AppParticals;


