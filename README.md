// ============================================================
//  JS Loops — Exercícios de Estruturas de Repetição
//  Autor  : Caio Vinicius (@caioba19)
//  Curso  : ADS — Centro Universitário Jorge Amado
// ============================================================

// ──────────────────────────────────────────
// EXERCÍCIOS
// ──────────────────────────────────────────

const exercises = [
  {
    id: 1,
    title: "for • 1 a 10",
    description: "Exibir números de 1 a 10 em ordem crescente usando for.",
    code: `for (let i = 1; i <= 10; i++) {
  console.log(i);
}`,
    run() {
      const results = [];
      for (let i = 1; i <= 10; i++) {
        results.push(String(i));
      }
      return results;
    }
  },

  {
    id: 2,
    title: "for • tabuada",
    description: "Gerar a tabuada de um número de 1 a 10 usando for.",
    code: `const numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(\`\${numero} × \${i} = \${numero * i}\`);
}`,
    run() {
      const results = [];
      const numero = 7;
      for (let i = 1; i <= 10; i++) {
        results.push(`${numero} × ${i} = ${numero * i}`);
      }
      return results;
    }
  },

  {
    id: 3,
    title: "while • soma 1–100",
    description: "Calcular a soma dos números de 1 a 100 usando while.",
    code: `let soma = 0;
let i = 1;

while (i <= 100) {
  soma += i;
  i++;
}

console.log("Soma de 1 a 100:", soma);`,
    run() {
      let soma = 0;
      let i = 1;
      while (i <= 100) {
        soma += i;
        i++;
      }
      return [`Soma de 1 a 100: ${soma}`];
    }
  },

  {
    id: 4,
    title: "while • números pares",
    description: "Exibir números pares de 0 a 20 usando while.",
    code: `let i = 0;

while (i <= 20) {
  console.log(i);
  i += 2;
}`,
    run() {
      const results = [];
      let i = 0;
      while (i <= 20) {
        results.push(String(i));
        i += 2;
      }
      return results;
    }
  },

  {
    id: 5,
    title: "do...while • contagem regressiva",
    description: "Exibir contagem regressiva de 10 até 1 usando do...while.",
    code: `let i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);`,
    run() {
      const results = [];
      let i = 10;
      do {
        results.push(String(i));
        i--;
      } while (i >= 1);
      return results;
    }
  },

  {
    id: 6,
    title: "for...in • objeto",
    description: "Percorrer um objeto e exibir suas propriedades com for...in.",
    code: `const usuario = {
  nome: "Caio Vinicius",
  curso: "ADS",
  semestre: 2,
  cidade: "Salvador",
  linguagem: "JavaScript"
};

for (const chave in usuario) {
  console.log(\`\${chave}: \${usuario[chave]}\`);
}`,
    run() {
      const usuario = {
        nome: "Caio Vinicius",
        curso: "ADS",
        semestre: 2,
        cidade: "Salvador",
        linguagem: "JavaScript"
      };
      const results = [];
      for (const chave in usuario) {
        results.push(`${chave}: ${usuario[chave]}`);
      }
      return results;
    }
  },

  {
    id: 7,
    title: "array • média das notas",
    description: "Calcular a média de notas armazenadas em um array.",
    code: `const notas = [8.5, 7.0, 9.2, 6.8, 8.0];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log("Notas:", notas.join(", "));
console.log("Soma:", soma);
console.log("Média:", media.toFixed(2));`,
    run() {
      const notas = [8.5, 7.0, 9.2, 6.8, 8.0];
      let soma = 0;
      for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
      }
      const media = soma / notas.length;
      return [
        `Notas: ${notas.join(", ")}`,
        `Soma: ${soma}`,
        `Média: ${media.toFixed(2)}`
      ];
    }
  },

  {
    id: 8,
    title: "for • ímpares 1–50",
    description: "Filtrar e exibir apenas números ímpares de 1 a 50.",
    code: `for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}`,
    run() {
      const results = [];
      for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) results.push(String(i));
      }
      return results;
    }
  },

  {
    id: 9,
    title: "while • contador 10–0",
    description: "Simular contador regressivo de 10 até 0 usando while.",
    code: `let contador = 10;

while (contador >= 0) {
  if (contador === 0) {
    console.log("🔴 Sistema encerrado!");
  } else {
    console.log(\`⏳ Encerrando em \${contador}...\`);
  }
  contador--;
}`,
    run() {
      const results = [];
      let contador = 10;
      while (contador >= 0) {
        if (contador === 0) {
          results.push("🔴 Sistema encerrado!");
        } else {
          results.push(`⏳ Encerrando em ${contador}...`);
        }
        contador--;
      }
      return results;
    }
  }
];

