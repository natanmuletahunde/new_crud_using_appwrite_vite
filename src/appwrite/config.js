import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT) // Or your self-hosted URL
  .setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your actual project ID
const databases = new Databases(client);
export { client, databases };