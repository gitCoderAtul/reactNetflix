import logo from './logo.svg';
import './App.css'; 
import Body from './components/Body.js';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore.js';
 
function App() { 
  return (  
    <Provider store={appStore}>
    <Body></Body>
    </Provider>
  );
} 

export default App;
