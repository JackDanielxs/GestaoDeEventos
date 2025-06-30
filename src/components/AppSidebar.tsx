
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { 
  Calendar, 
  Plus, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Home,
  Users,
  Ticket,
  Share2
} from 'lucide-react';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: Home },
  { title: 'Cadastros', url: '/cadastros', icon: Plus },
  { title: 'Eventos', url: '/eventos', icon: Calendar },
  { title: 'Ingressos', url: '/ingressos', icon: Ticket },
  { title: 'Comunicação', url: '/comunicacao', icon: Share2 },
  { title: 'SAC & Chatbot', url: '/sac', icon: MessageSquare },
  { title: 'Relatórios', url: '/relatorios', icon: BarChart3 },
  { title: 'Segurança', url: '/seguranca', icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="w-64 border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">
          Gestão de Eventos
        </h1>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 text-sm font-medium mb-4">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
