const express = require('express');
const cors = require('cors');
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());

const todas_materias = [
  {
    "grupo": "Semestre 1",
    "disciplinas": [
    {
      "codigo": 82210,
      "semestre_perfil": 1,
      "nome": "Cálculo Diferencia e Integral 1",
      "sigla": "CDI",
      "categoria": "Obrigatória",
      "creditos": 6,
      "pre_requisitos": []
    },
    {
      "codigo": 1001349,
      "semestre_perfil": 1,
      "nome": "Introdução ao Pensamento Algorítmico",
      "sigla": "IPA",
      "categoria": "Obrigatória",
      "creditos": 2,
      "pre_requisitos": []
    },
    {
      "codigo": 1001350,
      "semestre_perfil": 1,
      "nome": "Construção de Algoritmos e Programação",
      "sigla": "CAP",
      "categoria": "Obrigatória",
      "creditos": 8,
      "pre_requisitos": []
    },
    {
      "codigo": 1001351,
      "semestre_perfil": 1,
      "nome": "Lógica Digital",
      "sigla": "LD",
      "categoria": "Obrigatória",
      "creditos": 6,
      "pre_requisitos": []
    }]
  },
  {
    "grupo": "Semestre 2",
    "disciplinas": [
    {
      "codigo": 81116,
      "semestre_perfil": 2,
      "nome": "Geometria Analítica",
      "sigla": "GA",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001529,
      "semestre_perfil": 2,
      "nome": "Lógica Matemática",
      "sigla": "LM",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001502,
      "semestre_perfil": 2,
      "nome": "Algoritmos e Estruturas de Dados 1",
      "sigla": "AED1",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["CAP"]
    },
    {
      "codigo": 1001540,
      "semestre_perfil": 2,
      "nome": "Arquitetura e Organização de Computadores 1",
      "sigla": "ARQ1",
      "categoria": "Obrigatória",
      "creditos": 6,
      "pre_requisitos": ["LD"]
    },
    {
      "codigo": 1001507,
      "semestre_perfil": 2,
      "nome": "Programação Orientada a Objetos",
      "sigla": "POO",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["CAP"]
    },
    {
      "codigo": 150010,
      "semestre_perfil": 2,
      "nome": "Probabilidade e Estatística",
      "sigla": "ProbEst",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    }]
  },
  {
      "grupo": "Semestre 3",
      "disciplinas": [
        {
          "codigo": 82260,
          "semestre_perfil": 3,
          "nome": "Cálculo Diferencial e Séries",
          "sigla": "CDS",
          "categoria": "Obrigatória",
          "creditos": 4,
    "pre_requisitos": ["CDI"]
    },
    {
      "codigo": 1001490,
      "semestre_perfil": 3,
      "nome": "Algoritmos e Estruturas de Dados 2",
      "sigla": "AED2",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["AED1"]
    },
    {
      "codigo": 1001500,
      "semestre_perfil": 3,
      "nome": "Matemática Discreta",
      "sigla": "MD",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001487,
      "semestre_perfil": 3,
      "nome": "Organização e Recuperação da Informação",
      "sigla": "ORI",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["AED1"]
    },
    {
      "codigo": 1001535,
      "semestre_perfil": 3,
      "nome": "Sistemas Operacionais",
      "sigla": "SO",
      "categoria": "Obrigatória",
      "creditos": 6,
      "pre_requisitos": ["ARQ1"]
    },
    {
      "codigo": 0,
      "semestre_perfil": 3,
      "nome": "Optatitva de Humanas e Complementares",
      "sigla": "Humanas",
      "categoria": "Optatitva",
      "creditos": 4,
      "pre_requisitos": []
    }]
  },
  {
    "grupo": "Semestre 4",
    "disciplinas": [
    {
      "codigo": 80136,
      "semestre_perfil": 4,
      "nome": "Álgebra Linear",
      "sigla": "AlgeLin",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["GA", "MD"]
    },
    {
      "codigo": 1001508,
      "semestre_perfil": 4,
      "nome": "Interação Humano-Computador",
      "sigla": "IHC",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["CAP"]
    },
    {
      "codigo": 1001525,
      "semestre_perfil": 4,
      "nome": "Projeto e Análise de Algoritmos",
      "sigla": "PAA",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["AED1"]
    },
    {
      "codigo": 1001530,
      "semestre_perfil": 4,
      "nome": "Engenharia de Software 1",
      "sigla": "ES1",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["POO"]
    },
    {
      "codigo": 1001493,
      "semestre_perfil": 4,
      "nome": "Banco de Dados",
      "sigla": "BD",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["AED1"]
    },
    {
      "codigo": 1001336,
      "semestre_perfil": 4,
      "nome": "Inteligência Artificial",
      "sigla": "IA",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["AED1"]
    }]
  },
  {
    "grupo": "Semestre 5",
    "disciplinas": [
    {
      "codigo": 83020,
      "semestre_perfil": 5,
      "nome": "Cálculo Numérico",
      "sigla": "CN",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["CDS", "GA"]
    },
    {
      "codigo": 1001504,
      "semestre_perfil": 5,
      "nome": "Redes de Computadores",
      "sigla": "Redes",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["SO"]
    },
    {
      "codigo": 1001521,
      "semestre_perfil": 5,
      "nome": "Programação Orientada a Objetos Avançada",
      "sigla": "POOA",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["POO", "AED1"]
    },
    {
      "codigo": 1001542,
      "semestre_perfil": 5,
      "nome": "Desenvolvimento de Software para Web 1",
      "sigla": "DSW1",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["BD"]
    },
    {
      "codigo": 1001516,
      "semestre_perfil": 5,
      "nome": "Engenharia de Software 2",
      "sigla": "ES2",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["ES1"]
    },
    {
      "codigo": 1001546,
      "semestre_perfil": 5,
      "nome": "Projeto e Implementação de Banco de Dados",
      "sigla": "PIBD",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["BD"]
    },
    {
      "codigo": 1001524,
      "semestre_perfil": 5,
      "nome": "Aprendizado de Máquina 1",
      "sigla": "AM1",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["IA", "ProbEst"]
    },
    {
      "codigo": 1001536,
      "semestre_perfil": 5,
      "nome": "Computação Gráfica",
      "sigla": "CG",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["GA", "AED1"]
    },
    {
      "codigo": 1001527,
      "semestre_perfil": 5,
      "nome": "Processamento Digital de Imagens",
      "sigla": "PDI",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["CAP", "GA", "CDI"]
    },
    {
      "codigo": 1001503,
      "semestre_perfil": 5,
      "nome": "Sistemas Distribuídos",
      "sigla": "SD",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["SO"]
    },
    {
      "codigo": 0,
      "semestre_perfil": 5,
      "nome": "Eletiva",
      "sigla": "Eletiva",
      "categoria": "Eletiva",
      "creditos": 4,
      "pre_requisitos": []
    }]
  },
  {
    "grupo": "Semestre 6",
    "disciplinas": [
    {
      "codigo": 1001510,
      "semestre_perfil": 6,
      "nome": "Teoria da Computação",
      "sigla": "TC",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["MD"]
    },
    {
      "codigo": 1002580,
      "semestre_perfil": 6,
      "nome": "Ética em Computação",
      "sigla": "EC",
      "categoria": "Opt Humanas e Complementares",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 0,
      "semestre_perfil": 6,
      "nome": "Eletiva",
      "sigla": "Eletiva",
      "categoria": "Eletiva",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001483,
      "semestre_perfil": 6,
      "nome": "Programação Paralela e Distribuída",
      "sigla": "PPD",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["SO"]
    },
    {
      "codigo": 1001511,
      "semestre_perfil": 6,
      "nome": "Paradigmas de Linguagens de Programação",
      "sigla": "PLP",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["PAA"]
    },
    {
      "codigo": 1001543,
      "semestre_perfil": 6,
      "nome": "Desenvolvimento de Software para Web 2",
      "sigla": "DSW2",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["DSW1"]
    },
    {
      "codigo": 1001526,
      "semestre_perfil": 6,
      "nome": "Arquitetura de Software e Padrões",
      "sigla": "ASP",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["ES2"]
    },
    {
      "codigo": 1001512,
      "semestre_perfil": 6,
      "nome": "Banco de Dados para Ciência de Dados",
      "sigla": "BDCD",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["PIBD"]
    },
    {
      "codigo": 1001513,
      "semestre_perfil": 6,
      "nome": "Aprendizado de Máquina 2",
      "sigla": "AM2",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["AM1"]
    },
    {
      "codigo": 1001514,
      "semestre_perfil": 6,
      "nome": "Processamento e Visualização de Dados",
      "sigla": "PVD",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["CG"]
    },
    {
      "codigo": 1001480,
      "semestre_perfil": 6,
      "nome": "Processamento Digital de Imagens 3D e Vídeos",
      "sigla": "PDI3D",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["PDI"]
    },
    {
      "codigo": 1001541,
      "semestre_perfil": 6,
      "nome": "Arquitetura e Organização de Computadores 2",
      "sigla": "Arq2",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["ARQ1"]
    },
    {
      "codigo": 1001545,
      "semestre_perfil": 6,
      "nome": "Engenharia de Sistemas",
      "sigla": "EngeSist",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["ES1"]
    },
    {
      "codigo": 1001539,
      "semestre_perfil": 6,
      "nome": "Sistemas Digitais",
      "sigla": "SistDig",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["LD"]
    }]
  },
  {
    "grupo": "Semestre 7",
    "disciplinas": [
    {
      "codigo": 1001497,
      "semestre_perfil": 7,
      "nome": "Construção de Compiladores",
      "sigla": "Compiladores",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": ["TC", "CAP"]
    },
    {
      "codigo": 0,
      "semestre_perfil": 7,
      "nome": "Eletiva",
      "sigla": "Eletiva",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001343,
      "semestre_perfil": 7,
      "nome": "Metodologia Científica",
      "sigla": "MC",
      "categoria": "Obrigatória",
      "creditos": 4,
      "pre_requisitos": []
    },
    {
      "codigo": 1001337,
      "semestre_perfil": 7,
      "nome": "Desenvolvimento Móvel",
      "sigla": "DMovel",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["DSW2"]
    },
    {
      "codigo": 1001544,
      "semestre_perfil": 7,
      "nome": "DevOps",
      "sigla": "DevOps",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["ES2"]
    },
    {
      "codigo": 1001532,
      "semestre_perfil": 7,
      "nome": "Visão Computacional",
      "sigla": "VC",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["AlgeLin", "PDI", "PSD"]
    },
    {
      "codigo": 1001538,
      "semestre_perfil": 7,
      "nome": "Projeto de Sistemas Computacionais Embarcados",
      "sigla": "PDI3D",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["EngSist", "Arq2"]
    },
    {
      "codigo": 1001537,
      "semestre_perfil": 7,
      "nome": "Arquiteturas de Alto Desempenho",
      "sigla": "Arq3",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["Arq1"]
    },
    {
      "codigo": 1001515,
      "semestre_perfil": 7,
      "nome": "Processamento de Dados em Escala",
      "sigla": "ProcDados",
      "categoria": "Trilha",
      "creditos": 4,
      "pre_requisitos": ["SO"]
    }]
  },
  {
    "grupo": "Semestre 8",
    "disciplinas": [
    {
      "codigo": 0,
      "semestre_perfil": 8,
      "nome": "Estágio ou Trabalho de Conclusão de Curso",
      "sigla": "Estagio/TCC",
      "categoria": "Obrigatória",
      "creditos": 24,
      "pre_requisitos": []
    }]
  }
]

