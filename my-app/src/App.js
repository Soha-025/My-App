import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Button text="Click Me" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
