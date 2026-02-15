import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="w-full md:w-2/3 mx-auto h-16 flex items-center justify-center text-white text-3xl font-bold border-b border-white/10 cursor-pointer"
    >
      SnapNote
    </div>
  );
};
