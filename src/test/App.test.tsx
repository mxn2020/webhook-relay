import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import InboxPage from "../pages/InboxPage"; import ForwardingPage from "../pages/ForwardingPage"; import ReplaysPage from "../pages/ReplaysPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
  it("Sidebar renders", () => { wrap(<Sidebar/>); expect(screen.getByText("Webhook Relay")).toBeInTheDocument(); });
  it("InboxPage renders", () => { wrap(<InboxPage/>); expect(screen.getByText("/hooks/stripe")).toBeInTheDocument(); });
  it("ForwardingPage renders", () => { wrap(<ForwardingPage/>); expect(screen.getByText("http://localhost:3000/api/webhooks/stripe")).toBeInTheDocument(); });
  it("ReplaysPage renders", () => { wrap(<ReplaysPage/>); expect(screen.getByText("req_1")).toBeInTheDocument(); });
});
