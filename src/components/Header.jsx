import reactImg from "../assets/game-logo.png";

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Hand-drawn tic tac toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}
