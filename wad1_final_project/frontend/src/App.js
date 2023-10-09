import {RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/custom.css';
import createRouter from './routes/ProjectRoute';
import {useEffect} from "react";
import Footer from "./components/Footer";

function App() {
  const router = createRouter();

  useEffect(() => {
    const handleErrors = (error, info) => {
        console.error('Error caught by error boundary:', error, info);
        window.location.href = '/error';
    };
    window.addEventListener('error', handleErrors);

    return () => {
        window.removeEventListener('error', handleErrors);
    };
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </div>
  );
}

export default App;
