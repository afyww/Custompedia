function Motion() {
  return (
    <div className="grid grid-cols-1 h-screen bg-black">
      <div className="my-auto">
        <div className="video-container absolute">
          <iframe
            id="player"
            type="text/html"
            height="768"
            src="https://www.youtube.com/embed/2vbr502XSgM?autoplay=1&loop=1&playlist=2vbr502XSgM&controls=0&mute=0&modestbranding=1"
            frameBorder="0"
            className="w-screen h-screen"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Motion;
