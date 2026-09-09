import React from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Calendar, Users, Download, CheckCircle2 } from "lucide-react";

export default function ChallengeDetail() {
  const {id} = useParams();
  return <><section className="detail-hero"><div><span className="badge">Water Management</span><span className="status">Open for Solutions</span><h1>Drinking Water Quality Monitoring</h1><p className="muted"><MapPin size={15}/> Gumla, Jharkhand • Challenge #{id}</p></div><Link className="primary-btn" to={`/submit-solution/${id}`}>Submit a Solution</Link></section>
  <section className="section detail-layout"><article>
    <div className="content-card"><h2>Problem Statement</h2><p>Many villages face difficulties in monitoring drinking-water contamination and availability. Develop an affordable and reliable solution that can provide timely information to communities and local authorities.</p></div>
    <div className="content-card"><h2>Expected Outcome</h2><div className="pill-list"><span>Affordable</span><span>Rural-friendly</span><span>Low maintenance</span><span>Scalable</span></div></div>
    <div className="content-card"><h2>Challenge Requirements</h2><ul className="feature-list"><li><CheckCircle2/> Easy to operate in low-connectivity areas</li><li><CheckCircle2/> Provide useful, timely data</li><li><CheckCircle2/> Support community and local administration</li><li><CheckCircle2/> Include an implementation plan</li></ul></div>
    <div className="content-card"><h2>Discussion</h2><p>Use the discussion area to ask questions, form teams and connect with mentors.</p><button className="outline-btn">Join Discussion</button></div>
  </article>
  <aside className="side-card"><h3>Challenge Timeline</h3>{["Challenge Posted","Evaluation","Team Shortlisting","Prototype","Pilot","Implementation"].map((x,i)=><div className="timeline" key={x}><span>{i+1}</span><div><b>{x}</b><small>{i===0?"10 Apr 2026":i===5?"30 Aug 2026":"Upcoming"}</small></div></div>)}<hr/><h3>Attachments</h3><div className="file"><Download size={16}/> Challenge Brief.pdf</div><div className="file"><Download size={16}/> Technical Requirements.pdf</div></aside></section></>
}