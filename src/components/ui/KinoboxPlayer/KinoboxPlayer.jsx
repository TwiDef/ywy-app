import React from 'react';

const KinoboxPlayer = ({ kinopoiskId, imdbId, poster }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window).kbox(containerRef.current, {
          search: {
            kinopoisk: kinopoiskId,
            imdb: imdbId
          },
          players: {
            Collaps: {
              enabled: true,
              position: 1
            },
            Alloha: {
              enabled: true,
              position: 2
            },
            Videocdn: {
              enabled: true,
              position: 3
            },
            Ashdi: {
              enabled: true,
              position: 4
            },
            Cdnmovies: {
              enabled: true,
              position: 5
            },
            Hdvb: {
              enabled: true,
              position: 6
            },
            Turbo: {
              enabled: true,
              position: 7
            },
            Vibix: {
              enabled: true,
              position: 8
            }
          },
          menu: {
            default: 'menu_list',
            mobile: 'menu_button',
            enabled: true,
          },
          params: {
            poster: poster
          },
          notFoundMessage: 'Видео не найдено.'
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) { }
    };
  }, [kinopoiskId, imdbId]);

  return <div ref={containerRef}></div>;
};

export default KinoboxPlayer;