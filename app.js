
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { getFeedbackCount, incrementFeedbackCount } from "./feedbacks.js";

const app = new Hono();

// GET /feedbacks/:id - Return the current count of feedbacks for the given id
app.get("/feedbacks/:id", async (c) => {
  const feedbackId = c.req.param("id");
  const count = await getFeedbackCount(feedbackId); // Get the current feedback count
  return c.text(`Feedback ${feedbackId}: ${count}`);
});

// POST /feedbacks/:id - Increment the feedback count for the given id
app.post("/feedbacks/:id", async (c) => {
  const feedbackId = c.req.param("id");
  await incrementFeedbackCount(feedbackId); // Increment the feedback count
  const count = await getFeedbackCount(feedbackId); // Get the updated feedback count
  return c.text(`Feedback ${feedbackId}: ${count}`);
});

export default app;
