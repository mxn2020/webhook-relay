import { Inbox, Copy, RefreshCw, Trash2, ArrowRight } from "lucide-react";
const requests = [
  { id:"req_1", method:"POST", path:"/hooks/stripe", size:"2.4kb", time:"14:23:45", status: 200 },
  { id:"req_2", method:"POST", path:"/hooks/github", size:"45kb", time:"14:21:12", status: 200 },
  { id:"req_3", method:"GET", path:"/hooks/custom", size:"0.1kb", time:"14:15:02", status: 404 }
];
export default function InboxPage() {
  return (<div style={{display:"flex",height:"100vh"}}>
    <div style={{width: 350, borderRight:"1px solid var(--color-border)", display:"flex", flexDirection:"column", background:"var(--color-bg-secondary)"}}>
      <div style={{padding:"var(--space-4)", borderBottom:"1px solid var(--color-border)", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2 style={{fontSize:"14px", fontWeight:700, textTransform:"uppercase", display:"flex", alignItems:"center", gap:"var(--space-2)"}}><Inbox size={16}/> Requests</h2>
        <div style={{display:"flex", gap:"var(--space-1)"}}>
          <button className="btn btn-ghost btn-sm" style={{padding:4}}><RefreshCw size={14}/></button>
          <button className="btn btn-ghost btn-sm" style={{padding:4, color:"var(--color-error)"}}><Trash2 size={14}/></button>
        </div>
      </div>
      <div style={{flex:1, overflowY:"auto"}}>
        {requests.map((r, i)=>(<div key={r.id} style={{padding:"var(--space-3) var(--space-4)", borderBottom:"1px solid var(--color-border)", background:i===0?"var(--color-bg-hover)":"transparent", cursor:"pointer", borderLeft:i===0?"3px solid var(--color-accent-primary)":"3px solid transparent"}}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:4}}>
            <span className={`badge ${r.status===200?"badge-green":"badge-red"}`}>{r.status} {r.method}</span>
            <span className="mono" style={{fontSize:11, color:"var(--color-text-tertiary)"}}>{r.time}</span>
          </div>
          <div className="mono" style={{fontSize:13, fontWeight:600}}>{r.path}</div>
          <div style={{fontSize:11, color:"var(--color-text-tertiary)", marginTop:4}}>{r.size} • from 192.168.1.1</div>
        </div>))}
      </div>
    </div>
    
    <div style={{flex:1, overflowY:"auto", padding:"var(--space-6)"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"var(--space-6)"}}>
        <div>
          <h1 className="mono" style={{fontSize:"var(--font-size-xl)", fontWeight:700, marginBottom:4}}>/hooks/stripe</h1>
          <div style={{fontSize:"13px", color:"var(--color-text-secondary)"}}>req_1 • 14:23:45 • Passed 1 forwarding rule</div>
        </div>
        <button className="btn btn-primary"><RefreshCw size={16}/> Replay</button>
      </div>

      <div style={{display:"flex", gap:"var(--space-2)", marginBottom:"var(--space-6)"}}>
        <div style={{border:"1px solid var(--color-border)", padding:"var(--space-1) var(--space-3)", borderRadius:"var(--radius-sm)", fontSize:"12px", display:"flex", alignItems:"center", gap:8}}><strong className="mono">Target:</strong> http://localhost:3000/webhook</div>
        <ArrowRight size={14} style={{color:"var(--color-text-tertiary)", marginTop:6}}/>
        <div style={{border:"1px solid var(--color-success)", background:"var(--color-success-soft)", color:"var(--color-success)", padding:"var(--space-1) var(--space-3)", borderRadius:"var(--radius-sm)", fontSize:"12px", fontWeight:700}}>200 OK (15ms)</div>
      </div>

      <h3 style={{fontSize:"14px", fontWeight:700, textTransform:"uppercase", marginBottom:"var(--space-3)"}}>Headers</h3>
      <pre className="json-block" style={{marginBottom:"var(--space-6)"}}>
<span className="json-key">"stripe-signature"</span>: <span className="json-string">"t=1698157425,v1=..."</span><br/>
<span className="json-key">"content-type"</span>: <span className="json-string">"application/json"</span>
      </pre>

      <h3 style={{fontSize:"14px", fontWeight:700, textTransform:"uppercase", marginBottom:"var(--space-3)"}}>JSON Payload</h3>
      <pre className="json-block">
{`{
  `}<span className="json-key">"id"</span>{`: `}<span className="json-string">"evt_1Oxxx"</span>{`,
  `}<span className="json-key">"object"</span>{`: `}<span className="json-string">"event"</span>{`,
  `}<span className="json-key">"type"</span>{`: `}<span className="json-string">"payment_intent.succeeded"</span>{`,
  `}<span className="json-key">"data"</span>{`: {
    `}<span className="json-key">"object"</span>{`: { ... }
  }
}`}
      </pre>
    </div>
  </div>);
}
