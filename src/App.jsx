import React from "react";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import logo from "../src/assets/images/logo.png";
function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="overflow-hidden relative h-dvh">
        <img src={logo} alt="" className=" fixed top-10 left-10 z-20 w-48" />
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#07143d",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
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
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 120,
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
        )}
        <section className="coming-soon h-dvh w-full flex items-center justify-center flex-col gap-5 bg-transparent px-2">
          <h1 className="font-Quantify">Coming Soon</h1>
          <p className="font-Quantify tracking-[2px]">
            Reinventing Blockchain with Proof of Training, AI Intelligence, and
            Quantum Security
          </p>
          <p className="font-Quantify tracking-[2px] fixed bottom-10">
            ©Qryptum.com 2024. All Right Reserved
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
