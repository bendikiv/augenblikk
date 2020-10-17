import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Box, Text, Heading } from "@chakra-ui/core";
import { Image } from "./App";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface SlideshowProps {
  images: Image[];
}

export const Slideshow = ({ images }: SlideshowProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].url}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          height="100%"
        />
        <Heading position="absolute" zIndex="900" right="0" top="0" p="1rem">
          Augenblikk
        </Heading>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        zIndex="900"
        background="white"
        opacity="0.7"
        p="1rem"
        m="1rem"
        borderRadius="5px"
      >
        <Text fontStyle="italic">{images[imageIndex].description}</Text>
      </Box>
    </>
  );
};
