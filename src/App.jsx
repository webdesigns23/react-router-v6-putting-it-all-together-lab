import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/directors" element={<DirectorContainer />}>
                    <Route path="" element={<DirectorList />} />
                    <Route path="new" element={<DirectorForm />} />
                    <Route path=":id" element={<DirectorCard />} />
                        <Route path="movies/new" element={<MovieForm />} />
                        <Route path="movie/:movieId" element={<MovieCard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
