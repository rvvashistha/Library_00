import React from "react";
import NavigationMenu from "./components/NavigationMenu";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LibrariesListPage from "./pages/LibrariesListPage";
import LibrariesDetailsPage from "./pages/LibrariesDetailsPage";
import AboutPage from "./pages/AboutPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
     <Container className="my-5">
     <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/libraries" element={<LibrariesListPage />}></Route>
        <Route path="/libraries/:id" element={<LibrariesDetailsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
     </Container>
    </div>
  );
}

export default App;
