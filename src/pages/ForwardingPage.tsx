import { Forward, Plus } from "lucide-react";
const rules = [
  { id:"1", path:"/hooks/stripe", destination:"http://localhost:3000/api/webhooks/stripe", active:true },
  { id:"2", path:"/hooks/github", destination:"http://192.168.1.100:8080/github-event", active:false }
];
export default function ForwardingPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Forward style={{color:"var(--color-accent-primary)"}}/> Forwarding Rules</h1>
      <button className="btn btn-primary"><Plus size={16}/> Add Rule</button>
    </div>
    <div style={{display:"grid",gap:"var(--space-4)"}}>
      {rules.map(r=>(<div key={r.id} className="card" style={{padding:"var(--space-5)",borderLeft:r.active?"3px solid var(--color-success)":"3px solid var(--color-border)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
          <div className="mono" style={{fontSize:"16px",fontWeight:600}}>{r.path}</div>
          <Forward size={16} style={{color:"var(--color-text-tertiary)"}}/>
          <div className="mono" style={{fontSize:"14px",color:"var(--color-text-secondary)"}}>{r.destination}</div>
          <div style={{marginLeft:"auto"}}>
            <span className={`badge ${r.active?"badge-green":"badge-red"}`}>{r.active?"Active":"Disabled"}</span>
          </div>
        </div>
      </div>))}
    </div>
  </div>);
}
