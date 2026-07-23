import { motion, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const Testimonial = ({ text = "", author = "", color = "" }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const quoteRef = useRef<HTMLQuoteElement | null>(null);
  const authorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInView && scope.current && quoteRef.current && authorRef.current) {
      animate([
        [scope.current, { width: "70%" }, { delay: 0.5, duration: 0.3, ease: "easeInOut" }],
        [scope.current, { height: "24rem" }, { duration: 0.3, ease: "easeInOut" }],
        [quoteRef.current, { opacity: 1 }, { duration: 0.5, at: "+0.5" }],
        [authorRef.current, { opacity: 1 }, { duration: 0.4 }]
      ]);
    }
  }, [isInView, animate, scope]);

  return (
    <div className="w-full min-h-screen h-96 px-4 py-8 2xl:inline-flex 2xl:flex-row justify-center items-center gap-7 overflow-hidden snap-start snap-always relative">
      <div ref={scope} className={`2xl:flex w-0 -z-10 bg-tc${color} rounded-2xl long-shadow-${color}-dark absolute transition-all top-1/2 border-tc${color}-dark border-4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0`}
      >
        <div className="2xl:flex-1 2xl:inline-flex gap-1 2xl:flex-col justify-center items-start p-6 2xl:px-16 2xl:py-8"
        >
          <q ref={quoteRef} className={`text-tc${color}-dark 2xl:text-4xl text-xl font-bold font-['Montserrat'] 2xl:leading-10 leading-5 tracking-tighter opacity-0`} dangerouslySetInnerHTML={{ __html: text || "Comment here" }}
          >
          </q>
        </div>
      </div>
      <div ref={authorRef} className={`2xl:w-1/2 w-full text-right justify-end text-tc${color}-dark 2xl:text-3xl text-xl font-extrabold font-['Montserrat'] leading-3 pt-8 absolute 2xl:bottom-20 bottom-40 2xl:right-80 -translate-y-1/2 px-16 py-8 mix-blend-multiply -z-10 opacity-0`}
      >
        — {author}
      </div>
    </div>
  );
};

export default Testimonial;
