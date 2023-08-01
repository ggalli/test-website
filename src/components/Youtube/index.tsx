'use client';

import { useState } from 'react';
import { Iframe, PlayButton, Thumb } from './styles';

interface YoutubeProps {
  videoId: string;
  width?: string;
  height?: string;
  imgSize?: string;
}

export const Youtube = ({ videoId, width, height, imgSize }: YoutubeProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo ? (
        <div className="relative pt-[56.25%] lg:pt-[calc(56.25%/2)] w-full overflow-hidden shrink-0 flex-1">
          <Iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <Thumb
          style={{
            backgroundImage: `url(${`https://img.youtube.com/vi/${videoId}/${
              imgSize || 'mqdefault'
            }.jpg`})`,
            maxWidth: width,
          }}
          className="py-[22%] lg:py-[16%] xl:py-[12%]"
          onClick={() => setShowVideo(true)}
        >
          <PlayButton />
        </Thumb>
      )}
    </>
  );
};
