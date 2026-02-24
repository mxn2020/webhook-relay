import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import InboxPage from "./pages/InboxPage";
import ForwardingPage from "./pages/ForwardingPage";
import ReplaysPage from "./pages/ReplaysPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<InboxPage />} /> <Route path="/forwarding" element={<ForwardingPage />} />
        <Route path="/replays" element={<ReplaysPage />} /> <Route path="/settings" element={<ReplaysPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
