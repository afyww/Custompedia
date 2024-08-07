import React, { useRef, useState, useEffect } from "react";

let isYouTubeAPIReady = false;
let onYouTubeIframeAPIReadyCallbacks = [];

function loadYouTubeAPI() {
  if (!isYouTubeAPIReady) {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      isYouTubeAPIReady = true;
      onYouTubeIframeAPIReadyCallbacks.forEach(callback => callback());
      onYouTubeIframeAPIReadyCallbacks = [];
    };
  }
}

function onYouTubeAPIReady(callback) {
  if (isYouTubeAPIReady) {
    callback();
  } else {
    onYouTubeIframeAPIReadyCallbacks.push(callback);
  }
}

function Motion() {
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    loadYouTubeAPI();
    onYouTubeAPIReady(() => setPlayerReady(true));
  }, []);

  useEffect(() => {
    let player;

    if (playerReady && playerRef.current) {
      player = new window.YT.Player(playerRef.current, {
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
            event.target.playVideo();
          },
        },
      });
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [playerReady]);

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
      </div>
    </div>
  );
}

export default Motion;
