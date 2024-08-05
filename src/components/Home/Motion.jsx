function Motion() {
  return (
    <div className="grid grid-cols-1 h-screen bg-black">
      <div className="my-auto">
        <div className="video-container relative">
          <div className="">
            <iframe
              id="player"
              type="text/html"
              height="768"
              src="https://www.youtube.com/embed/2vbr502XSgM?playlist=2vbr502XSgM&autoplay=1&loop=1&controls=0&mute=0"
              frameBorder="0"
              className="w-screen h-screen"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motion;
