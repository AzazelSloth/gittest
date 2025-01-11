import "./App.css";
import Navbar from "./views/components/navbar"; // Import the Navbar component
import Footer from "./views/components/footer";
import Section1 from "./views/section1"; // Import the Section1 component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
