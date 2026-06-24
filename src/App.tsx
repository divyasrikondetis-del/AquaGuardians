import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WaterQualityPage from "./pages/WaterQualityPage";
import DiseaseSurveillancePage from "./pages/DiseaseSurveillancePage";
import AlertsPage from "./pages/AlertsPage";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/water-quality" element={<WaterQualityPage />} />
          <Route path="/disease-surveillance" element={<DiseaseSurveillancePage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/dashboard" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
