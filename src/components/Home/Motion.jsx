function Motion() {
  const videoId = window.innerWidth <= 768 ? "G7eYjjLX4M0" : "2vbr502XSgM";

  return (
    <div className='h-screen grid grid-cols-1'>
      <div className="relative h-full w-full overflow-hidden">
        <iframe
          title="YouTube Video"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1', // Sends the video to the background, allowing other content to be displayed on top.
            pointerEvents: 'none',
          }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Motion;
