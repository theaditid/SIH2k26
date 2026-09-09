import React from "react";
import { Trophy, GraduationCap, FlaskConical, Building2, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  [Trophy,"Challenge Competitions","Solve selected real-world problems through team-based innovation."],
  [GraduationCap,"Student Innovation Programs","Work on community challenges with faculty and industry mentorship."],
  [FlaskConical,"Research Opportunities","Connect research expertise with practical societal problems."],
  [Building2,"Industry Challenges","Bring technical and business challenges into the ecosystem."],
  [Rocket,"Startup Opportunities","Turn validated solutions into scalable products."],
  [Users,"Fellowships & Internships","Gain real-world experience solving societal challenges."]
];

export default function Programs(){return <><section className="page-hero"><span className="eyebrow light">LEARN • BUILD • COLLABORATE</span><h1>Innovation & Participation Programs</h1><p>Programs that turn challenges into learning, research, prototypes and impact.</p></section><section className="section"><div className="program-grid">{programs.map(([Icon,t,d])=><article className="program-card" key={t}><span className="program-icon"><Icon/></span><h2>{t}</h2><p>{d}</p><Link to="/register" className="link-arrow">Learn More →</Link></article>)}</div></section></> }