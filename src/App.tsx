import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Project from "./components/Project";
import Work from "./components/Work";

function App() {
  return (
    <main className="p-8 container max-w-5xl mx-auto h-[200vh]">
      <Navbar />
      <Home />
      <Work />
      <Project />
    </main>
  );
}

export default App;
