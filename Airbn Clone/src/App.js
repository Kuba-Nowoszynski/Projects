import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
    </div>
  );
}
