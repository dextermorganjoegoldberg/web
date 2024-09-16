
// feedbacks.js

// Function to retrieve the current count of feedback for a specific feedback value
export const getFeedbackCount = async (feedbackId) => {
  const kv = await Deno.openKv(); // Open the KV store
  const result = await kv.get(["feedback", feedbackId]); // Retrieve the value for the feedback key
  
  // If no value is found, return 0
  if (result.value === undefined) {
    return 0;
  }
  
  return result.value; // Return the count of feedbacks
};

// Function to increment the feedback count by 1
export const incrementFeedbackCount = async (feedbackId) => {
  const kv = await Deno.openKv(); // Open the KV store
  const currentCount = await getFeedbackCount(feedbackId); // Retrieve the current count
  await kv.set(["feedback", feedbackId], currentCount + 1); // Increment the count and store it
};
