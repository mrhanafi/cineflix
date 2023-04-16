

import { useEffect } from "react";
import {Card} from "../components/Card"
import useFetch from "../Hooks/useFetch";
import {useTitle} from "../Hooks/useTitle";

export const MovieList = ({apiPath,title}) => {

  // const [movies,setMovies] = useState([]);

  const {data:movies} = useFetch(apiPath);
  const pageTitle = useTitle(`${title}`);
  // useEffect(() => {
  //   document.title = `${title} / Cinemate`;
  // });
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie, index) => (
            <Card key={movie.id} movie={movie} />

          ))}
          

        </div>
      </section>
    </main>
  )
}
