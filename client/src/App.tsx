import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateNote } from "./pages/CreateNotes";
import { Home } from "./pages/Home";
import { ViewNotes } from "./pages/ViewNotes";
import { AppBar } from "./components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen w-screen p-5">
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateNote" element={<CreateNote />} />
          <Route path="/ViewNotes/:notesId" element={<ViewNotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
