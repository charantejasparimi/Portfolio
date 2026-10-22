import mascot from "../assets/mascot.webp";

// Waving blue character next to the hero photo, with a small "Hi" bubble.
// Decorative only, so it is hidden from screen readers.
const Mascot = () => (
  <div className="mascot" aria-hidden="true">
    <div className="mascot-bubble">
      Hi there! <span className="wave">{"\u{1F44B}"}</span>
    </div>
    <img src={mascot} width="300" height="300" alt="" loading="eager" decoding="async" />
  </div>
);

export default Mascot;
