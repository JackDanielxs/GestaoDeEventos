
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Share2, Upload, Eye, Facebook, Instagram, Youtube } from 'lucide-react';

const Comunicacao = () => {
  const redesSociais = [
    { nome: 'Facebook', icon: Facebook, conectado: true, seguidores: '2.5K' },
    { nome: 'Instagram', icon: Instagram, conectado: true, seguidores: '1.8K' },
    { nome: 'YouTube', icon: Youtube, conectado: false, seguidores: '850' }
  ];

  const posts = [
    {
      tipo: 'Texto',
      conteudo: 'Últimas semanas para garantir seu ingresso...',
      data: '02/07/2024',
      visualizacoes: 1250
    },
    {
      tipo: 'Vídeo',
      conteudo: 'backstage_festival.mp4',
      data: '01/07/2024',
      visualizacoes: 2100
    },
    {
      tipo: 'Imagem',
      conteudo: 'lineup_oficial.jpg',
      data: '30/06/2024',
      visualizacoes: 890
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Comunicação e Mídias</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Mídia
        </Button>
      </div>

      {/* Integração com Redes Sociais */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Redes Sociais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {redesSociais.map((rede, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <rede.icon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-800">{rede.nome}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    rede.conectado 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {rede.conectado ? 'Conectado' : 'Desconectado'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{rede.seguidores} seguidores</p>
                <Button 
                  variant={rede.conectado ? "outline" : "default"} 
                  size="sm" 
                  className="w-full"
                >
                  {rede.conectado ? 'Gerenciar' : 'Conectar'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publicar Conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Publicar Texto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Digite seu texto aqui..."
              className="min-h-[120px]"
            />
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Share2 className="h-4 w-4 mr-2" />
                Publicar
              </Button>
              <Button variant="outline">
                Agendar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Upload de Vídeo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Arraste e solte seu vídeo aqui</p>
              <p className="text-xs text-gray-400">ou clique para selecionar</p>
            </div>
            <Button variant="outline" className="w-full">
              Selecionar Arquivo
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Painel Público - Posts Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">Painel Público - Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {post.tipo}
                    </span>
                    <span className="text-sm text-gray-600">{post.data}</span>
                  </div>
                  <p className="text-gray-800">{post.conteudo}</p>
                </div>
                <div className="text-center px-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{post.visualizacoes}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 text-center">
        feito por Daniel Marques
      </div>
    </div>
  );
};

export default Comunicacao;
