
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';



function App() {   //컴포넌트는 함수 이름으로 불린다. 첫글자는 대문자로 시작해야 한다. //App컴포넌트는 부모 
      return (
  <>
   <Button text={"메일"} color={"red"}/>
   <Button text={"카페"}/>
   <Button text={"블로그"}/>
  </>
 );
}

export default App;
