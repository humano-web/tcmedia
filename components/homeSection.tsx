"use client";
import { motion } from "motion/react";
import wowCircle from "@/components/wowCircle";

const tester = ({ style = "row", title = "Bring Your Ideas To Life With TCMedia!", desc = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.", color = "green", main = "", fpos = "top", tplace = "right", lposx = "center", rposx = "center", lposy = "center", rposy = "center", ltext = false, rtext = false, wowpos = "topleft", lani = "top", rani = "bottom", wowText = "Text here!" }) => {

    return (

        <div className={`w-full relative min-h-screen px-12 2xl:pt-52 pb-12 flex flex-col 2xl:inline-flex justify-start items-center bg-center bg-cover snap-start snap-always`} style={{ backgroundImage: main ? `url(${main})` : undefined }}>
            <div className={`absolute z-10 ${wowpos === "topleft" ? "left-40" : wowpos === "topright" ? "right-40" : wowpos === "bottomleft" ? "bottom-40 left-40" : wowpos === "bottomright" ? "bottom-40 right-40" : wowpos === "centerleft" ? "left-40 top-1/2 -translate-y-1/2" : wowpos === "centerright" ? "right-40 top-1/2 -translate-y-1/2" : ""} origin-center `}>
                {wowCircle(wowText, color, false, 0)}
            </div>

            {style === "row" ?
                <div className={`w-full tc${color}-tbg p-8 absolute left-0 top-0 h-full flex flex-row gap-6 `}>
                    <motion.div className={`w-1/2 text-tc${color} h-full pt-38 flex justify-start items-${lposy === "top" ? "start" : lposy === "bottom" ? "end" : "center"} text-${ltext ? "left" : "right"}`}>

                        {tplace == "left" && style == "row" ? <motion.div className="text-7xl 2xl:text-9xl font-black font-['Montserrat_Alternates'] leading-24 tracking-tighter"
                            initial={{ opacity: 0, [lani === "top" || lani === "bottom" ? "y" : "x"]: lani === "left" || lani === "top" ? 50 : -50 }}
                            whileInView={{ opacity: 1, [lani === "top" ? "y" : "x"]: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.8 }}

                        >{title}</motion.div> :
                            <motion.div className="justify-start text-lg 2xl:text-3xl font-medium font-['Montserrat'] leading-4 2xl:leading-8 tracking-normal"
                                initial={{ opacity: 0, [lani === "top" || lani === "bottom" ? "y" : "x"]: lani === "left" || lani === "top" ? 50 : -50 }}
                                whileInView={{ opacity: 1, [lani === "top" || lani === "bottom" ? "y" : "x"]: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ amount: 0.8 }}
                            >{desc}</motion.div>
                        }
                    </motion.div>
                    <div className={`w-1/2 text-tc${color} min-h-full pt-38 flex items-${rposy === "top" ? "start" : rposy === "bottom" ? "end" : "center"} text-${rtext ? "right" : "left"}`}>
                        {tplace == "right" && style == "row" ? <motion.div className="text-7xl 2xl:text-9xl font-black font-['Montserrat_Alternates'] leading-24 tracking-tighter"
                            initial={{ opacity: 0, [rani === "top" || rani === "bottom" ? "y" : "x"]: rani === "left" || rani === "top" ? 50 : -50 }}
                            whileInView={{ opacity: 1, [rani === "top" || rani === "bottom" ? "y" : "x"]: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.8 }}
                        >{title}</motion.div> :
                            <motion.div className="justify-start text-lg 2xl:text-3xl font-medium font-['Montserrat'] leading-4 2xl:leading-8 tracking-normal"
                                initial={{ opacity: 0, [rani === "top" || rani === "bottom" ? "y" : "x"]: rani === "left" || rani === "top" ? 50 : -50 }}
                                whileInView={{ opacity: 1, [rani === "top" || rani === "bottom" ? "y" : "x"]: 0 }}

                                transition={{ duration: 0.5 }}
                                viewport={{ amount: 0.8 }}
                            >{desc}</motion.div>
                        }
                    </div>
                </div>
                :
                <div className={`w-full tc${color}-tbg p-8 absolute left-0 top-0 h-full flex flex-col gap-6 justify-${tplace === "top" ? "start" : tplace === "bottom" ? "end" : "center"} items-${tplace === "left" ? "start" : tplace === "right" ? "end" : "center"}`}>
                    <motion.div className={` flex w-1/2 h-1/4 text-tc${color} text-7xl 2xl:text-9xl font-black font-['Montserrat_Alternates'] leading-24 tracking-tighter items-${lposy === "top" ? "start" : lposy === "bottom" ? "end" : "center"} text-${lposx === "left" ? "left" : lposx === "right" ? "right" : "center"}`}
                        initial={{ opacity: 0, [lani === "top" || lani === "bottom" ? "y" : "x"]: lani === "left" || lani === "top" ? -50 : 50 }}
                        whileInView={{ opacity: 1, [lani === "top" || lani === "bottom" ? "y" : "x"]: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ amount: 0.8 }}
                    >{title}</motion.div>
                    <motion.div className={`flex w-1/2 h-1/4 text-tc${color} text-lg 2xl:text-3xl font-medium font-['Montserrat'] leading-4 2xl:leading-8 tracking-normal items-${rposy === "top" ? "start" : rposy === "bottom" ? "end" : "center"} text-${rposx === "left" ? "left" : rposx === "right" ? "right" : "center"}`}
                        initial={{ opacity: 0, [lani === "top" || lani === "bottom" ? "y" : "x"]: lani === "left" || lani === "top" ? 50 : -50 }}
                        whileInView={{ opacity: 1, [lani === "top" || lani === "bottom" ? "y" : "x"]: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ amount: 0.8 }}
                    >{desc}</motion.div>
                </div>
            }

        </div>
    );
}

export default tester;
