import { FC } from "react"
import { motion, useScroll } from "framer-motion"

import "./Scroll.scss"

export const Scroll: FC = () => {
    
    const { scrollYProgress } = useScroll()

    return (
        <motion.div className="progress__bar" style={{scaleX: scrollYProgress}} />
    )
}