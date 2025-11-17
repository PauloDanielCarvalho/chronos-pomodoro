# 🍅 Chronos Pomodoro

Uma aplicação moderna de Pomodoro Timer desenvolvida com React, TypeScript e Vite. Gerencie seu tempo de forma eficiente com ciclos personalizáveis de foco e descanso.

## ✨ Funcionalidades

- ⏱️ **Timer Pomodoro**: Controle de tempo para ciclos de foco e descanso
- ⚙️ **Configurações Personalizáveis**: Ajuste os tempos de trabalho, descanso curto e descanso longo
- 📊 **Histórico de Tarefas**: Acompanhe todas as suas tarefas completadas ou interrompidas
- 🔄 **Ciclos Automáticos**: Sistema inteligente que alterna entre foco e descanso
- 💾 **Persistência Local**: Seus dados são salvos automaticamente no navegador
- 🎯 **Visualização de Ciclos**: Indicadores visuais para acompanhar o progresso
- 🔔 **Notificações**: Alertas sonoros quando um ciclo é concluído

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **React Router** - Roteamento para aplicações React
- **React Toastify** - Notificações elegantes
- **date-fns** - Manipulação de datas
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/chronos-pomodoro.git
cd chronos-pomodoro
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
chronos-pomodoro/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── contexts/        # Context API para gerenciamento de estado
│   ├── pages/          # Páginas da aplicação
│   ├── routers/        # Configuração de rotas
│   ├── utils/          # Funções utilitárias
│   ├── workers/        # Web Workers para timer
│   └── styles/         # Estilos globais
├── public/             # Arquivos estáticos
└── dist/               # Build de produção
```

## 🎯 Como Usar

1. **Criar uma Tarefa**: Digite o nome da tarefa e clique em iniciar
2. **Configurar Tempos**: Acesse a página de configurações para personalizar os tempos
3. **Acompanhar Progresso**: Veja os ciclos completados na página inicial
4. **Histórico**: Consulte todas as tarefas na página de histórico

## 🔄 Sistema de Ciclos

O Chronos Pomodoro segue um padrão inteligente de ciclos:

- **Ciclos Ímpares**: Trabalho (foco)
- **Ciclos Pares**: Descanso curto
- **Ciclo 8**: Descanso longo (reseta o ciclo completo)



**Foco total, sem pressa, sem pausa, só vai!** 💪🧘‍♂️
