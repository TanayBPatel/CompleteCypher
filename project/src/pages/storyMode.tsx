import React, { useState, useEffect } from 'react';
import { Scroll, Book, Award, Brain, ChevronRight, ChevronLeft } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  location: string;
  concepts: string[];
  story: string;
  challenge: {
    question: string;
    answer: string;
    explanation: string;
  };
  reward: {
    item: string;
    description: string;
  };
  backgroundVideo: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Village of Counting",
    location: "Addington Village",
    concepts: ["Addition", "Subtraction", "Multiplication", "Division"],
    story: "In the peaceful village of Addington, where numbers float in the air and farmers count their crops, Alex meets the village elder who presents the first challenge...",
    challenge: {
      question: "A merchant has 12 apples. He sells 4 and then buys 7 more. How many apples does he have now?",
      answer: "15 apples",
      explanation: "12 - 4 + 7 = 15 apples"
    },
    reward: {
      item: "Golden Abacus",
      description: "An ancient tool that enhances Alex's ability to calculate faster."
    },
    backgroundVideo: "https://cdn.pixabay.com/vimeo/529360536/numbers-71945.mp4?width=1280&hash=f7c0c0dc3c4b9c6b4c5f5f5f5f5f5f5f5f5f5f5f"
  },
  {
    id: 2,
    title: "The Maze of Fractions",
    location: "Enchanted Forest",
    concepts: ["Fractions", "Equivalent Fractions", "Decimals"],
    story: "Deep in the Enchanted Forest, Alex encounters Fraction Sprites, tiny creatures that demand fair portions of magical treats...",
    challenge: {
      question: "You have a cake cut into 8 slices. If you eat 3, what fraction of the cake remains?",
      answer: "5/8",
      explanation: "8 - 3 = 5 slices remain, so 5/8 of the cake remains"
    },
    reward: {
      item: "Crystal Compass",
      description: "A mystical compass that helps Alex measure distances accurately."
    },
    backgroundVideo: "https://cdn.pixabay.com/vimeo/414770574/forest-36569.mp4?width=1280&hash=4b9c6b4c5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f"
  },
  {
    id: 3,
    title: "The City of Angles",
    location: "GeoTown",
    concepts: ["Shapes", "Perimeter", "Area", "Angles"],
    story: "In GeoTown, where buildings take the form of perfect geometric shapes, the master architect presents a challenging puzzle...",
    challenge: {
      question: "A garden is in the shape of a rectangle with a length of 10 meters and a width of 6 meters. What is its area?",
      answer: "60 square meters",
      explanation: "Area = length × width = 10m × 6m = 60m²"
    },
    reward: {
      item: "Protractor of Precision",
      description: "A magical protractor allowing Alex to measure angles with supernatural accuracy."
    },
    backgroundVideo: "https://cdn.pixabay.com/vimeo/531791001/geometry-72756.mp4?width=1280&hash=5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f"
  }
];

function Story() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentChapter(prev => prev + 1);
        setShowAnswer(false);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const previousChapter = () => {
    if (currentChapter > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentChapter(prev => prev - 1);
        setShowAnswer(false);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="relative min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        >
          <source src={chapters[currentChapter].backgroundVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full  z-10" />

        {/* Content */}
        <div className="relative z-20">
          {/* Header */}
          <div className="absolute top-0 w-full bg-gradient-to-b from-gray to-transparent pt-6 pb-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 animate-fadeIn">
                  <Book className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <h1 className="text-2xl font-bold text-black">A Journey Through Numbers</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-purple-400 animate-bounce" />
                  <span className="text-purple-400">The Math Quest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`container mx-auto px-4 pt-32 transition-all duration-500 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="max-w-4xl mx-auto">
              {/* Chapter Header */}
              <div className="mb-8 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3 mb-2">
                  <Scroll className="w-6 h-6 text-yellow-400 animate-spin-slow" />
                  <h2 className="text-xl font-semibold text-black">Chapter {chapters[currentChapter].id}</h2>
                </div>
                <h3 className="text-3xl font-bold mb-2 animate-glow text-black">{chapters[currentChapter].title}</h3>
                <div className="flex items-center space-x-2 text-gray-700">
                  <span>📍 {chapters[currentChapter].location}</span>
                </div>
              </div>

              {/* Concepts */}
              <div className="mb-8 transform hover:scale-105 transition-transform">
                <h4 className="text-lg font-semibold mb-2 text-yellow-400">Key Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {chapters[currentChapter].concepts.map((concept, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story */}
              <div className="mb-8 bg-black/40 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform">
                <p className="text-lg leading-relaxed">{chapters[currentChapter].story}</p>
              </div>

              {/* Challenge */}
              <div className="mb-8 transform hover:scale-105 transition-transform">
                <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-4">🎯 Challenge</h4>
                  <p className="text-lg mb-4">{chapters[currentChapter].challenge.question}</p>
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95"
                  >
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                  </button>
                  {showAnswer && (
                    <div className="mt-4 p-4 bg-white/10 rounded-lg animate-fadeIn">
                      <p className="text-green-400 font-semibold">Answer: {chapters[currentChapter].challenge.answer}</p>
                      <p className="text-gray-300 mt-2">Explanation: {chapters[currentChapter].challenge.explanation}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Reward */}
              <div className="mb-8 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <h4 className="text-lg font-semibold text-yellow-400">Reward</h4>
                </div>
                <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
                  <h5 className="text-yellow-400 font-semibold mb-2">{chapters[currentChapter].reward.item}</h5>
                  <p>{chapters[currentChapter].reward.description}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={previousChapter}
                  disabled={currentChapter === 0}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-95 ${
                    currentChapter === 0 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous Chapter</span>
                </button>
                <button
                  onClick={nextChapter}
                  disabled={currentChapter === chapters.length - 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-95 ${
                    currentChapter === chapters.length - 1
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                >
                  <span>Next Chapter</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;