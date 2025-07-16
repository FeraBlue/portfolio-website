import { motion } from "framer-motion";
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
export const Projects = () => {
    return <motion.section
    id="projects"
    className="projects"
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    viewport={{once: true}}
    transition={{duration: 0.6}}

    >
        <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        >
             My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Screenshot_5.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> 2D Platformer</h3>
          <p>
            Game platformer 2D sống động, xây dựng bằng Unreal Engine
          </p>
          <div className="project-tech">
        <span>Unreal Engine</span>
        <span> PaperZD</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Illustration 93.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Character Design</h3>
          <p>
        Thiết kế nhân vật với phong cách rõ ràng và dễ nhận diện, phù hợp cho nhiều thể loại nội dung sáng tạo.
          </p>
          <div className="project-tech">
            <span>Clip Studio Paint</span>
            <span> Aseprite</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/image.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Sprite Animation</h3>
          <p>
            Thiết kế chuyển động cho nhân vật 2D, đảm bảo tự nhiên, rõ ràng và phù hợp với cơ chế game.
          </p>
          <div className="project-tech">
                <span>Unreal Engine</span>
                <span> PaperZD</span>
          </div>
        </motion.div>
      </motion.div>

           
      

    </motion.section>;
};