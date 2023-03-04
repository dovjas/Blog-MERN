import './App.css'

import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./components/pages/CreatePost";


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<Index />}/>
          <Route path={'/login'} element = {<Login />} />
          <Route path={'/register'} element = {<Register />} />
          <Route path={'/create'} element = {<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
    );
}

export default App;
