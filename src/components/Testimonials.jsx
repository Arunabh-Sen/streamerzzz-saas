import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";
import { useState } from "react";

const Testimonials = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const testimonialVariants = {
        hidden: { opacity: 0, y: 30 }, // Slightly reduced initial Y offset
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Reduced delay for a snappier feel
                duration: 0.4, // Faster animation
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="testimonial">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div
                    className="text-center mb-12 border-t border-neutral-800"
                    initial={{ opacity: 0, y: -15 }} // Reduced initial offset for faster intro
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }} // Faster transition
                >
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                        {TESTIMONIALS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4">{TESTIMONIALS_CONTENT.sectionDescription}</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1, // Less delay for smoother appearance
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:cursor-pointer"
                >
                    {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={testimonialVariants}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{
                                filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(4px)" : "blur(0px)", // Less intense blur
                                boxShadow: hoveredIndex === index ? "0px 0px 25px rgba(255, 255, 255, 0.5)" : "none", // Stronger and instant glow
                            }}
                            transition={{ duration: 0, ease: "easeOut" }} // No delay in glow effect
                            className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10 transition-all duration-200"
                        >
                            <p className="mb-4 text-neutral-200">{review.review}</p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={review.image}
                                    alt={review.alt}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="text-sm font-bold text-white">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
