
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Download, FileText, Calendar, TrendingUp } from 'lucide-react';

const Relatorios = () => {
  const relatoriosDisponiveis = [
    {
      nome: 'Vendas de Ingressos',
      descricao: 'Análise completa de vendas por lote e período',
      tipo: 'Financeiro',
      formato: ['PDF', 'Excel'],
      ultimaGeracao: '03/07/2024'
    },
    {
      nome: 'Público e Demografia',
      descricao: 'Perfil do público e dados demográficos',
      tipo: 'Público',
      formato: ['PDF', 'Excel'],
      ultimaGeracao: '02/07/2024'
    },
    {
      nome: 'Prestação de Contas',
      descricao: 'Relatório completo de despesas e receitas',
      tipo: 'Financeiro',
      formato: ['PDF'],
      ultimaGeracao: '01/07/2024'
    },
    {
      nome: 'Performance de Mídia',
      descricao: 'Engajamento em redes sociais e alcance',
      tipo: 'Marketing',
      formato: ['PDF', 'Excel'],
      ultimaGeracao: '03/07/2024'
    },
    {
      nome: 'Satisfação do Cliente',
      descricao: 'Feedback e avaliações dos participantes',
      tipo: 'Qualidade',
      formato: ['PDF'],
      ultimaGeracao: '30/06/2024'
    }
  ];

  const estatisticas = [
    { titulo: 'Total de Relatórios', valor: '25', icone: FileText },
    { titulo: 'Gerados Hoje', valor: '3', icone: Calendar },
    { titulo: 'Downloads', valor: '156', icone: Download },
    { titulo: 'Automáticos', valor: '8', icone: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Relatórios</h1>
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar por evento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="festival">Festival de Música</SelectItem>
              <SelectItem value="conferencia">Conferência Tech</SelectItem>
              <SelectItem value="feira">Feira de Negócios</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <BarChart3 className="h-4 w-4 mr-2" />
            Gerar Relatório
          </Button>
        </div>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {estatisticas.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.titulo}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.valor}</p>
                </div>
                <stat.icone className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Geração Automática */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Configuração de Relatórios Automáticos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Diário</h3>
              <p className="text-sm text-gray-600 mb-3">Vendas e movimentação</p>
              <Button variant="outline" size="sm" className="w-full">
                Configurar
              </Button>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Semanal</h3>
              <p className="text-sm text-gray-600 mb-3">Resumo de performance</p>
              <Button variant="outline" size="sm" className="w-full">
                Configurar
              </Button>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Mensal</h3>
              <p className="text-sm text-gray-600 mb-3">Análise completa</p>
              <Button variant="outline" size="sm" className="w-full">
                Configurar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Relatórios Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {relatoriosDisponiveis.map((relatorio, index) => (
              <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{relatorio.nome}</h3>
                  <p className="text-sm text-gray-600 mb-1">{relatorio.descricao}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded">{relatorio.tipo}</span>
                    <span>Última geração: {relatorio.ultimaGeracao}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {relatorio.formato.map((formato) => (
                    <Button key={formato} variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      {formato}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-xs text-gray-400 text-right opacity-50">
        feito por daniel
      </div>
    </div>
  );
};

export default Relatorios;
