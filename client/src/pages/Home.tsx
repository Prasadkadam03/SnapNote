import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[80vh] text-white">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Capture ideas instantly.
        </h1>

        <p className="mt-4 text-white/60">
          SnapNote lets you create and share notes in seconds. No clutter. Just
          writing.
        </p>

        <button
          onClick={() => navigate("/CreateNote")}
          className="inline-flex mt-8 px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
        >
          <Plus /> {"  "}Create a note
        </button>
      </div>
    </div>
  );
};
