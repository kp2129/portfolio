import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Education" element={<Education />} />
          <Route path="Contacts" element={<Contact />} />
          <Route path="*" element={<NoPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);