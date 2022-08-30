import "./App.css";
import LatestRelise from "./components/LatestRelise";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <header className="App-header">
        <MyNav />
        <Welcome />
        <LatestRelise/>
        <MyFooter />
      </header>
    </div>
  );
}

export default App;
