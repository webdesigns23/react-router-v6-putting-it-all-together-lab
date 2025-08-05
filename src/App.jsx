import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DirectorContainer from './pages/DirectorContainer';
import DirectorList from './pages/DirectorList';
import DirectorForm from './pages/DirectorForm';
import DirectorCard from './pages/DirectorCard';
import MovieForm from './pages/MovieForm';
import MovieCard from './pages/MovieCard';

const App = () => {
    return (
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/directors' element={<DirectorContainer></DirectorContainer>}>
            <Route index element={<DirectorList></DirectorList>}></Route>
            <Route path='new' element={<DirectorForm></DirectorForm>}></Route>
            <Route path=':id' element={<DirectorCard></DirectorCard>}>
                <Route path='movies/new' element={<MovieForm></MovieForm>}></Route>
                <Route path='movies/:movieId' element={<MovieCard></MovieCard>}></Route>
            </Route>
        </Route>
       </Routes>
       </BrowserRouter>
    )
}

export default App