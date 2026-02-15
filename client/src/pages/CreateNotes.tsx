import { CircleChevronRight } from "lucide-react";
import { useState } from "react";

export const CreateNote = () => {
  const [noteText, setNotetext] = useState("");

  const generateNote = () => {
    console.log(noteText);
  };

  return (
    <div className="min-h-[80vh] flex justify-center text-white pt-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Create a note
        </h1>

        <div className="mt-6 bg-gray-900 border border-white/10 rounded-xl">
          <div className="p-5">
            <textarea
              value={noteText}
              onChange={(e) => setNotetext(e.target.value)}
              placeholder="Start writing your idea..."
              className="w-full h-72 bg-transparent outline-none resize-none text-white placeholder-white/40"
            />

            <div className="w-full flex justify-center mt-4">
              <button
                onClick={generateNote}
                className="flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-md"
              >
                Generate Note
                <CircleChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
