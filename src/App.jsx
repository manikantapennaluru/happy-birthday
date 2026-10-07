import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [password, setPassword] = useState("");
const correctPassword = "2011";
useEffect(() => {
  if (password === correctPassword) {
    setPassword("");
    setPage(4);
  }
}, [password]);

  return (
    <main>

      {/* PAGE 1 */}
      {page === 1 && (
        <section className="gift-page">

  <div className="first-page-text">
    <h1>I made something special for you...</h1>
    <p>Tap the gift to begin ♡</p>
  </div>

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
      {/* PAGE 3 - PASSKEY */}
{page === 3 && (
  <section className="passkey-page">

    <div className="passkey-content">

      <div className="passkey-lock">🔐</div>

      <h1>Enter Passkey</h1>

      <div className="passkey-dots">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={password.length > index ? "active" : ""}
          >
            {password.length > index ? "●" : "○"}
          </span>
        ))}
      </div>

      <div className="number-pad">

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            onClick={() => {
              if (password.length < 4) {
                setPassword(password + number);
              }
            }}
          >
            {number}
          </button>
        ))}

        <button
          className="zero-button"
          onClick={() => {
            if (password.length < 4) {
              setPassword(password + "0");
            }
          }}
        >
          0
        </button>

        <button
          className="clear-button"
          onClick={() => setPassword("")}
        >
          Clear
        </button>

      </div>

      {password.length === 4 && (
        <button
          className="unlock-button"
          onClick={() => {
            if (password === correctPassword) {
              setPassword("");
              setPage(4);
            } else {
              setPassword("");
              alert("Wrong passkey ♡");
            }
          }}
        >
          Unlock ♡
        </button>
      )}

    </div>

  </section>
)}


      {/* PAGE 4 */}
      {page === 4 && (
        <section className="page-four">

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
                 onClick={() => setPage(5)}

              />
            </div>

          </div>

        </section>
      )}

{/* PAGE 5 */}
{page === 5 && (
  <section className="page-five">

    <div className="cake-window">

      <img
        src="/cake.png"
        alt="Birthday cake"
        className="real-cake"
      />

    </div>

    <div className="birthday-wishes">

      <h1>Happy Birthday my dear little ♡</h1>

      <p>
        Happy Birthday to the person I want beside me through every chapter
        of my life — my love, my peace, my forever, and my lifepartner. ❤️
      </p>

      <div className="wish-line">♡</div>

      <button
        className="page-five-button"
        onClick={() => setPage(6)}
      >
        One last thing ♡
      </button>

    </div>

  </section>
)}
      {/* PAGE 6*/}
      {page === 6 && (
        <section className="page-six">
          <div className="page-five-content">

            <div className="page-five-heart">♡</div>

            <h1>One last thing...</h1>

            <p className="page-five-message">
              I just want you to know that you are
              one of the most beautiful parts of my life.
            </p>

            <p className="page-five-message">
              I hope this little surprise brings
              a smile to your face today.
            </p>

            <h2>Happy Birthday, my dear little ♡</h2>

            <p className="page-five-final">
              With all my love, always my little is splecial to me ❤️.
            </p>

            <div className="page-five-forever">
              Forever ♡
            </div>
            <p className="page-five-message">
  
  hi my dear 👑 little queen 👑 inka mana slang ki vachedham. iyana oka normal preson anukuna little but eppudu na life ni ruller vi iypoyav.
  and manam kalisidhi i think its 2023 anukunta eppudu dhaka mana eddari madhaya distrubance vachayi.but nanu nevu eppudu vadhili velledhu 
  nenu veledhu anukunta little.and the 2024 naku eppudu gurthu undhi little dusera ki temple nitho kalisi thirigina ahha round aslu na 
  life lo so so so sepical to me and 2025 here we start a new jrouny of our life. but in the 2025 happy things unayi and also the biggest
  godava kudha manaki 2025 lone jargindhi🥹 dhanitho. but mana madhya eni godavalu vallu vachina set chesukundam anthe kani vadhilesi 
  velipovadhu little and i want my little forever little... nenu namina oke oka ammayi na little and deniki ley edhi antha kani life
  ne goals ni reach avuthav little dhaniki nenu thodhu unta paka ga ok.but eppudu aedavaku little naku eppudu e line type chesthunappudu
  na eyes full nellu vachesthuna mona e madhaya ganesh chaturthi ki mudhara roju anukunta me daddy dirnk chesi vachesi vachi na roju nevu 
  archina keka inka na mind lone undhi.iyana nenu ento ley birthday wishes endhuku any nevu happy ga undhi nanu happy ga unchu amma madam
  little.🎉💗💖ONCE AGAIN MANY MORE HAPPY RETURNS OF THE DAY MY DEAR LITTLE QUEEN ,LOSSU, OR MY MADAM JI💗💖🎉

</p>

          </div>
        </section>
      )}

    </main>
  );
}

export default App;