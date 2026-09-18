import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import BeforeYourEstimate from "./pages/BeforeYourEstimate";
import Cost from "./pages/Cost";
import WoodPrivacy from "./pages/WoodPrivacy";
import Vinyl from "./pages/Vinyl";
import Aluminum from "./pages/Aluminum";
import ChainLink from "./pages/ChainLink";
import Minneapolis from "./pages/Minneapolis";
import Projects from "./pages/Projects";
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
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/before-your-estimate"
            element={<BeforeYourEstimate />}
          />
          <Route path="/fence-cost" element={<Cost />} />
          <Route path="/wood-privacy-fence" element={<WoodPrivacy />} />
          <Route path="/vinyl-fence" element={<Vinyl />} />
          <Route path="/aluminum-fence" element={<Aluminum />} />
          <Route path="/chain-link-fence" element={<ChainLink />} />
          <Route
            path="/fence-installation-minneapolis-mn"
            element={<Minneapolis />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
