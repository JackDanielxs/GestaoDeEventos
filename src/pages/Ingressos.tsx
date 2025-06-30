
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket, TrendingUp, ShoppingCart, CheckCircle } from 'lucide-react';

const Ingressos = () => {
  const lotes = [
    {
      nome: 'Lote 1 - Promocional',
      preco: 'R$ 50,00',
      vendidos: 150,
      total: 200,
      status: 'Ativo',
      color: 'bg-green-100 text-green-800'
    },
    {
      nome: 'Lote 2 - Regular',
      preco: 'R$ 80,00',
      vendidos: 75,
      total: 300,
      status: 'Ativo',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      nome: 'Lote 3 - Premium',
      preco: 'R$ 120,00',
      vendidos: 0,
      total: 100,
      status: 'Inativo',
      color: 'bg-gray-100 text-gray-800'
    }
  ];

  const produtos = [
    { nome: 'Camiseta Oficial', preco: 'R$ 35,00', vendidos: 45 },
    { nome: 'Caneca Personalizada', preco: 'R$ 20,00', vendidos: 32 },
    { nome: 'Pulseira LED', preco: 'R$ 15,00', vendidos: 78 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Ingressos e Vendas</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Ticket className="h-4 w-4 mr-2" />
          Novo Lote
        </Button>
      </div>

      {/* Resumo de Vendas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Vendido</p>
                <p className="text-2xl font-bold text-gray-800">225</p>
              </div>
              <Ticket className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Receita</p>
                <p className="text-2xl font-bold text-gray-800">R$ 13.500</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Produtos</p>
                <p className="text-2xl font-bold text-gray-800">155</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Validados</p>
                <p className="text-2xl font-bold text-gray-800">180</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lotes de Ingressos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Lotes de Ingressos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lotes.map((lote, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{lote.nome}</h3>
                  <p className="text-sm text-gray-600">Preço: {lote.preco}</p>
                </div>
                <div className="text-center px-4">
                  <p className="font-medium text-gray-800">{lote.vendidos}/{lote.total}</p>
                  <p className="text-xs text-gray-600">vendidos</p>
                </div>
                <div className="text-center px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${lote.color}`}>
                    {lote.status}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  Gerenciar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Produtos e Serviços */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Produtos e Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {produtos.map((produto, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-1">{produto.nome}</h3>
                <p className="text-sm text-gray-600 mb-2">{produto.preco}</p>
                <p className="text-lg font-bold text-blue-600">{produto.vendidos} vendidos</p>
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

export default Ingressos;
