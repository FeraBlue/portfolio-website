import {delay, motion, scale} from"framer-motion";
import {Prism as SyntaxHighlighter} from"react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const Hero = () => {
    return (
        <motion.section id="home"
         className="hero" 
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{ duration: 0.8, delay: 0.2}}
         >
            <div 
            className="hero-container">
                <motion.div className="hero-content"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                >
                    <motion.div className="hero-badge">
             <span>  👋 Xin chào! Mình là </span>
        </motion.div>
         <motion.h1
            className="glitch" 
            variants={fadeInUp}
            WhileHover={{scale:1.02}}
            > 
            FeraBlue
             </motion.h1>
             <motion.h2
             className="hero-subtitile"
             variants={fadeInUp}
             >
                Developer & Artist
             </motion.h2>
             <motion.p
             className="hero-description"
             variants={fadeInUp}
             >
                Mình là một Developer có kỹ năng về Unreal Engine và khả năng vẽ nghệ thuật 2D. Mình có thể xây dựng gameplay, animation, VFX trong Unreal Engine, đồng thời tự thiết kế concept art, UI, hoặc sprite 2D theo phong cách riêng.
             </motion.p>
            <motion.div
                className="cta-buttons"
                variants={staggerContainer}
                >
                <motion.a 
                href="#projects" 
                className="cta-primary"
                WhileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                >
                    {""}
                 View my Work
                 </motion.a>
                <motion.a 
                href="#contact" 
                className="cta-secondary"
                 WhileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                >
                    {""}
                 Contact Me
                 </motion.a>
                </motion.div> 
                <motion.div
                className="social-links"
                variants={staggerContainer}
                >
                    <motion.a href="https://www.facebook.com/nguyen.hong.quan.31832/" target="_blank">
                        <i className="fab fa-facebook"></i>
                    </motion.a>

                    <motion.a href="https://github.com/FeraBlue" target="_blank">
                        <i className="fab fa-github"></i>
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/fera-blue-51b7b12ab/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </motion.a>

                    <motion.a href="https://www.paypal.com/paypalme/FeraBlue" target="_blank">
                        <i className="fab fa-paypal"></i>
                    </motion.a>

                    <motion.a href="https://x.com/Fera__Blue" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </motion.a>
                    
                </motion.div>
                </motion.div>

                <motion.div className="hero-image-container"
                initial={{opacity: 0,x:50}}
                animate= {{opacity: 1, x:0}}
                transition={{duration:0.8, delay:0.4}}
                
                >
                    <div
                     className="code-display"
                     >
                            <SyntaxHighlighter 
                            language="javascript"
                            customStyle={{
                                margin: 0, 
                                padding: "2rem", 
                                height:"100%", 
                                borderRadius:"20px",
                                background: "rgba(30, 41, 59, 0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: 50,
                            }}
                            style={vscDarkPlus}>
                                {`const aboutMe: DeveloperProfile = {
  codename: "FeraBlue",
  origin: "🌍 Hanoi University of Mining and Geology",
  role: "Unreal Engine Enthusiast", "
  stack: {
    frameworks: ["Aseprite", "Clip Studio Paint", "Unreal Engine 5" ],
  },
  traits: [
    "Over Analyzer",
    "Creative Thinker",
    "Detail-Oriented",
    "dark mode advocate",

  ],
  missionStatement:
    "Turning imagination into playable art.",
  availability: "Available for hire",
};`}
                            </SyntaxHighlighter>

                    </div>
                          <motion.div className="floating-card" 
                          animate={{y:[0,-10,0], rotate: [0,2,0]}}
                          transition={{duration: 4, repeat: Infinity, ease:"easeInOut"}}
                          >
                            <div className="card-content">
                                <span className="card-icon">
                                    🎨 💻
                                </span >
                                <span className="card-text"> Hiện đang chuẩn bị đồ án</span>
                            </div>
                            </motion.div>          
                </motion.div>

            </div>
        </motion.section>
    );
};