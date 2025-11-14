Portfolio Profissional

Este é o meu portfólio online construído com React.js, Three.js, Vite e TailwindCSS, para exibir de forma interativa minhas habilidades, projetos e trajetória profissional.

🚀 Tecnologias

React.js – para estruturação dos componentes da interface.
Three.js – para renderização de modelos 3D e experiências visuais imersivas.
Vite – para bundling e ambiente de desenvolvimento super-rápido.
TailwindCSS – para estilização utilitária, responsiva e consistente.
JavaScript moderno (ES6+).
Arquitetura de componentes reutilizáveis e boas práticas de front-end.

🎯 Objetivos do Projeto

Criar uma presença digital própria que destaque minhas competências técnicas e estéticas.
Integrar modelos 3D interativos para tornar o portfólio mais dinâmico e memorável.
Garantir performance, responsividade e acessibilidade — especialmente para usuários mobile.
Estabelecer uma base reutilizável de estilos para aplicar de forma consistente em todas as seções.

🛠️ Desafios e Aprendizados

Um dos maiores desafios foi a implementação do componente SectionWrapper.
Esse componente tinha o papel de padronizar estilização global para cada seção do site. Inicialmente, houve dificuldades com: Garantir que cada seção, ao ser enquadrada pelo SectionWrapper, herdasse corretamente os estilos (margens, espaçamentos, theme, animações). Evitar duplicação de código ou estilos divergentes nas seções. Entender como estruturar wrappers dentro de React + Tailwind para garantir consistência visual. Com isso, tive um aprendizado valioso sobre: Arquitetura de componentes reutilizáveis em React. Padrões de estilização global com TailwindCSS, em que um wrapper de seção faz sentido para manter consistência e escala. Integração de Three.js com React — carregamento de assets 3D, performance, controle de câmera, animações leves. Ferramentas modernas de front-end (Vite) que tornam o desenvolvimento e deploy rápidos e eficientes.

📂 Estrutura do Projeto

/public
/src
  /components       — componentes React reutilizáveis (incluindo SectionWrapper)
  /sections         — diferentes seções do portfólio (Sobre, Projetos, Contato etc.)
  /assets           — modelos 3D, imagens, ícones
  /styles           — configurações Tailwind ou estilos adicionais
  index.jsx         — ponto de entrada
vite.config.js
tailwind.config.cjs
package.json
...


🎬 Como Rodar o Projeto Localmente

1 - Clone este repositório:

git clone https://github.com/arydesouza/Portfolio_profissional_Ary.git

2 - Acesse a pasta do projeto:

cd Portfolio_profissional_Ary

3 - Instale as dependências:

npm install

ou

yarn

4 - Inicie o ambiente de desenvolvimento:

npm run dev

ou

yarn dev

5 - Abra o navegador em http://localhost:5173 (ou a porta que for exibida) para visualizar.


📦 Deploy & Código-Fonte

Código-fonte completo disponível neste repositório no GitHub.

Aplicação rodando em tempo real: https://arydesouzaportfolio.vercel.app


✅ Próximos Passos / Melhorias Futuras

Adicionar dark mode / light mode para melhor experiência em diferentes ambientes.

Otimizar ainda mais o carregamento dos modelos 3D, adicionar lazy-load e placeholder.

Expandir a seção de “Projetos” com filtros ou visualizações em tempo real.

Melhorar animações de entrada/saída das seções (com Framer Motion ou Three.js).

Tornar o site multilíngue (português / inglês) para alcance global.

🙏 Agradecimentos

Obrigado a todos que acompanham minha jornada e dão feedbacks, suas sugestões ajudaram a moldar este portfólio. Feedbacks são sempre bem-vindos! 😊
