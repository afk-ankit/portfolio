import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <main className="p-8 container max-w-[1024px] mx-auto h-[200vh]">
      <Navbar />
      <Home />
      <Work />
    </main>
  );
}

export default App;
