import gsap, { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-blue-500">Hello, GSAP!</h1>
    </div>
  );
};

export default App;
