import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//dans les options de  particles, pleins d'images qui bougent dans tous les sens

export default function Background(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                detectRetina: true,
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push"
                    },
                    onDiv: {
                      elementId: "repulse-div",
                      enable: false,
                      mode: "repulse"
                    },
                    onHover: {
                      enable: true,
                      mode: "bubble",
                      parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10
                      }
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 1,
                      size: 40,
                      speed: 3
                    },
                    connect: {
                      distance: 80,
                      lineLinked: {
                        opacity: 0.5
                      },
                      radius: 60
                    },
                    grab: {
                      distance: 400,
                      lineLinked: {
                        opacity: 1
                      }
                    },
                    push: {
                      quantity: 4
                    },
                    remove: {
                      quantity: 2
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    }
                  }
                },
                particles: {
                  color: {
                    value: "#ffffff"
                  },
                  lineLinked: {
                    blink: false,
                    color: "#000",
                    consent: false,
                    distance: 150,
                    enable: false,
                    opacity: 0,
                    width: 0
                  },
                  rotate: {
                    value: 0,
                    random: true,
                    direction: "clockwise",
                    animation: {
                      enable: true,
                      speed: 5,
                      sync: false
                    }
                  },
                  move: {
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800
                    },
                    limit: 0,
                    value: 80
                  },
                  opacity: {
                    animation: {
                      enable: false,
                      minimumValue: 0.1,
                      speed: 1,
                      sync: false
                    },
                    random: false,
                    value: 0.8
                  },
                  shape: {
                    character: {
                      fill: false,
                      font: "Verdana",
                      style: "",
                      value: "*",
                      weight: "400"
                    },
                    image: [
                      
                      {
                        src: "./images-background/VIH.png",
                        width: 32,
                        height: 32
                      },
                      {
                        src: "./images-background/gonorhée.png",
                        width: 32,
                        height: 32
                      },
                      {
                        src: "./images-background/HepatiteB.png",
                        width: 32,
                        height: 32
                      },
                      {
                        src: "./images-background/HerpesGenital.png",
                        width: 32,
                        height: 32
                      },
                      {
                        src: "./images-background/HPV.png",
                        width: 32,
                        height: 32
                      },
                      {
                        src: "./images-background/Syphilis.png",
                        width: 32,
                        height: 32
                      }
                    ],
                    polygon: {
                      nb_sides: 5
                    },
                    stroke: {
                      color: "#000000",
                      width: 0
                    },
                    type: "image"
                  },
                  size: {
                    animation: {
                      enable: false,
                      minimumValue: 0.1,
                      speed: 40,
                      sync: false
                    },
                    random: false,
                    value: 16
                  }
                },
                polygon: {
                  draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                  },
                  move: {
                    radius: 10
                  },
                  scale: 1,
                  type: "none",
                  url: ""
                }}
            }
        />
    );
};