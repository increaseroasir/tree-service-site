import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/lib/content";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import WhatToExpect from "./pages/WhatToExpect";
import Cost from "./pages/Cost";
import TreeRemoval from "./pages/TreeRemoval";
import TreeTrimming from "./pages/TreeTrimming";
import StumpGrinding from "./pages/StumpGrinding";
import Emergency from "./pages/Emergency";
import Minneapolis from "./pages/Minneapolis";
import RecentWork from "./pages/RecentWork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Index />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.whatToExpect} element={<WhatToExpect />} />
          <Route path={ROUTES.cost} element={<Cost />} />
          <Route path={ROUTES.removal} element={<TreeRemoval />} />
          <Route path={ROUTES.trimming} element={<TreeTrimming />} />
          <Route path={ROUTES.stump} element={<StumpGrinding />} />
          <Route path={ROUTES.emergency} element={<Emergency />} />
          <Route path={ROUTES.minneapolis} element={<Minneapolis />} />
          <Route path={ROUTES.work} element={<RecentWork />} />
          <Route path={`${ROUTES.work}/:slug`} element={<RecentWork />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
