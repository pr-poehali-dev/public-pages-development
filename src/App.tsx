
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SiteEditor from "./pages/SiteEditor";
import BotEditor from "./pages/BotEditor";
import Ads from "./pages/Ads";
import Products from "./pages/Products";
import Statistics from "./pages/Statistics";
import University from "./pages/University";
import AIChat from "./pages/AIChat";
import Exchange from "./pages/Exchange";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor/site/:id" element={<SiteEditor />} />
          <Route path="/editor/bot/:id" element={<BotEditor />} />
          <Route path="/dashboard/ads" element={<Ads />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/statistics" element={<Statistics />} />
          <Route path="/university" element={<University />} />
          <Route path="/dashboard/ai-chat" element={<AIChat />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;