import { GlobalStyled } from "../../GlobalStyle.styled";
import { Layout } from "../Layout/Layout";
import { CardsList } from "../genres/CardsList/CardsList";
import { FilmPage } from "../pages/FilmPage/FilmPage";
import { GenresPage } from "../pages/GenresPage/GenresPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="genres" element={<GenresPage />}>
            <Route path=":genreId" element={<CardsList />} />
          </Route>
          <Route path=":filmId" element={<FilmPage />} />
          <Route path="*" element={<div>404 ERROR</div>} />
        </Route>
      </Routes>
      <GlobalStyled />
    </>
  );
}
