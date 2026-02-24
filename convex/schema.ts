import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  endpoints: defineTable({ path: v.string(), relayUrl: v.string(), active: v.boolean() }).index("by_path", ["path"]),
  requests: defineTable({ endpointId: v.id("endpoints"), method: v.string(), headers: v.string(), body: v.string(), ip: v.string(), timestamp: v.string() }),
  replays: defineTable({ requestId: v.id("requests"), targetUrl: v.string(), status: v.number(), durationMs: v.number(), timestamp: v.string() })
});
