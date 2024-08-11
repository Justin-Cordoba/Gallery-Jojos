
import GalleyImage from "./components/GalleryImage";

function App() {
  return (
    <div className="flex gap-4">
      <GalleyImage image='bg-[url("2.jpg")]' />
      <GalleyImage image='bg-[url("1.png")]' />
      <GalleyImage image='bg-[url("2.jpg")]' />
      <GalleyImage image='bg-[url("1.png")]' />
      <GalleyImage image='bg-[url("2.jpg")]' />
    </div>
  );
}

export default App;
