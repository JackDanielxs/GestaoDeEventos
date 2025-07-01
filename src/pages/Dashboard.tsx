
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, TrendingUp, MessageSquare, Share2, Bot } from 'lucide-react';

const Dashboard = () => {
  const eventStages = [
    { name: 'Planejamento', count: 5, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Preparação', count: 3, color: 'bg-blue-100 text-blue-800' },
    { name: 'Execução', count: 2, color: 'bg-green-100 text-green-800' },
    { name: 'Prestação de Contas', count: 1, color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="h-4 w-4 mr-2" />
          Novo Evento
        </Button>
      </div>

      {/* Cards de Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventStages.map((stage) => (
          <Card key={stage.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stage.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-800">
                  {stage.count}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${stage.color}`}>
                  Ativo
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Acesso Rápido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Acesso Rápido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Relatórios
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              SAC
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Share2 className="h-4 w-4 mr-2" />
              Painel de Mídia
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bot className="h-4 w-4 mr-2" />
              IA - Sugestão de Fluxo
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Eventos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Festival de Música</p>
                  <p className="text-sm text-gray-600">15/07/2024</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Em execução
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Conferência Tech</p>
                  <p className="text-sm text-gray-600">22/07/2024</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  Preparação
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-gray-500 text-center">
        feito por Daniel Marques
      </div>
    </div>
  );
};

export default Dashboard;
