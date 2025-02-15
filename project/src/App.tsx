import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LiveClasses from "./pages/LiveClasses";
import Recordings from "./pages/Recordings";
import Notes from "./pages/Notes";
import Assignments from "./pages/Assignments";
import Practice from "./pages/Practice";
import Questions from "./pages/Questions";
import Progress from "./pages/Progress";
import TextToSpeech from "./pages/textToSpeech";
import { TimerProvider } from "./context/TimerContext"; // Import the TimerProvider
import QuizComponent from "./pages/qna";
import DiscussionPage from "./pages/discussionPage";
import TeamsMeetingUI from "./pages/meetingUI";
function App() {
  const [showDiscussion, setShowDiscussion] = useState(false);

  const mathDiscussion = {
    title: 'How to solve quadratic equations?',
    subject: 'Mathematics',
  };
  // const photosynthesisDiscussion = {
  //   title: 'How to solve quadratic equations?',
  //   subject: 'Mathematics',
  // };
  const ww2Discussion = {
    title: 'Timeline of World War II events',
    subject: 'History',
  };

  const algebraQuestions = [{
    question: "What is the value of x in 2x + 3 = 7?",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    question: "Solve: 5x = 20",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "Simplify: (3x + 4) - (x - 2)",
    options: ["2x + 2", "2x + 6", "4x + 6", "4x - 2"],
    answer: "2x + 6",
  },
  {
    question: "Factorize: x² - 9",
    options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 2)(x + 2)", "(x - 1)(x + 9)"],
    answer: "(x - 3)(x + 3)",
  },
  {
    question: "What is x if 3x - 5 = 10?",
    options: ["3", "5", "6", "7"],
    answer: "5",
  },
  {
    question: "Solve: 2(x - 3) = 8",
    options: ["4", "5", "6", "7"],
    answer: "7",
  },
  {
    question: "Expand: (x + 2)(x + 3)",
    options: ["x² + 6x + 5", "x² + 5x + 6", "x² + 6x + 6", "x² + 4x + 6"],
    answer: "x² + 5x + 6",
  },
  {
    question: "Find x: x² = 16",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Solve for x: x/3 = 4",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "If 2x + 1 = 9, what is x?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "What is the coefficient of x in 7x - 5?",
    options: ["5", "7", "-5", "1"],
    answer: "7",
  },
  {
    question: "Solve for x: x + 4 = 10",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    question: "Factorize: x² - 5x + 6",
    options: ["(x - 2)(x - 3)", "(x - 1)(x - 6)", "(x + 2)(x - 3)", "(x + 1)(x - 6)"],
    answer: "(x - 2)(x - 3)",
  },
  {
    question: "Solve for x: 3x + 6 = 0",
    options: ["-2", "-3", "-4", "-5"],
    answer: "-2",
  },
  {
    question: "Expand: (x - 2)(x - 5)",
    options: ["x² - 7x + 10", "x² - 3x + 10", "x² - 7x - 10", "x² + 7x + 10"],
    answer: "x² - 7x + 10",
  }];
  const chemistryQuestions = [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "H2"],
      answer: "H2O",
    },
    {
      question: "Which gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the pH of pure water?",
      options: ["5", "7", "9", "11"],
      answer: "7",
    },
    {
      question: "Which element is common to all organic compounds?",
      options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
      answer: "Carbon",
    },
    {
      question: "What is the chemical formula for table salt?",
      options: ["KCl", "NaCl", "CaCl2", "MgCl2"],
      answer: "NaCl",
    },
    {
      question: "What type of bond is formed when electrons are shared between atoms?",
      options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
      answer: "Covalent",
    },
    {
      question: "Which gas is produced when an acid reacts with a metal?",
      options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
      answer: "Hydrogen",
    },
    {
      question: "What is the main gas found in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      answer: "Nitrogen",
    },
    {
      question: "Which of these is an example of a noble gas?",
      options: ["Hydrogen", "Oxygen", "Helium", "Chlorine"],
      answer: "Helium",
    },
    {
      question: "What is the process of a liquid turning into a gas called?",
      options: ["Condensation", "Sublimation", "Evaporation", "Deposition"],
      answer: "Evaporation",
    },
  ];
  const indianHistoryQuestions = [
    {
      question: "Who was the first Mughal Emperor of India?",
      options: ["Akbar", "Aurangzeb", "Babur", "Shah Jahan"],
      answer: "Babur",
    },
    {
      question: "In which year did the Battle of Plassey take place?",
      options: ["1757", "1857", "1764", "1799"],
      answer: "1757",
    },
    {
      question: "Who is known as the Iron Man of India?",
      options: ["Sardar Patel", "Subhas Chandra Bose", "Bhagat Singh", "Lal Bahadur Shastri"],
      answer: "Sardar Patel",
    },
    {
      question: "Who was the first Governor-General of independent India?",
      options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
      answer: "Lord Mountbatten",
    },
    {
      question: "Which Indian freedom fighter gave the slogan 'Give me blood, and I will give you freedom'?",
      options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Bal Gangadhar Tilak"],
      answer: "Subhas Chandra Bose",
    },
    {
      question: "The Jallianwala Bagh massacre took place in which year?",
      options: ["1919", "1920", "1931", "1942"],
      answer: "1919",
    },
    {
      question: "Who was the first President of India?",
      options: ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Jawaharlal Nehru", "B.R. Ambedkar"],
      answer: "Dr. Rajendra Prasad",
    },
    {
      question: "Which movement was launched by Mahatma Gandhi in 1942?",
      options: ["Civil Disobedience Movement", "Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement"],
      answer: "Quit India Movement",
    },
    {
      question: "Who wrote the book 'Discovery of India'?",
      options: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Rabindranath Tagore"],
      answer: "Jawaharlal Nehru",
    },
    {
      question: "Which Indian ruler fought against the British in the Battle of Mysore?",
      options: ["Rani Lakshmibai", "Tipu Sultan", "Shivaji", "Haider Ali"],
      answer: "Tipu Sultan",
    },
    {
      question: "Who founded the Maurya Empire?",
      options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
      answer: "Chandragupta Maurya",
    },
    {
      question: "Which Indian king is known for spreading Buddhism outside India?",
      options: ["Chandragupta Maurya", "Ashoka", "Harsha", "Kanishka"],
      answer: "Ashoka",
    },
    {
      question: "The First War of Indian Independence took place in which year?",
      options: ["1757", "1857", "1942", "1930"],
      answer: "1857",
    },
    {
      question: "Who established the Gupta Empire?",
      options: ["Samudragupta", "Chandragupta I", "Chandragupta II", "Harsha"],
      answer: "Chandragupta I",
    },
    {
      question: "Who was the founder of the Sikh Empire?",
      options: ["Guru Nanak", "Ranjit Singh", "Guru Gobind Singh", "Banda Singh Bahadur"],
      answer: "Ranjit Singh",
    },
    {
      question: "Which Mughal emperor built the Taj Mahal?",
      options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
      answer: "Shah Jahan",
    },
    {
      question: "Who was the first woman ruler of Delhi?",
      options: ["Razia Sultana", "Nur Jahan", "Rani Lakshmibai", "Chand Bibi"],
      answer: "Razia Sultana",
    },
    {
      question: "Which Indian freedom fighter founded the newspaper 'Kesari'?",
      options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Lala Lajpat Rai", "Dadabhai Naoroji"],
      answer: "Bal Gangadhar Tilak",
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      options: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
      answer: "B.R. Ambedkar",
    },
    {
      question: "When did India gain independence from British rule?",
      options: ["1945", "1946", "1947", "1948"],
      answer: "1947",
    },
  ];
  
  
  return (
    <TimerProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/live" element={<LiveClasses />} />
                <Route path="/recordings" element={<Recordings />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/speech" element={<TextToSpeech />} />
                <Route path="/quiz-algebra" element={<QuizComponent questions={algebraQuestions}/>} />
                <Route path="/quiz-chemical" element={<QuizComponent questions={chemistryQuestions}/>} />
                <Route path="/quiz-historical" element={<QuizComponent questions={indianHistoryQuestions}/>} />
                <Route path="/questions/mathdiscussion"  element={<DiscussionPage question={mathDiscussion} onBack={() => setShowDiscussion(false)}  />}/>
                <Route path="/historydiscussion"  element={<DiscussionPage question={ww2Discussion} onBack={() => setShowDiscussion(false)}  />}/>
                <Route path="/teams"  element={<TeamsMeetingUI />}/>
                
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </TimerProvider>
  );
}

export default App;
