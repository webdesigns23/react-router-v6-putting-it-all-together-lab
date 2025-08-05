import {Outlet, Link, useParams, useOutletContext} from 'react-router-dom';

function DirectorCard() {
    debugger;
    const {id}= useParams();
    const context=useOutletContext();
    const directors = context?.directors ??[];
    const director = directors.find((d)=>d.id === parseInt(id));

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Create Movie</Link>
            <Outlet context={{director}}></Outlet>
        </div>
    )
}

export default DirectorCard