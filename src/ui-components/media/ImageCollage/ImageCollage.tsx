import React from 'react';

import styles from './ImageCollage.module.scss';

export interface ImageCollageImage {
  src: string;
  alt: string;
}

export interface ImageCollageBadge {
  text: string;
}

export interface ImageCollageProps {
  images: ImageCollageImage[];
  badge?: ImageCollageBadge;
}

export const ImageCollage: React.FC<ImageCollageProps> = ({
  images,
  badge,
}): React.ReactElement => {
  const collageImages = images.slice(0, 3);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.collage} ${
          collageImages.length === 2 ? styles.twoImages : styles.threeImages
        }`}
      >
        {collageImages.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            className={`${styles.image} ${styles[`image${index + 1}`]}`}
            loading="lazy"
          />
        ))}
      </div>

      {badge ? <span className={styles.badge}>{badge.text}</span> : null}
    </div>
  );
};

ImageCollage.displayName = 'ImageCollage';
