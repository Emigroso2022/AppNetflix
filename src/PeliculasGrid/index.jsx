import peliculas from "../peliculas.json";
import { PeliculasCard } from "../PeliculasCard";
import "./PeliculasGrid.css"

export function PeliculasGrid() {
  
  return (
    <ul className="moviesGrid">
      {peliculas.map((pelicula) => (//Recorro el json y me traigo todo en la varable pelicula. // si paso una linea 
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />// Coponente lo paso pelcula por pelcula .Te pide calve id 
      ))}
    </ul>
  );
}
