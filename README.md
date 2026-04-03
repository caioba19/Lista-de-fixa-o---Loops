# 🔁 JS Loops — Exercícios de Estruturas de Repetição

> Projeto acadêmico desenvolvido para a disciplina de **Análise e Desenvolvimento de Sistemas**  
> Centro Universitário Jorge Amado — Salvador, BA

---

## 📋 Descrição

Conjunto de **9 exercícios práticos** que cobrem as principais **estruturas de repetição do JavaScript**, com interface visual interativa inspirada em terminais/IDEs. Cada exercício simula um cenário real de aplicação, associando a lógica de programação a contextos como sistemas financeiros, plataformas educacionais e dashboards corporativos.

---

## 🧩 Exercícios

| # | Estrutura | Descrição |
|---|-----------|-----------|
| 01 | `for` | Exibir números de **1 a 10** em ordem crescente |
| 02 | `for` | Gerar a **tabuada** de um número de 1 a 10 |
| 03 | `while` | Calcular a **soma** dos números de 1 a 100 |
| 04 | `while` | Exibir todos os **números pares** de 0 a 20 |
| 05 | `do...while` | **Contagem regressiva** de 10 até 1 |
| 06 | `for...in` | Percorrer um **objeto** e exibir propriedades e valores |
| 07 | `for` + array | Calcular a **média de notas** armazenadas em um array |
| 08 | `for` + `%` | Filtrar e exibir apenas **números ímpares** de 1 a 50 |
| 09 | `while` | **Contador regressivo** de 10 até 0 com mensagem de encerramento |

---

## 🗂️ Estrutura do Repositório

```
js-loops-exercises/
├── index.html     # Interface visual da aplicação
├── style.css      # Estilização (tema terminal escuro)
├── script.js      # Lógica dos 9 exercícios + controle da UI
└── README.md      # Documentação
```

---

## 🚀 Como Executar

### Opção 1 — Direto no navegador

Basta abrir o arquivo `index.html` no seu navegador:

```bash
# Clone o repositório
git clone https://github.com/caioba19/js-loops-exercises.git

# Entre na pasta
cd js-loops-exercises

# Abra no navegador (macOS)
open index.html

# Abra no navegador (Linux)
xdg-open index.html
```

### Opção 2 — Com Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

### Opção 3 — Apenas o console

Se preferir rodar os algoritmos diretamente sem interface, copie qualquer bloco de código do `script.js` e execute no **console do navegador (F12)** ou no **Node.js**:

```bash
node script.js
```

> **Obs.:** Para rodar pelo Node é necessário remover o código de UI e manter apenas as funções `run()` de cada exercício.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura da interface |
| CSS3 | Estilização, animações e layout responsivo |
| JavaScript (ES6+) | Lógica dos exercícios e controle da UI |

Nenhuma dependência externa ou framework — **100% vanilla**.

---

## 💡 Conceitos Abordados

- Estrutura `for` com variável de controle
- Estrutura `while` com condição de parada
- Estrutura `do...while` (garante ao menos uma execução)
- Estrutura `for...in` para iteração em objetos
- Operador módulo `%` para identificar pares/ímpares
- Arrays: percorrer, somar, calcular média
- Acumuladores e contadores
- Template literals (` `` `)
- Boas práticas: nomes descritivos, `const`/`let`, comentários

---

## 📸 Interface

A interface foi desenvolvida com estética de **terminal/IDE** (dark mode), incluindo:

- Painel de código com **syntax highlight** manual
- Painel de output com animações de entrada
- Execução individual por exercício ou **"Executar Todos"**
- Layout responsivo para mobile

---

## 👤 Autor

**Caio Vinicius**  
Estudante de Análise e Desenvolvimento de Sistemas  
Centro Universitário Jorge Amado — Salvador, BA  

[![GitHub](https://img.shields.io/badge/GitHub-caioba19-181717?style=flat&logo=github)](https://github.com/caioba19)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos. Sinta-se livre para usar, estudar e adaptar.
