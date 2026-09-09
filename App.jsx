import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import ChallengeDetail from "./pages/ChallengeDetail";
import SubmitChallenge from "./pages/SubmitChallenge";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import BecomePartner from "./pages/BecomePartner";
import Impact from "./pages/Impact";
import DistrictDetail from "./pages/DistrictDetail";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SolutionSubmission from "./pages/SolutionSubmission";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengeDetail />} />
        <Route path="/submit-challenge" element={<SubmitChallenge />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:id" element={<SolutionDetail />} />
        <Route path="/submit-solution/:challengeId" element={<SolutionSubmission />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/join" element={<BecomePartner />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/impact/district/:district" element={<DistrictDetail />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;