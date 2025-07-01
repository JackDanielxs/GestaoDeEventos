
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Bot, DollarSign, Users, Clock } from 'lucide-react';

const Eventos = () => {
  const eventos = [
    {
      id: 1,
      nome: 'Festival de Música 2024',
      data: '15/07/2024',
      etapa: 'Execução',
      progresso: 75,
      despesas: 'R$ 45.000',
      status: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      nome: 'Conferência Tech',
      data: '22/07/2024',
      etapa: 'Preparação',
      progresso: 60,
      despesas: 'R$ 28.000',
      status: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      nome: 'Feira de Negócios',
      data: '05/08/2024',
      etapa: 'Planejamento',
      progresso: 30,
      despesas: 'R$ 12.000',
      status: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const etapas = [
    { nome: 'Planejamento', descricao: 'Definição de escopo e objetivos' },
    { nome: 'Preparação', descricao: 'Organização de recursos e logística' },
    { nome: 'Execução', descricao: 'Realização do evento' },
    { nome: 'Prestação de Contas', descricao: 'Relatórios e análises finais' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Gestão de Eventos</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Bot className="h-4 w-4 mr-2" />
            Sugestão IA
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        </div>
      </div>

      {/* Etapas do Evento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Etapas do Processo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {etapas.map((etapa, index) => (
              <div key={etapa.nome} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-medium">
                  {index + 1}
                </div>
                <h3 className="font-medium text-gray-800 mb-1">{etapa.nome}</h3>
                <p className="text-xs text-gray-600">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista de Eventos */}
      <div className="grid grid-cols-1 gap-6">
        {eventos.map((evento) => (
          <Card key={evento.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-gray-800">{evento.nome}</CardTitle>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <Calendar className="h-4 w-4" />
                    {evento.data}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${evento.status}`}>
                  {evento.etapa}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{evento.progresso}%</span>
                  </div>
                  <Progress value={evento.progresso} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {evento.despesas}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      5 Prestadores
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      12 Tarefas
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Gerenciar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-sm text-gray-500 text-center">
        feito por Daniel Marques
      </div>
    </div>
  );
};

export default Eventos;
