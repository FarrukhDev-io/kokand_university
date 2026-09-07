import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeshGradient from "./components/MeshGradient";
import ClickSpark from "./components/ui/ClickSpark";
import { useAutoFullscreen } from "./hooks/useAutoFullscreen";

const queryClient = new QueryClient();

const AppContent = () => {
  const { theme } = useTheme();
  
  // Try to force fullscreen on mobile upon first interaction
  useAutoFullscreen();
  
  // Use White for dark mode, Burgundy for light mode so it's always highly visible
  const sparkColor = theme === "dark" ? "#ffffff" : "#9C1447"; 

  return (
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <MeshGradient />
          <ClickSpark
            sparkColor={sparkColor}
            sparkSize={12}
            sparkRadius={18}
            sparkCount={12}
            duration={500}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ClickSpark>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
