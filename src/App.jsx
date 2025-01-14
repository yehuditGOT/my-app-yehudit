import './App.css';
import { MyApp } from './components/MyApp';
import { Myprovider } from './Contexts/Contexts';
import { BrowserRouter } from 'react-router-dom';
import { CreateStor } from './Contexts/stor';
function App() {
  const stor = CreateStor();
 
  return<>
      <Myprovider value={stor}>
        <BrowserRouter>
          <MyApp/> 
       </BrowserRouter>
      </Myprovider>
  
</>}
export default App;






