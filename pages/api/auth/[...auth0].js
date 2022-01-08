import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "https://www.qraftstore.com",
      // returnTo: "http://localhost:3000",
    });
  },
});
