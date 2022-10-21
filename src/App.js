import Header from "./Components/Header";
import Socials from "./Components/Socials";
import BackgroundObject from "./Components/BackgroundObject";

function App() {
  return (
    <div className="App h-screen relative">
      <div className="BackgroundObject absolute grid grid-cols-12 h-full w-full overflow-hidden">
        <BackgroundObject />
      </div>
      <div className="grid grid-cols-12 gap-8 h-full pt-16 lg:pt-32 lg:pb-32">
        <Header />
        <Socials />
      </div>
    </div>
  );
}

export default App;
