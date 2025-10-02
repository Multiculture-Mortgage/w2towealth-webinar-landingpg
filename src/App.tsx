import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FriendInvite from "./pages/FriendInvite";
import NotFound from "./pages/NotFound";
import DebugToggle from "@/components/DebugToggle";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import { useNavigate, useSearchParams } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [searchParams, navigate]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize Facebook Pixel
    ReactPixel.init('1498530354084781', undefined, {
      autoConfig: true,
      debug: false,
    });
    ReactPixel.pageView();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RedirectHandler />
          <DebugToggle onToggle={() => {}} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/friend-invite" element={<FriendInvite />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
