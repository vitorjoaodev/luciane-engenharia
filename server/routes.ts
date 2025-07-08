import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send emails here
      // For now, we'll just log the message
      console.log(`New contact message from ${message.name} (${message.email}): ${message.message}`);
      
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        messageEn: "Message sent successfully! We will contact you soon."
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(400).json({ 
        success: false, 
        message: "Erro ao enviar mensagem. Tente novamente.",
        messageEn: "Error sending message. Please try again."
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar mensagens",
        messageEn: "Error fetching messages"
      });
    }
  });

  // Mark message as processed
  app.patch("/api/contact/messages/:id/processed", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markMessageAsProcessed(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking message as processed:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro ao processar mensagem",
        messageEn: "Error processing message"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
