import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';

function App() {
  return (
        
      <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <h1>ToDo Application</h1>
        <Addtask />
        <ListTask />
        </header>
      </div>
    </Provider>
  );
}

export default App;
