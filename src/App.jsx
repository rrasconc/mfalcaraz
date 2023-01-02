import { About } from "./components/About";
import { PageLoader } from "./components/Page.Loader";

function App() {
  return (
    <main className="bg-white min-h-screen ">
      <img
        src="/star.svg"
        className="absolute h-3/5 ml-auto right-0 bottom-0 z-0 pointer-events-none"
      />
      <About />
      {/* <PageLoader /> */}
    </main>
  );
}

export default App;
