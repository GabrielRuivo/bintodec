import React, {useState, Fragment} from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./global";
import styled from "styled-components";

import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

 
import './App.css';

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  const [binary, setBinary] = useState('');
  const [decimal, setdecimal] = useState('');

  function Converter() {

    if(isNaN(binary)) {
      alert('Invalid Value, please try again')
      document.location.reload(true)
    } else {
      let str = binary;
      let bin = (+str).toString(2);
      setdecimal(bin)
    }
  }

  return (
    <>
    <div className="icon-light-dark">
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Fragment>
            <GlobalTheme />
              <Container>
                <Title onClick={toggleTheme}>
                  {theme === "light" ? <span><FaMoon/>Dark Theme</span> : <span><FiSun/>Light Theme</span>}
                </Title>
              </Container>
          </Fragment>
        </ThemeProvider>
      </div>
    
    <div className="container">
      
    
    <form className="box" >

      <h3>Conversor decimal to binary</h3>

      <label className="label-binary" htmlFor="binary">
        Decimal:
        <input 
          name="binary"
          className="input-binary" 
          type="text" 
          placeholder="Decimal Here" 
          value={binary}
          onChange={e => setBinary(e.target.value)}
        /> 
      </label>
      <label htmlFor="decimal">
        Binary:
        <input 
          disabled
          className="decimal-result" 
          type="text" 
          placeholder="result" 
          value={decimal}
          onChange={e => setdecimal(e.target.value)}
        />       
      </label>
      <button className="btn-converter" type="button" onClick={Converter}>Convert</button>
    </form>
    </div>
  </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
`;


export default App;
