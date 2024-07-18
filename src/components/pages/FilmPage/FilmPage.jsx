import { getFilm } from "../../../fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Title } from "../../../reapitedStyles";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { selectFilm } from "../../../redux/selectors";

const Description = styled.p`
  color: #000;

  font-family: "JetBrains Mono";
  font-size: 40px;
`;


const Wripper = styled.div`
padding: 0 30px 30px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

export function FilmPage() {
  const { filmId } = useParams();
  const film = useSelector(selectFilm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilm(filmId))
  }, [filmId, dispatch]);
  return (
    <section>
      {film && film.id === Number(filmId) && (
        <Wripper>
          <Title>{film.title}</Title>
          <img
            src={"https://image.tmdb.org/t/p/original" + film.poster_path}
            alt="poster"
            width="495px"
            height="782px"
          />
          <StarRatings
                    rating={film.vote_average / 2}
                    starRatedColor="#FF9F1C"
                    numberOfStars={5}
                    name="rating"
                    starEmptyColor="#AEB2BC"
                    starDimension="90px"
                  />
          <Description>{film.overview}</Description>
        </Wripper>
      )}
    </section>
  );
}
