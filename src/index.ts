import dotenv from 'dotenv';
import { initializeGitHubClient } from './api/github';
import { startServer } from './server';

// Load environment variables
dotenv.config();

async function main() {
  try {
    // Initialize GitHub client
    const gitHubClient = initializeGitHubClient();
    console.log('GitHub client initialized successfully');
    
    // Start the web server
    const port = process.env.PORT || 3000;
    startServer(port);
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error('Application startup failed:', error);
    process.exit(1);
  }
}

main();