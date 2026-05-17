import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    const { name, email, interest } = req.body;
    console.log(`New enrollment inquiry: ${name} (${email}) - Interest: ${interest}`);
    
    // In a real app, you would send an email or store in a DB
    res.status(200).json({ success: true, message: "Inquiry received" });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
