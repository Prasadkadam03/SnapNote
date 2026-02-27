import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { CircleChevronRight, X } from "lucide-react";

export const CreateNote = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  if (!editor) return null;

  const generateNote = () => {
    const html = editor.getHTML();
    console.log(html);
  };

  const clearNote = () => {
    editor.commands.clearContent();
    setActiveButton(null);
    console.log("Editor content cleared");
  };

  const handleButtonClick = (button: string, action: () => void) => {
    setActiveButton(button);
    action();
  };

  return (
    <div className="min-h-[80vh] flex justify-center text-white pt-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Create a Note
        </h1>

        <div className="border border-white/10 mt-6 rounded-xl">
          <div className="flex gap-2  flex-wrap p-2 ">
            <button
              onClick={() =>
                handleButtonClick("H1", () =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "H1" ? "bg-blue-600" : "bg-white/10"}`}
              title="Heading 1"
            >
              H1
            </button>

            <button
              onClick={() =>
                handleButtonClick("H2", () =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "H2" ? "bg-blue-600" : "bg-white/10"}`}
              title="Heading 2"
            >
              H2
            </button>

            <button
              onClick={() =>
                handleButtonClick("Bold", () =>
                  editor.chain().focus().toggleBold().run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "Bold" ? "bg-blue-600" : "bg-white/10"}`}
              title="Bold"
            >
              Bold
            </button>

            <button
              onClick={() =>
                handleButtonClick("Italic", () =>
                  editor.chain().focus().toggleItalic().run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "Italic" ? "bg-blue-600" : "bg-white/10"}`}
              title="Italic"
            >
              Italic
            </button>

            <button
              onClick={() =>
                handleButtonClick("Underline", () =>
                  editor.chain().focus().toggleUnderline().run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "Underline" ? "bg-blue-600" : "bg-white/10"}`}
              title="Underline"
            >
              U
            </button>

            <button
              onClick={() =>
                handleButtonClick("Strikethrough", () =>
                  editor.chain().focus().toggleStrike().run(),
                )
              }
              className={`px-3 py-1 rounded text-sm ${activeButton === "Strikethrough" ? "bg-blue-600" : "bg-white/10"}`}
              title="Strikethrough"
            >
              S
            </button>
          </div>

          <div className=" p-5 bg-gray-950 border border-white/10 rounded-b-xl">
            <EditorContent editor={editor} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 gap-2">
          <button
            onClick={generateNote}
            className="flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-md"
          >
            Generate Note
            <CircleChevronRight size={18} />
          </button>
          <button
            onClick={clearNote}
            className="flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-md"
          >
            Clear all
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
