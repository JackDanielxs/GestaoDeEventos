
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, MapPin, Building, Users, Truck, DollarSign } from 'lucide-react';

const Cadastros = () => {
  const cadastroItems = [
    { 
      title: 'Localidades', 
      description: 'Cadastrar cidades e regiões',
      icon: MapPin,
      count: 15
    },
    { 
      title: 'Espaços para Eventos', 
      description: 'Gerenciar locais disponíveis',
      icon: Building,
      count: 8
    },
    { 
      title: 'Promotores', 
      description: 'Pessoas físicas e jurídicas',
      icon: Users,
      count: 23
    },
    { 
      title: 'Prestadores/Fornecedores', 
      description: 'Serviços e produtos',
      icon: Truck,
      count: 31
    },
    { 
      title: 'Patrocinadores', 
      description: 'Empresas patrocinadoras',
      icon: DollarSign,
      count: 12
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Cadastro e Gerenciamento</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cadastroItems.map((item) => (
          <Card key={item.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <item.icon className="h-5 w-5 text-blue-600" />
                {item.title}
              </CardTitle>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">
                  {item.count}
                </span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-1" />
                  Novo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabela de Registros Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Registros Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-gray-600">Tipo</th>
                  <th className="text-left py-2 text-gray-600">Nome</th>
                  <th className="text-left py-2 text-gray-600">Data</th>
                  <th className="text-left py-2 text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100">
                  <td className="py-2">Promotor</td>
                  <td className="py-2">João Silva Events</td>
                  <td className="py-2">01/07/2024</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Ativo
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Espaço</td>
                  <td className="py-2">Centro de Convenções</td>
                  <td className="py-2">28/06/2024</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Ativo
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Fornecedor</td>
                  <td className="py-2">Som & Luz Pro</td>
                  <td className="py-2">25/06/2024</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      Pendente
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="text-xs text-gray-400 text-right opacity-50">
        feito por daniel
      </div>
    </div>
  );
};

export default Cadastros;