// ──────────────────────────────────────────
// SYNTAX HIGHLIGHT (simples, sem deps)
// ──────────────────────────────────────────

function highlight(code) {
  return code
    // comentários de linha
    .replace(/(\/\/[^\n]*)/g, '<span class="cmt">$1</span>')
    // strings template + aspas
    .replace(/(`[^`]*`)/g, '<span class="str">$1</span>')
    .replace(/("[^"]*"|'[^']*')/g, '<span class="str">$1</span>')
    // keywords
    .replace(/\b(const|let|var|for|while|do|if|else|return|in|of|new|function)\b/g,
      '<span class="kw">$1</span>')
    // built-ins / funções
    .replace(/\b(console\.log|console|Math|Number|String|Array)\b/g,
      '<span class="fn">$1</span>')
    // números
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');
}

// ──────────────────────────────────────────
// UI
// ──────────────────────────────────────────

let currentExercise = null;

const navList      = document.getElementById('nav-list');
const codeDisplay  = document.getElementById('code-display');
const output       = document.getElementById('output');
const runBtn       = document.getElementById('run-btn');
const runAllBtn    = document.getElementById('run-all-btn');
const clearBtn     = document.getElementById('clear-btn');
const currentTitle = document.getElementById('current-title');
const runStatus    = document.getElementById('run-status');

// Constrói o menu lateral
exercises.forEach(ex => {
  const item = document.createElement('div');
  item.className = 'nav-item';
  item.dataset.id = ex.id;
  item.innerHTML = `
    <span class="nav-num">${String(ex.id).padStart(2, '0')}</span>
    <span class="nav-label">${ex.title}</span>
  `;
  item.addEventListener('click', () => selectExercise(ex.id));
  navList.appendChild(item);
});

function selectExercise(id) {
  currentExercise = exercises.find(e => e.id === id);

  // Atualiza nav
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', Number(el.dataset.id) === id);
  });

  // Código
  codeDisplay.innerHTML = highlight(currentExercise.code);
  currentTitle.textContent = `ex${String(id).padStart(2, '0')}.js — ${currentExercise.title}`;
  currentTitle.classList.add('active');

  // Output
  clearOutput();
  runBtn.disabled = false;
  runStatus.textContent = '';
}

function clearOutput() {
  output.innerHTML = '<span class="placeholder">$ aguardando execução...</span>';
}

function renderOutput(lines, heading = null) {
  const section = document.createElement('div');
  section.className = 'output-section';

  if (heading) {
    const h = document.createElement('div');
    h.className = 'output-heading';
    h.textContent = heading;
    section.appendChild(h);
  }

  lines.forEach((line, idx) => {
    const div = document.createElement('div');
    div.className = 'output-line';
    div.style.animationDelay = `${idx * 18}ms`;
    div.innerHTML = `<span class="arrow">›</span><span class="val">${escapeHTML(line)}</span>`;
    section.appendChild(div);
  });

  return section;
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function runExercise(ex) {
  const lines = ex.run();
  return lines;
}

// Executar exercício selecionado
runBtn.addEventListener('click', () => {
  if (!currentExercise) return;
  output.innerHTML = '';
  const lines = runExercise(currentExercise);
  const section = renderOutput(lines, `Exercício ${currentExercise.id}: ${currentExercise.title}`);
  output.appendChild(section);
  runStatus.textContent = `✓ ${lines.length} linha${lines.length !== 1 ? 's' : ''} gerada${lines.length !== 1 ? 's' : ''}`;
});

// Executar todos
runAllBtn.addEventListener('click', () => {
  output.innerHTML = '';
  currentTitle.textContent = 'todos os exercícios';

  exercises.forEach((ex, idx) => {
    // Marca nav
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    const lines = runExercise(ex);
    const section = renderOutput(lines, `Ex ${ex.id}: ${ex.title}`);
    section.style.animationDelay = `${idx * 60}ms`;
    output.appendChild(section);
  });

  runBtn.disabled = true;
  currentExercise = null;
  runStatus.textContent = `✓ ${exercises.length} exercícios executados`;
});

// Limpar output
clearBtn.addEventListener('click', () => {
  clearOutput();
  runStatus.textContent = '';
});

// Seleciona o primeiro automaticamente
selectExercise(1);