const alunos = {
    '805757': {
        'nome': 'Gabrielly',
        'senha' : '1234',
        'materias_concluidas' : {
            '2021/1': ['PAA', 'PPD'], 
            '2021/2': ['PAA', 'PPD'],
        },
    },
    '800345': {
        'nome': 'Rodrigo',
        'senha' : '1234',
        'materias_concluidas' : {
            '2021/1': ['CAP', 'IPA'],
        },
    }
}

//Login
router.post('/login', (req, res) => {
  const ra = req.body.ra;
  const senha = req.body.password;

    if(ra in alunos) {
      if(alunos[ra].senha === senha) {
        res.statusCode = 200;
        res.send({
          success: true,
          token: ra,
        })
      }
      else {
        res.statusCode = 401;
        res.send({
          success: false,
          message: 'Senha incorreta'
        })        
      }
    }
    else {
      res.statusCode = 401;
      res.send({
        success: false,
        message: 'RA não encontrado'
      })
    }
});

// Matérias concluídas
router.get('/alunos/:ra/materias_concluidas', (req, res) => {
  const ra = req.params.ra;
  if(ra in alunos) {
    res.statusCode = 200;
    res.send({
      success: true,
      materias_concluidas: alunos[ra].materias_concluidas
    });
  }
  else {
    res.statusCode = 404;
    res.send({
      success: false,
      message: 'RA não encontrado'
    })
  }
});

// Todas as matérias
router.get('/materias', (req, res) => {
  res.statusCode = 200;
  res.send({
    success: true,
    materias: todas_materias
  });
});

app.use(router);

app.listen(8000, () => console.log('API is running on http://localhost:8000'));
