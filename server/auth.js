import { clients, sessions } from '@clerk/clerk-sdk-node';
import Cookies from 'cookies';

export const authenticateUser = async (req, res) => {
  // Retrieve the particular session ID from a
  // query string parameter
  const sessionId = req.query._clerk_session_id;

  // Note: Clerk stores the clientToken in a cookie
  // named "__session" for Firebase compatibility
  const cookies = new Cookies(req, res);
  const clientToken = cookies.get('__session');

  const session = await sessions.verifySession(sessionId, clientToken);
};

export const lastActiveSession = async (req, res) => {
  // Note: Clerk stores the clientToken in a cookie
  // named "__session" for Firebase compatibility
  const cookies = new Cookies(req, res);
  const clientToken = cookies.get('__session');

  const client = await clients.verifyClient(clientToken);
  const sessionId = client.lastActiveSessionId;

  const session = await sessions.verifySession(sessionId, clientToken);
};
