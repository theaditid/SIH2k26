import React from "react";
import { Link } from "react-router-dom";

const groups = [
  ["Government",["Government of Jharkhand","Department of Higher & Technical Education","Department of Agriculture","Department of Water Resources"]],
  ["Universities & HEIs",["IIT (ISM) Dhanbad","NIT Jamshedpur","Ranchi University","Birla Institute of Technology"]],
  ["Industries",["Tata Steel","SBI","Jindal Steel & Power","Infosys"]],
  ["Startups",["AgriTech","HealthTech","EdTech","CleanTech"]],
  ["NGOs / Community Organizations",["Pratham","SEWA","Aajeevika","Community Partners"]]
];

export default function Partners(){return <><section className="page-hero"><span className="eyebrow light">THE ECOSYSTEM</span><h1>Building Solutions Together</h1><p>Government, academia, industry, startups and communities working together for a better Jharkhand.</p></section><section className="section"><div className="partner-cta"><div><h2>Become part of the innovation ecosystem.</h2><p>Contribute expertise, technology, mentorship, funding or implementation support.</p></div><Link to="/partners/join" className="primary-btn">Become a Partner</Link></div>{groups.map(([name,items])=><div className="partner-group" key={name}><div className="section-head"><h2>{name}</h2><span>View all →</span></div><div className="logo-grid">{items.map(x=><div className="logo-card" key={x}>◉<b>{x}</b></div>)}</div></div>)}</section></> }