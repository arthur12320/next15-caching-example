# next15-caching-example

Um projeto de demonstração para ilustrar o uso de caching dinâmico de I/O com Next 15.  

---

## 🚀 Motivação / Visão geral

Este repositório tem como objetivo mostrar de forma simples e prática como implementar caching dinâmico em aplicações feitas com **Next 15**. Ele serve como exemplo/benchmark para desenvolvedores que querem entender os benefícios de cache de I/O em projetos full-stack.  

---

## 🧰 Tecnologias usadas

- Next.js 15  
- TypeScript / JavaScript  
- Node.js  
- (Mock de backend — veja pasta `backend-mock`)  
- CSS (para estilo básico)  

---

## 📁 Estrutura do repositório

/
├── backend-mock/ # Mock básico de backend (se aplicável)
├── caching-example/ # Código principal do exemplo com caching
├── .gitignore
└── README.md

yaml
Copy code

- `backend-mock/`: contém mocks ou endpoints fictícios usados no exemplo (se houver).  
- `caching-example/`: contém a aplicação Next 15 configurada com caching dinâmico.  

---

## 🧑‍💻 Como rodar localmente

### Pré-requisitos

- Node.js instalado (versão 14+ recomendada)  
- Yarn ou npm  

### Passos

```bash
# Clone o repositório
git clone https://github.com/arthur12320/next15-caching-example.git

# Acesse a pasta do projeto
cd next15-caching-example/caching-example

# Instale dependências
npm install   # ou yarn install

# Rode o projeto em modo de desenvolvimento
npm run dev   # ou yarn dev

# Abra no navegador (geralmente http://localhost:3000)
Se houver mock de backend, certifique-se de que ele esteja configurado/rodando conforme as instruções da pasta backend-mock.
```

## ✅ O que este exemplo demonstra
Como configurar caching de I/O com Next 15.

Estrutura mínima para um exemplo funcional full-stack / frontend.

Uso de TypeScript (quando aplicável) para tipagem e segurança.

Boas práticas de organização de pastas.

## 📚 Possíveis usos
Estudar caching com Next.js para uso em projetos reais.

Servir como base para protótipos ou POCs (proofs of concept).

Referência ou demonstração em entrevistas técnicas ou portfólio.

## 🌟 Contribuições & melhorias futuras
Contribuições são bem-vindas! Exemplos de melhorias:

Adicionar testes automatizados (unit/integration) para validar caching.

Incluir exemplos mais complexos (rotas, APIs, banco de dados).

Implementar CI/CD ou integração com GitHub Actions.

Documentar arquitetura detalhada e comportamento esperado do cache.

Se quiser contribuir: abra uma issue ou envie um pull request com as mudanças.

