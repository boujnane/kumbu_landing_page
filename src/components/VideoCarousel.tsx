"use client";

// components/VideoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';import './VideoCarousel.css';
import type { Swiper as SwiperClass } from 'swiper';
import { useRef, useState, useEffect } from 'react';

const videos = [
  {
    title: 'Onboarding',
    driveId: '1cQbRQ1W5EMBkWBnmyzB6E_yDJeRzGnYI',
  },
  {
    title: 'Navigation 1',
    driveId: '1Q19QklzWzQj9Kn14ul07hTJuCFWXILlO', 
  },
  {
    title: 'Search 1',
    driveId: '19eCM3M6Os3Jd-7uuPSwr_8odybrTLfCN',
  },
  {
    title: 'Navigation 2',
    driveId: '1h7yKsXJD1JKv068obLOlwqQ3dyub-8h0',
  },
  {
    title: 'Chat 1',
    driveId: '1_dQNFSzmPZNsFghgYzlhlSue3ivjTtv_',
  }
];


export function VideoCarousel() {
  const swiperRef = useRef<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '1rem' : '3rem 1rem',
        }}
      >
        <aside
          style={{
            width: isMobile ? '100%' : '180px',
            marginBottom: isMobile ? '1rem' : 0,
            marginRight: isMobile ? 0 : '1rem',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            overflowX: isMobile ? 'auto' : 'visible',
            gap: '1rem',
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              title={video.title}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setActiveIndex(index);
              }}
              style={{
                minWidth: isMobile ? '110px' : 'auto',
                maxWidth: isMobile ? '130px' : 'auto',
                cursor: 'pointer',
                border: index === activeIndex ? '2px solid #0070f3' : '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'border 0.3s',
                flexShrink: 0,
              }}
            >
              <iframe
                src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                width="100%"
                height={isMobile ? 90 : 100}
                style={{
                  border: 'none',
                  pointerEvents: 'none',
                  objectFit: 'cover', // Maintient les proportions de la vidéo
                }}
                title={video.title}
                allowFullScreen
                allow="autoplay"
              />
            </div>
          ))}
        </aside>

        {/* Carrousel principal */}
        <div style={{ flexGrow: 1 }}>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: isMobile ? '1.5rem' : '2rem',
            }}
          >
            Tutoriels en Vidéo
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={!isMobile}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="video-card" style={{ textAlign: 'center' }}>
                  <iframe
                    src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                    width="100%"
                    height={isMobile ? 250 : 550}
                    allow="autoplay"
                    title={video.title}
                    style={{ border: 'none', borderRadius: '12px' }}
                  ></iframe>
                  <h3
                    className="video-title"
                    style={{
                      marginTop: '0.75rem',
                      fontSize: isMobile ? '1rem' : '1.25rem',
                    }}
                  >
                    {video.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}
