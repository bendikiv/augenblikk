import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Box, Text, Spinner, IconButton } from "@chakra-ui/core";
import { useStore } from "./ImageStore";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

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

export const Slideshow = () => {
  const { images, isLoadingImages } = useStore();

  const [[page, direction], setPage] = useState([0, 0]);
  const [imageList, setImageList] = useState(images);

  React.useEffect(() => {
    setImageList(images);
  }, [images]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  if (isLoadingImages || !imageList) return <Spinner />;

  if (imageList.length <= 0)
    return (
      <Text color="white" m="auto">
        Press the + button to add your first image
      </Text>
    );

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, imageList.length, page);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={imageList[imageIndex].url}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          height="100%"
        />
      </AnimatePresence>
      <IconButton
        aria-label="Forward icon button"
        icon={<ArrowForwardIcon />}
        onClick={() => paginate(1)}
        isRound={true}
        position="absolute"
        right="0"
        zIndex="900"
        mr="1rem"
        size="sm"
      />
      <IconButton
        aria-label="Back icon button"
        icon={<ArrowBackIcon />}
        onClick={() => paginate(-1)}
        isRound={true}
        position="absolute"
        left="0"
        zIndex="900"
        ml="1rem"
        size="sm"
      />
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
        <Text fontStyle="italic">{imageList[imageIndex].description}</Text>
      </Box>
    </>
  );
};
