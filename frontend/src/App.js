import './App.css';
import { useRoutes } from "react-router";
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import routes from "./router";
import './styles/main.scss'


function App() {
  return (
    <div className="App">
      <AppHeader />
        <div className='page mt-5 mb-'>
          {useRoutes(routes)}
        </div>
      <AppFooter />
    </div>
  );
}

export default App;
