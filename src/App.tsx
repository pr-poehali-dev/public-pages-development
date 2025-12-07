
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Index />} />
          <Route path="/register" element={<Index />} />
          <Route path="/editor/site/:id" element={<Dashboard />} />
          <Route path="/editor/bot/:id" element={<Dashboard />} />
          <Route path="/dashboard/ads" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Dashboard />} />
          <Route path="/dashboard/statistics" element={<Dashboard />} />
          <Route path="/university" element={<Dashboard />} />
          <Route path="/exchange" element={<Dashboard />} />
          <Route path="/marketplace" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
          <Route path="/dashboard/ai-chat" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;