import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [candleBlown, setCandleBlown] = useState(false);

useEffect(() => {
  if (page !== 4 || candleBlown) return;

  let audioContext;
  let analyser;
  let microphone;
  let animationFrame;

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();

      microphone = audioContext.createMediaStreamSource(stream);

      analyser.fftSize = 256;
      microphone.connect(analyser);

      const data = new Uint8Array(analyser.frequencyBinCount);

      const detectBlow = () => {
        analyser.getByteFrequencyData(data);

        let total = 0;

        for (let i = 0; i < data.length; i++) {
          total += data[i];
        }

        const average = total / data.length;

        // Strong breath sound
        if (average > 45) {
          setCandleBlown(true);
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        animationFrame = requestAnimationFrame(detectBlow);
      };

      detectBlow();

    } catch (error) {
      console.log("Microphone permission was not allowed.");
    }
  };

  startMicrophone();

  return () => {
    cancelAnimationFrame(animationFrame);

    if (microphone) {
      microphone.disconnect();
    }

    if (audioContext) {
      audioContext.close();
    }
  };

}, [page, candleBlown]);

  return (
    <main>

      {/* PAGE 1 */}
      {page === 1 && (
        <section className="gift-page">
          <div
            className="gift-box"
            onClick={() => setPage(2)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setPage(2);
              }
            }}
          >
            <div className="gift-lid">
              <div className="gift-ribbon-horizontal"></div>

              <div className="gift-bow">
                <span className="bow-left"></span>
                <span className="bow-right"></span>
                <span className="bow-center"></span>
              </div>
            </div>

            <div className="gift-body">
              <div className="gift-ribbon-vertical"></div>
            </div>
          </div>
        </section>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <section className="page-two">

          <div className="page-two-content">
            <h1>From me to you</h1>

            <p>This little surprise is just for you ♡</p>

            <img
              src="/couple.png"
              alt="Boy and girl"
              className="couple-image"
              onClick={() => setPage(3)}
            />
          </div>

        </section>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <section className="page-three">

          <div className="page-three-content">

            <h1>my little of yours</h1>

            <p>somme moments i want to keep forever</p>

            <div className="page-three-gallery">
              <img
                src="/picture 1.png"
                alt="Memory 1"
              />

              <img
                src="/picture 2.png"
                alt="Memory 2"
              />

              <img
                src="/picture 3.png"
                alt="Memory 3"
              />

              <img
                src="/picture4.png"
                alt="Memory 4"
                onClick={() => setPage(4)}
              />
            </div>

          </div>

        </section>
      )}

    {/* PAGE 4 */}
{/* PAGE 4 */}
{page === 4 && (
  <section className={`page-four ${candleBlown ? "blown" : ""}`}>

    {/* Birthday pop */}
    {candleBlown && (
      <div className="birthday-pop">
        <span>🎉</span>
        <span>✨</span>
        <span>🎊</span>
        <span>💫</span>
        <span>🎉</span>
        <span>✨</span>
        <span>🎊</span>
        <span>💫</span>
      </div>
    )}

    {/* Cake */}
    <div className="cake-window">

      <img
        src="/cake.png"
        alt="Birthday cake"
        className="real-cake"
      />

      {/* Candle */}
      {!candleBlown && (
        <div className="real-candle">
          <div className="real-flame"></div>
        </div>
      )}

    </div>

    {/* Birthday wishes */}
    {candleBlown && (
      <div className="birthday-wishes">

        <h1>Happy Birthday my dear little ♡</h1>

        <p>
          May your days be filled with happiness,
          beautiful moments and everything you wish for.
        </p>

        <div className="wish-line">♡</div>

      </div>
    )}

  </section>
)}
    </main>
  );
}

export default App;