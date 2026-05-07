import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/index";
import ProjectPage from "./components/pages/project";
import ProjectIdPage from "./components/pages/project-id";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}
