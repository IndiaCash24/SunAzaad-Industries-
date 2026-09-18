export default function App() {
  const TARGET_URL = "https://sunazaad.wordpress.com/";

  return (
    <main className="w-screen h-screen overflow-hidden bg-white m-0 p-0 border-0">
      <iframe
        src={TARGET_URL}
        title="SunAzaad Industries Official Website"
        className="w-full h-full border-0 block m-0 p-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
      />
    </main>
  );
}
