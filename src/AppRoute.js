import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  );
}
