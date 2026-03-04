import { PlayCircle } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

const replays = [
  { id: "1", reqId: "req_1", time: "2 mins ago", target: "http://localhost:3000", status: 200 },
  { id: "2", reqId: "req_3", time: "1 hour ago", target: "http://prod.api.internal", status: 500 }
];

export default function ReplaysPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)", margin: 0 }}><PlayCircle style={{ color: "var(--color-accent-primary)" }} /> Replay History</h1>
    <Card padding="none">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Request ID</th>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Target</th>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Status</th>
            <th style={{ textAlign: "right", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Replayed At</th>
          </tr>
        </thead>
        <tbody>
          {replays.map(r => (<tr key={r.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
            <td style={{ padding: "12px 16px" }}><span className="mono">{r.reqId}</span></td>
            <td style={{ padding: "12px 16px" }}><span className="mono" style={{ fontSize: "13px" }}>{r.target}</span></td>
            <td style={{ padding: "12px 16px" }}><Badge variant={r.status === 200 ? "success" : "danger"}>{r.status}</Badge></td>
            <td style={{ padding: "12px 16px", fontSize: "13px", color: "var(--color-text-secondary)", textAlign: "right" }}>{r.time}</td>
          </tr>))}
        </tbody>
      </table>
    </Card>
  </div>);
}
