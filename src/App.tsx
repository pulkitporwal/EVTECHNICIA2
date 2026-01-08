import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AboutOrganizerPage from "./pages/AboutOrganizerPage";
import ExhibitPage from "./pages/ExhibitPage";
import VisitorPage from "./pages/VisitorPage";
import MarketPage from "./pages/MarketPage";
import DownloadsPage from "./pages/DownloadsPage";
import OtherInformationPage from "./pages/OtherInformationPage";
import ExhibitRegistrationPage from "./pages/ExhibitRegistrationPage";
import VisitorRegistrationPage from "./pages/VisitorRegistrationPage";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => {
  return (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-organizer" element={<AboutOrganizerPage />} />
          <Route path="/exhibit" element={<ExhibitPage />} />
          <Route path="/exhibit-registration" element={<ExhibitRegistrationPage />} />
          <Route path="/visitor-registration" element={<VisitorRegistrationPage />} />
          <Route path="/visitors" element={<VisitorPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/other-information" element={<OtherInformationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)};

export default App;
