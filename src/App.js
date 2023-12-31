import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="mis-tareas-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
