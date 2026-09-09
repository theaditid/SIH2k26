import React from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function SolutionDetail() {
  const {id}=useParams();
  return <><section className="detail-hero image-detail"><div><span className="badge">Water Management</span><span className="status">Pilot Deployment</span><h1>Smart Water Monitoring System</h1><p>Developed by XYZ University • Solution #{id}</p></div></section>
  <section className="section detail-layout"><article>
    <div className="content-card"><h2>About the Solution</h2><p>A low-cost IoT and mobile solution that monitors rural water quality and availability and presents actionable information to communities and local authorities.</p></div>
    <div className="content-card"><h2>Development Journey</h2><div className="journey">{["Problem Identified","Idea Submitted","Team Selected","Prototype","Field Testing","Pilot Deployment","Impact Measurement"].map((x,i)=><div key={x}><span>{i+1}</span><b>{x}</b></div>)}</div></div>
    <div className="content-card"><h2>Key Features</h2><ul className="feature-list"><li><CheckCircle2/> Low-cost sensor network</li><li><CheckCircle2/> Mobile dashboard</li><li><CheckCircle2/> Offline-friendly data collection</li><li><CheckCircle2/> Alerts for abnormal readings</li></ul></div>
  </article>
  <aside className="side-card"><h3>Impact</h3><div className="big-metric"><b>12</b><span>Villages</span></div><div className="big-metric"><b>2,400+</b><span>People Reached</span></div><div className="big-metric"><b>35%</b><span>Faster Response</span></div><hr/><p><b>Industry Partner</b><br/>ABC Technologies</p><Link className="primary-btn full" to="/stories">View Impact Story</Link></aside></section></>
}