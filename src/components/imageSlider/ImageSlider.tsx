import { useState, useEffect, useCallback, useRef } from 'react';

import Image from 'next/image';
import { Box, Container, Button, IconButton, Text, Spacer } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

type ImageSliderProps = {
  imageSources: string[];
  altText: string[];
  captions?: string[];
  transitionTime: number;
};

const ImageSlider = ({ imageSources, altText, captions, transitionTime }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideshowLength = imageSources.length;

  const onPreviousClick = useCallback(() => setCurrentImage(curIndex => (curIndex - 1 + slideshowLength) % slideshowLength), [slideshowLength]);
  const onNextClick = useCallback(() => setCurrentImage(curIndex => (curIndex + 1) % slideshowLength), [slideshowLength]);

  return (
    <Container maxW="container.xl" h="26rem" ref={containerRef} px={0}>
      <Box w="100%" h="26rem" style={{
        position: 'relative',
        display: 'block',
      }}>
        <Box 
          w="100%" 
          h="26rem" 
          style={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
          }}
          alignItems="center"
        >
          <IconButton icon={<ArrowLeftIcon />} aria-label="Previous" variant="ghost" isRound ml={3} onClick={onPreviousClick} />
          <Spacer />
          <IconButton icon={<ArrowRightIcon />} aria-label="Next" variant="ghost" isRound mr={3} onClick={onNextClick} />
        </Box>
        <Image
          src={imageSources[currentImage]}
          alt={altText[currentImage]}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </Container>
  );

};

export { ImageSlider };
