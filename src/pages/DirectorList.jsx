
const DirectorList = () => {
    // Replace me
    const directors = []

    const displayDirectors = directors.map(d => (
        <li><a>{d.name}</a></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
