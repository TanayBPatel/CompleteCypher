import { useState, useRef } from "react";

const TextToSpeech: React.FC = () => {
  const hardcodedText: string = `Your Summary for Today is:<

1) You have a live lecture at 2:30 pm today afternoon for the subject of Maths. <
   
In case of your absence, a recorded lecture will be forwarded to your Email.<

2) Make sure you complete the backlog for previous recordings without fail by Tonight. <

Practice your skills in the practice section.<

3) When comfortable, move on towards the Test section.`;
  const wordsArray: string[] = hardcodedText.split(/\s+/);
  const [spokenIndex, setSpokenIndex] = useState<number | null>(null);
  const [hasRead, setHasRead] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastWordIndex = useRef<number>(0);

  const speakText = () => {
    if (hasRead) return;

    if ("speechSynthesis" in window) {
      if (isPaused && speechRef.current) {
        window.speechSynthesis.resume();
        setIsPaused(false);
        return;
      }

      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(wordsArray.slice(lastWordIndex.current).join(" "));
      speechRef.current = speech;

      let wordIndex = lastWordIndex.current;

      speech.onboundary = (event) => {
        if (event.name === "word") {
          setSpokenIndex(wordIndex);
          lastWordIndex.current = wordIndex;
          wordIndex++;
        }
      };

      speech.onend = () => {
        setSpokenIndex(wordsArray.length - 1);
        setHasRead(true);
        speechRef.current = null;
      };

      window.speechSynthesis.speak(speech);
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  const pauseText = () => {
    if (speechRef.current) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resetText = () => {
    setSpokenIndex(null);
    setHasRead(false);
    setIsPaused(false);
    lastWordIndex.current = 0;
    window.speechSynthesis.cancel();
  };

  return (
    <div className="p-8 space-y-8 max-w-full mx-auto bg-white shadow-2xl rounded-3xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 text-center">Text-to-Speech Summary</h2>

      <div className="p-6 md:p-8 bg-gray-100 rounded-2xl shadow-md border border-gray-300 text-xl leading-relaxed tracking-wide text-gray-900">
        {wordsArray.map((word: string, index: number) => (
          <span
            key={index}
            className={`transition-all duration-300 mx-1 ${
              spokenIndex !== null && index <= spokenIndex
                ? "text-1xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text scale-110"
                : "text-gray-800"
            }`}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold transition-all bg-blue-500 hover:bg-blue-600 text-white shadow-md disabled:bg-gray-400"
          onClick={speakText}
          disabled={hasRead}
        >
          {isPaused ? "Resume" : "Speak"}
        </button>
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold transition-all bg-yellow-500 hover:bg-yellow-600 text-white shadow-md"
          onClick={pauseText}
        >
          Pause
        </button>
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold transition-all bg-gray-500 hover:bg-gray-600 text-white shadow-md"
          onClick={resetText}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;