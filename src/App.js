
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddClient } from './components/AddClient/AddClient';
import { Clients } from './components/Clients/Clients';
import { Search } from './components/Search/Search';
import { selectStreets } from './store/ducks/adresses/selectors';
import { fetchStreets } from './store/ducks/adresses/thunks';

function App() {
  const dispatch = useDispatch()
  const streets = useSelector(selectStreets)

  useEffect(() => {
    dispatch(fetchStreets())
  }, [dispatch])
  return (
    <div className="App">
      <div className="appWraper">
        <Search streets={streets} />
        <AddClient />
        <Clients />
      </div>
    </div>
  );
}

export default App;
