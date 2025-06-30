
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Cadastros from "./pages/Cadastros";
import Eventos from "./pages/Eventos";
import Ingressos from "./pages/Ingressos";
import Comunicacao from "./pages/Comunicacao";
import Sac from "./pages/Sac";
import Relatorios from "./pages/Relatorios";
import Seguranca from "./pages/Seguranca";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="cadastros" element={<Cadastros />} />
            <Route path="eventos" element={<Eventos />} />
            <Route path="ingressos" element={<Ingressos />} />
            <Route path="comunicacao" element={<Comunicacao />} />
            <Route path="sac" element={<Sac />} />
            <Route path="relatorios" element={<Relatorios />} />
            <Route path="seguranca" element={<Seguranca />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
