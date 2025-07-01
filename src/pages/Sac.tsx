
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Bot, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

const Sac = () => {
  const tickets = [
    {
      id: '#001',
      usuario: 'Maria Silva',
      assunto: 'Problema com ingresso',
      status: 'Aberto',
      prioridade: 'Alta',
      data: '03/07/2024',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: '#002',
      usuario: 'João Santos',
      assunto: 'Dúvida sobre localização',
      status: 'Em andamento',
      prioridade: 'Média',
      data: '02/07/2024',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '#003',
      usuario: 'Ana Costa',
      assunto: 'Reembolso de ingresso',
      status: 'Resolvido',
      prioridade: 'Baixa',
      data: '01/07/2024',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  const conversasChatbot = [
    { usuario: 'Como chego ao evento?', bot: 'O evento será realizado no Centro de Convenções...', hora: '14:32' },
    { usuario: 'Posso trocar meu ingresso?', bot: 'Sim, você pode fazer a troca até 24h antes...', hora: '14:28' },
    { usuario: 'Que horas começam os shows?', bot: 'A programação inicia às 18h com...', hora: '14:15' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">SAC e Chatbot</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MessageSquare className="h-4 w-4 mr-2" />
          Novo Ticket
        </Button>
      </div>

      {/* Resumo de Atendimento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tickets Abertos</p>
                <p className="text-2xl font-bold text-gray-800">8</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Em Andamento</p>
                <p className="text-2xl font-bold text-gray-800">15</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolvidos</p>
                <p className="text-2xl font-bold text-gray-800">142</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chatbot</p>
                <p className="text-2xl font-bold text-gray-800">89</p>
              </div>
              <Bot className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controle de Tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Tickets de Atendimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-800">{ticket.id} - {ticket.assunto}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {ticket.usuario}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${ticket.statusColor}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Prioridade: {ticket.prioridade}</span>
                    <span>{ticket.data}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interface do Chatbot */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
              <Bot className="h-5 w-5 text-blue-600" />
              Chatbot - Conversas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {conversasChatbot.map((conversa, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-lg max-w-xs text-sm">
                      {conversa.usuario}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs text-sm">
                      {conversa.bot}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center">{conversa.hora}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Input placeholder="Digite uma mensagem..." className="flex-1" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Enviar
              </Button>
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

export default Sac;
