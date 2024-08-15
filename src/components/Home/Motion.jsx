import React, { useRef, useState, useEffect } from "react";

function Motion() {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      const videoId = window.innerWidth <= 768 ? 'vGU7dc1kDs8' : '2vbr502XSgM';
      const ytPlayer = new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event) => {
            event.target.unMute();  // Ensure the video is unmuted
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.UNSTARTED) {
              // Autoplay likely failed due to unmuted state
              setAutoplayFailed(true);
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              // If video starts playing, remove the autoplay failed state
              setAutoplayFailed(false);
            }
          },
        },
      });

      setPlayer(ytPlayer);
    };

    return () => {
      document.body.removeChild(script);
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const handleManualPlay = () => {
    if (player) {
      player.playVideo();
      setAutoplayFailed(false);
    }
  };

  return (
    <div className='bg-black h-screen grid grid-cols-1'>
      <div className="relative h-full w-full xl:w-screen xl:h-screen overflow-hidden">
        <div
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            position: 'absolute',
            top: '-60px',
            left: '0',
            width: '100%',
            height: 'calc(100% + 120px)',
            pointerEvents: 'none',
          }}
        ></div>
        {autoplayFailed && (
          <button
            onClick={handleManualPlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-8 py-4 rounded z-10"
          >
            Play Video
          </button>
        )}
      </div>
    </div>
  );
}

export default Motion;
