import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import NavBar from './components/NavBar'


const App = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   let savedMode = localStorage.getItem("displayMode");
  //   if (!savedMode) {
  //     savedMode = "light";
  //     setDarkMode(false);
  //     localStorage.setItem("displayMode", savedMode);
  //   }
  //   setDarkMode(savedMode === "dark" ? true : false);
  // }, [])

  // const toggleDisplaymode = () => {
  //   setDarkMode(!darkMode);
  // }
  return (
    <div >
      {/* <div >
        <button onCanPlay={() => toggleDisplaymode()}>{darkMode ? "Light" : "Dark"}</button>
      </div> */}
      <NavBar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/" element={<Create />} />

      </Routes>
    </div>
  )
}

export default App