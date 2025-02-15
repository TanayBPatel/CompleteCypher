// Notes.tsx
import React, { useState } from "react";
import { FileText, Plus, Star, Search, X, Link, Mail, Share2, Users, Globe, ChevronDown } from "lucide-react";

interface Note {
  title: string;
  subject: string;
  content: string;
  isFavourite: boolean;
  lastEdited: Date;
}

const initialNotes: Note[] = [
  { title: "Algebra Formulas", subject: "Mathematics", content: "", isFavourite: true, lastEdited: new Date() },
  { title: "Chemical Equations", subject: "Science", content: "", isFavourite: false, lastEdited: new Date() },
  { title: "Historical Dates", subject: "History", content: "", isFavourite: true, lastEdited: new Date() },
];

initialNotes.forEach((e) => {
  e.isFavourite = false;
})

const timeAgo = (date: Date) => {
  const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minute(s) ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour(s) ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} day(s) ago`;
  return `${Math.floor(diff / 2592000)} month(s) ago`;
};

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareOption, setShareOption] = useState("anyone");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<{ index: number; title: string } | null>(null);
  const [deleteInput, setDeleteInput] = useState("");


  const openModal = (note?: Note, index?: number) => {
    setEditIndex(index ?? null);
    setCurrentNote(note ? { ...note } : { title: "", subject: "", content: "", isFavourite: false, lastEdited: new Date() });
    setIsModalOpen(true);
  };



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveNote = () => {
    if (currentNote) {
      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes];

        if (editIndex !== null) {
          // Update existing note
          updatedNotes[editIndex] = { ...currentNote, lastEdited: new Date() };
        } else {
          // Add new note
          updatedNotes.push({ ...currentNote, lastEdited: new Date() });
        }

        return updatedNotes;
      });
    }
    setIsModalOpen(false);
    setEditIndex(null); // Reset edit index after saving
  };

  const openDeleteModal = (index: number) => {
    setNoteToDelete({ index, title: notes[index].title });
    setDeleteInput("");
    setIsDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
    setNoteToDelete(null);
  };

  const confirmDelete = () => {
    if (noteToDelete && deleteInput === noteToDelete.title) {
      setNotes((prevNotes) => prevNotes.filter((_, i) => i !== noteToDelete.index));
      closeDeleteModal();
      alert("Note deleted successfully!");
    } else {
      alert("Incorrect name. Note was not deleted.");
    }
  };



  const toggleFavourite = (index: number) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];

      updatedNotes[index].isFavourite = !updatedNotes[index].isFavourite;

      return updatedNotes;
    });
  };

  const deleteNote = (index: number) => {
    const noteToDelete = notes[index];

    const userInput = prompt(`Type the name of the note to confirm deletion: "${noteToDelete.title}"`);

    if (userInput === noteToDelete.title) {
      setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
      alert("Note deleted successfully!");
    } else {
      alert("Incorrect name. Note was not deleted.");
    }
  };


  const openShareModal = () => {
    setIsShareOpen(true);
  };

  const closeShareModal = () => {
    setIsShareOpen(false);
  };

  return (

    <div className="relative space-y-6">
      <div className={`${isModalOpen || isShareOpen ? "blur-md pointer-events-none" : ""}`}>
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notes</h1>
            <p className="text-gray-600 mt-2">Organize your learning materials</p>
          </div>
          <div className="flex space-x-4">

            <button onClick={() => openModal()} className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5" />
              <span>New Note</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  <span className="text-indigo-500 font-medium">{note.subject}</span>
                </div>
                <button onClick={() => toggleFavourite(index)} className="p-1">
                  <img
                    src={note.isFavourite
                      ? "/star-filled.png"
                      : "/star-empty.png"
                    }
                    alt="Favourite Star"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-gray-600 text-sm mt-2">Last edited {timeAgo(note.lastEdited)}</p>
              <div className="flex space-x-2 mt-4">
                <button onClick={() => openModal(note, index)} className="flex-1 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">Edit</button>

                <button onClick={openShareModal} className="flex-1 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100">Share</button>

                <button onClick={()=>openDeleteModal(index)} className=" bg-red-50 text-red-300 px-2 py-2 rounded-lg hover:bg-red-300 hover:text-red-600 text-center"><img src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" className="w-10 h-10 " alt="deleteBtn" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 h-4/5 relative flex flex-col">
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Edit Note</h2>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Title"
              value={currentNote?.title || ""}
              onChange={(e) => setCurrentNote({ ...currentNote!, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Subject"
              value={currentNote?.subject || ""}
              onChange={(e) => setCurrentNote({ ...currentNote!, subject: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              placeholder="Write your note here..."
              value={currentNote?.content || ""}
              onChange={(e) => setCurrentNote({ ...currentNote!, content: e.target.value })}
              className="flex-grow w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            {/* Save Button */}
            <button
              onClick={saveNote}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {isDeleteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeDeleteModal}>
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Type "<strong>{noteToDelete?.title}</strong>" to delete this note.</p>
            <input
              type="text"
              value={deleteInput}
              onChange={(e) => setDeleteInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-red-500"
              placeholder="Enter note name"
            />
            <button
              onClick={confirmDelete}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {isShareOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeShareModal}>
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Share the link with</h2>

            {/* Dropdown for selecting 'Anyone' or 'Specific People' */}
            <div className="relative">
              <div
                className="bg-gray-100 p-3 rounded-lg mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center">
                  {shareOption === "anyone" ? <Globe className="w-5 h-5 text-gray-500 mr-2" /> : <Users className="w-5 h-5 text-gray-500 mr-2" />}
                  <span>{shareOption === "anyone" ? "Anyone" : "Specific people"}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 w-full bg-white border rounded-lg shadow-md z-10">
                  <div className="flex items-center p-3 cursor-pointer hover:bg-gray-200" onClick={() => { setShareOption("anyone"); setIsDropdownOpen(false); }}>
                    <Globe className="w-5 h-5 text-gray-500 mr-2" />
                    <span>Anyone</span>
                  </div>
                  <div className="flex items-center p-3 cursor-pointer hover:bg-gray-200" onClick={() => { setShareOption("specific"); setIsDropdownOpen(false); }}>
                    <Users className="w-5 h-5 text-gray-500 mr-2" />
                    <span>Specific people</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Field (Always Visible) */}
            <input
              type="text"
              placeholder="To: name, group, or email"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Copy Link Button */}
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-4">
              <span className="truncate text-gray-700">https://yourapp.com/share-link</span>
              <button className="text-indigo-600 font-medium hover:underline" onClick={() => navigator.clipboard.writeText("https://yourapp.com/share-link")}>
                Copy Link
              </button>
            </div>

            {/* New Heading */}
            <h3 className="text-md font-semibold text-gray-700 mb-2 text-center">Or Send Directly Using...</h3>

            {/* Sharing Platforms with Better Spacing */}
            <div className="flex justify-center gap-3 mt-2 mb-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-100">
                <img src="/gmail.png" alt="Gmail" className="w-8 h-8" />
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-100">
                <img src="/drive.png" alt="Google Drive" className="w-8 h-8" />
              </button>
            </div>

            {/* Send Button */}
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;