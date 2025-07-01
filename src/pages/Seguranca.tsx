
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Shield, User, Smartphone, Eye, Accessibility, Lock } from 'lucide-react';

const Seguranca = () => {
  const perfisAcesso = [
    {
      nome: 'Administrador',
      usuarios: 2,
      permissoes: 'Acesso total ao sistema',
      status: 'Ativo'
    },
    {
      nome: 'Gerente de Evento',
      usuarios: 5,
      permissoes: 'Gestão de eventos e relatórios',
      status: 'Ativo'
    },
    {
      nome: 'Operador',
      usuarios: 12,
      permissoes: 'Operações básicas e consultas',
      status: 'Ativo'
    },
    {
      nome: 'Suporte',
      usuarios: 3,
      permissoes: 'SAC e atendimento ao cliente',
      status: 'Ativo'
    }
  ];

  const configuracoes = [
    {
      categoria: 'Autenticação',
      opcoes: [
        { nome: 'Autenticação de dois fatores', ativo: true },
        { nome: 'Biometria (quando disponível)', ativo: false },
        { nome: 'Login com Google/Facebook', ativo: true },
        { nome: 'Expiração automática de sessão', ativo: true }
      ]
    },
    {
      categoria: 'Acessibilidade',
      opcoes: [
        { nome: 'Suporte a leitores de tela', ativo: true },
        { nome: 'Alto contraste para deficientes visuais', ativo: true },
        { nome: 'Navegação por teclado', ativo: true },
        { nome: 'Texto ampliado', ativo: false }
      ]
    },
    {
      categoria: 'Dispositivos Móveis',
      opcoes: [
        { nome: 'Interface responsiva', ativo: true },
        { nome: 'App mobile (PWA)', ativo: false },
        { nome: 'Notificações push', ativo: true },
        { nome: 'Modo offline básico', ativo: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Segurança e Acessibilidade</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <User className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      {/* Status de Segurança */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Usuários Ativos</p>
                <p className="text-2xl font-bold text-gray-800">22</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sessões Ativas</p>
                <p className="text-2xl font-bold text-gray-800">18</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Acesso Mobile</p>
                <p className="text-2xl font-bold text-gray-800">65%</p>
              </div>
              <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Últimos Logins</p>
                <p className="text-2xl font-bold text-gray-800">47</p>
              </div>
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Perfis de Acesso */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
            <Lock className="h-5 w-5" />
            Controle de Acesso - Perfis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {perfisAcesso.map((perfil, index) => (
              <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{perfil.nome}</h3>
                  <p className="text-sm text-gray-600">{perfil.permissoes}</p>
                </div>
                <div className="text-center px-4">
                  <p className="font-medium text-gray-800">{perfil.usuarios}</p>
                  <p className="text-xs text-gray-600">usuários</p>
                </div>
                <div className="text-center px-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {perfil.status}
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

      {/* Configurações de Segurança e Acessibilidade */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {configuracoes.map((categoria, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
                {categoria.categoria === 'Autenticação' && <Shield className="h-5 w-5" />}
                {categoria.categoria === 'Acessibilidade' && <Accessibility className="h-5 w-5" />}
                {categoria.categoria === 'Dispositivos Móveis' && <Smartphone className="h-5 w-5" />}
                {categoria.categoria}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoria.opcoes.map((opcao, opIndex) => (
                  <div key={opIndex} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{opcao.nome}</span>
                    <Switch checked={opcao.ativo} />
                  </div>
                ))}
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

export default Seguranca;
