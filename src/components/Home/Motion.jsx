import React, { useRef, useState, useEffect } from "react";

function Motion() {
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };

    return () => {
      document.body.removeChild(script);
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (playerReady && playerRef.current) {
      new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId: '2vbr502XSgM',
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: '2vbr502XSgM',
          mute: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        events: {
          onReady: (event) => {
            event.target.playVideo().catch(() => {
              setAutoplayFailed(true);
            });
          },
        },
      });
    }
  }, [playerReady]);

  const handleManualPlay = () => {
    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
      setAutoplayFailed(false);
    }
  };

  return (
    <div className='flex items-center justify-center bg-black h-screen'>
      <div className="relative w-screen h-screen overflow-hidden">
        <div
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            position: 'absolute',
            top: '-60px',  // Adjust this value to hide the top bar
            left: '0',
            width: '100%',
            height: 'calc(100% + 120px)',  // Compensate for the hidden top and bottom bars
            pointerEvents: 'none'  // Prevents interaction with the iframe
          }}
        ></div>
        {autoplayFailed && (
          <button
            onClick={handleManualPlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded z-10"
          >
            Play Video
          </button>
        )}
      </div>
    </div>
  );
}

export default Motion;