'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  titleLeft?: string;
  titleRight?: string;
  subtitle?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  titleLeft,
  titleRight,
  subtitle,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
  }, [mediaType]);

  useGSAP(
    () => {
      const heroContainer = heroContainerRef.current;
      if (!heroContainer) return;

      const progressObj = { value: 0 };

      ScrollTrigger.create({
        trigger: heroContainer,
        start: 'top top',
        end: '+=1500', // scroll duration (pixels) for the expansion
        pin: true,
        scrub: 1, // smooth scrub
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          if (self.progress >= 0.95) {
            setShowContent(true);
          } else if (self.progress < 0.75) {
            setShowContent(false);
          }
        },
      });
    },
    { scope: sectionRef }
  );

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const initialWidth = isMobileState ? 300 : 400;
  const initialHeight = isMobileState ? 400 : 500;
  
  const targetWidth = windowSize.width || (isMobileState ? 400 : 1920);
  const targetHeight = windowSize.height || (isMobileState ? 800 : 1080);

  const mediaWidth = initialWidth + scrollProgress * (targetWidth - initialWidth);
  const mediaHeight = initialHeight + scrollProgress * (targetHeight - initialHeight);
  const mediaBorderRadius = (1 - scrollProgress) * 16; // From 16px to 0px

  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
  
  // Start the video lower on the screen and move it to center (50%) as it expands
  const videoTopPercent = isMobileState 
    ? 55 - (scrollProgress * 5) 
    : 60 - (scrollProgress * 10);

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative block'>
        <div ref={heroContainerRef} className='relative w-full flex flex-col items-center min-h-[100dvh] overflow-hidden'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/60' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none'
                style={{
                  top: `${videoTopPercent}%`,
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  borderRadius: `${mediaBorderRadius}px`,
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <Image
                      src={mediaSrc}
                      alt={titleLeft || 'Media content'}
                      fill
                      className='w-full h-full object-cover'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-6 md:mt-8 transition-none'>
                  {subtitle && (
                    <p
                      className='text-xl md:text-2xl text-gray-300 font-montserrat'
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {subtitle}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-goldenros font-medium font-montserrat tracking-widest uppercase text-sm md:text-base mt-2'
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`absolute inset-x-0 top-24 md:top-36 flex items-center justify-start text-center gap-1 md:gap-2 w-full transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  } pointer-events-none`}
                style={{ zIndex: 50 }}
              >
                {titleLeft && (
                  <motion.h2
                    className='text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bodoni transition-none'
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {titleLeft}
                  </motion.h2>
                )}
                {titleRight && (
                  <motion.h2
                    className='text-6xl md:text-7xl lg:text-8xl font-dirty-brush text-goldenros leading-none transition-none drop-shadow-lg'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {titleRight}
                  </motion.h2>
                )}
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
