import { useEffect, useState } from 'react';
import { InitialSession } from './style';

const desktopImages = ['/img/fundo.png'];
const mobileImages = ['/img/fundo_cel.png'];

export function SessionInitial() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setCurrentImageIndex(0);

      const links = document.querySelectorAll('link[rel="preload"]');
      links.forEach((link) => link.remove());

      const preloadImages = isMobile ? mobileImages : desktopImages;
      preloadImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const isMobile = window.innerWidth <= 600;
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <section aria-label="Seção Inicial do Site" id="inicio">
      <InitialSession>
        {images.map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img
              src={src}
              alt="Foto do Banner sobre JP Print"
              onLoad={handleImageLoad}
              className={imagesLoaded ? '' : 'image-loading'}
            />
          </div>
        ))}
      </InitialSession>
    </section>
  );
}
