import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const Testimonial = ({text = "", author = "", color = ""}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: 1 }, { duration: 0.5 });
  }, [animate, scope]);

  return (
    <div className="w-full min-h-screen h-96 px-4 py-8 inline-flex flex-row justify-center items-center gap-7 overflow-hidden snap-start snap-always relative">
      <motion.div className={`flex w-1/2 -z-10 bg-tc${color} rounded-2xl long-shadow-${color}-dark absolute   top-1/2 border-tc${color}-dark border-4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 opacity-0`}
        initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}>
        <motion.div className="flex-1 inline-flex gap-1  flex-col justify-center items-start px-16 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}>
          <motion.q className={`text-tc${color}-dark text-4xl font-bold font-['Montserrat'] leading-10 tracking-tighter`} dangerouslySetInnerHTML={{ __html: text || "Comment here" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}>
          </motion.q>
        </motion.div>
      </motion.div>
      <motion.div className={`w-1/2 text-right justify-end text-tc${color}-dark text-3xl font-extrabold font-['Montserrat'] leading-3 pt-8 absolute bottom-20 right-80 -translate-y-1/2 px-16 py-8 mix-blend-multiply -z-10`} 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}>
        — {author}
      </motion.div>
    </div>
  );
};

export default Testimonial;
