# Documentacao detalhada - Pagina de Login (HTML + CSS + JS)

## 1) Objetivo do projeto
Este projeto cria uma tela de login demonstrativa com foco em:
- Estrutura semantica em HTML.
- Estilizacao moderna com CSS.
- Validacao de formulario no front-end com JavaScript puro.
- Responsividade para desktop e mobile.

E um projeto de estudo: os dados digitados nao sao enviados para servidor.

---

## 2) Estrutura de arquivos

```txt
pagina-login/
  index.html
  style.css
  script.js
  LICENSE
```

### Papel de cada arquivo
- `index.html`: estrutura da pagina (conteudo, formulario e acessibilidade base).
- `style.css`: identidade visual, layout, tipografia, estados de botoes/inputs e media queries.
- `script.js`: regras de validacao no envio do formulario e exibicao de feedback.

---

## 3) O que foi construido no HTML

### 3.1 Estrutura principal
- Uso da tag `<main>` com classe `layout-principal` para agrupar o conteudo central.
- Divisao em duas secoes:
  - Coluna narrativa (`coluna-narrativa`): texto de apresentacao + botoes de acao.
  - Coluna de login (`coluna-login`): formulario de autenticacao demo.

### 3.2 Elementos de formulario
No formulario (`id="login-form"`) foram criados:
- Campo de e-mail (`input type="email"`, `id="email"`).
- Campo de senha (`input type="password"`, `id="senha"`, `minlength="6"`).
- Botao de envio (`button type="submit"`, `id="btn-login"`).
- Area de retorno para o usuario (`id="feedback"`, `role="status"`, `aria-live="polite"`).

### 3.3 Boas praticas aplicadas
- `lang="pt-br"` no documento.
- `meta viewport` para comportamento responsivo.
- Labels associados aos inputs (`for` + `id`) para acessibilidade.
- `novalidate` no `<form>` para priorizar validacao customizada via JavaScript.

---

## 4) O que foi construido no CSS

## 4.1 Sistema de design com variaveis
No `:root` foi montado um mini design system com:
- Paleta de cores (fundo, superficie, texto, sucesso, erro, acentos).
- Escala tipografica (`--fs-100` a `--fs-500`).
- Escala de espacamento (`--space-1` a `--space-8`).
- Tokens de raio e sombras (`--radius-*`, `--shadow-*`).
- Tempos de transicao para interacoes.

Isso facilita manutencao: ao trocar uma variavel, todo o tema acompanha.

### 4.2 Layout e composicao visual
- Fundo com combinacao de gradientes radiais + linear para profundidade.
- Grid principal em duas colunas no desktop:
  - `1.2fr` para narrativa.
  - `0.88fr` para formulario.
- Cartoes com efeito glassmorphism leve (transparencia + `backdrop-filter`).

### 4.3 Componentes estilizados
- Botoes:
  - `btn-outline` para acao secundaria.
  - `btn-solid` para CTA principal.
- Inputs com estado de foco destacado (`box-shadow` + cor de borda).
- Botao de login com gradiente e microinteracao no hover.
- Feedback visual com classes:
  - `.feedback.erro` (mensagens de validacao).
  - `.feedback.sucesso` (login demo concluido).

### 4.4 Responsividade
Foram adicionadas media queries para:
- Ajustar layout para 1 coluna em larguras menores.
- Reduzir padding geral em telas pequenas.
- Melhorar leitura do titulo/subtitulo em mobile.

---

## 5) O que foi construido no JavaScript

Arquivo: `script.js`

### 5.1 Fluxo geral
1. Captura elementos do DOM (`form` e `feedback`).
2. Escuta evento de submit no formulario.
3. Impede envio padrao com `e.preventDefault()`.
4. Le valores de e-mail e senha com `trim()`.
5. Executa validacoes sequenciais.
6. Exibe mensagem de erro ou sucesso alterando texto e classe.

### 5.2 Regras de validacao implementadas
- Se e-mail ou senha estiverem vazios:
  - Mensagem: "Preencha e-mail e senha."
  - Classe: `feedback erro`
- Se e-mail nao contiver `@`:
  - Mensagem: "Digite um e-mail valido."
  - Classe: `feedback erro`
- Se senha tiver menos de 6 caracteres:
  - Mensagem: "A senha precisa ter no minimo 6 caracteres."
  - Classe: `feedback erro`
- Se tudo estiver correto:
  - Mensagem: "Login demo realizado com sucesso."
  - Classe: `feedback sucesso`

### 5.3 Observacao importante
A validacao de e-mail foi simplificada (apenas verifica `@`).
Em cenarios reais, pode-se usar regex mais robusta ou validacao no backend.

---

## 6) Pontos de aprendizado (o que este projeto ensina)

- Como separar responsabilidades:
  - HTML = estrutura.
  - CSS = apresentacao.
  - JS = comportamento.
- Como criar um layout moderno sem framework.
- Como exibir feedback de formulario em tempo real no front-end.
- Como organizar CSS com variaveis reutilizaveis.
- Como iniciar com acessibilidade basica em formularios.

---

## 7) Possiveis ajustes tecnicos identificados no estado atual

Durante a revisao do codigo, ha alguns pontos para corrigir no CSS para garantir funcionamento ideal:

1. Em `.eyebrow`, a propriedade de cor esta escrita de forma invalida:
   - Atual: `color: var(color --color-brand-500);`
   - Correto: `color: var(--color-brand-500);`

2. Em `.btn-outline`, a borda esta com propriedade incorreta:
   - Atual: `order: 1px solid var(--color-border-500);`
   - Correto: `border: 1px solid var(--color-border-500);`

3. Em `.feedback`, existe um bloco aninhado indevido:
   - Estrutura atual possui `feedback { ... }` dentro de `.feedback { ... }`
   - O correto e aplicar as propriedades diretamente em `.feedback`.

4. Em `@media (max-width: 1050px)`, existe seletor nao presente no HTML:
   - `.grade-projetos` nao aparece no `index.html`.
   - Pode remover ou substituir pelo seletor correto do layout real.

Esses ajustes melhoram consistencia visual e evitam regras CSS ignoradas pelo navegador.

---

## 8) Passo a passo para reproduzir em outro projeto

1. Criar arquivos base (`index.html`, `style.css`, `script.js`).
2. Montar estrutura semantica em duas secoes (conteudo + formulario).
3. Definir variaveis CSS no `:root` para tema e escalas.
4. Criar layout em grid para desktop e media query para mobile.
5. Estilizar inputs, botoes e estado de foco.
6. Criar area de feedback com classe base (`feedback`).
7. No JS:
   - Capturar submit.
   - Impedir envio padrao.
   - Validar campos.
   - Atualizar `textContent` e `className` do feedback.
8. Testar casos:
   - Campos vazios.
   - E-mail invalido.
   - Senha curta.
   - Caso valido.

---

## 9) Evolucao recomendada para proximos estudos

- Adicionar validacao de e-mail mais robusta.
- Mostrar/ocultar senha com botao.
- Validar campos em tempo real (evento `input`).
- Adicionar animacoes sutis de entrada para feedback.
- Simular login com `fetch` em API fake.
- Modularizar JS em funcoes menores para legibilidade.

---

## 10) Resumo rapido
Voce construiu uma tela de login de estudo com boa base de UI, responsividade e validacao front-end. A arquitetura esta limpa e didatica. Corrigindo os pequenos pontos de CSS listados, o projeto fica pronto como template reutilizavel para novos exercicios.
