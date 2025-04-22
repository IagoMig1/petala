export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  featured: boolean;
  categories: string[];
}
export const blogPosts: BlogPost[] = [{
  id: "1",
  title: "A importância da educação inclusiva no desenvolvimento infantil",
  excerpt: "Como a educação inclusiva pode transformar a vida de crianças com necessidades especiais e criar um ambiente de aprendizado mais rico para todos.",
  content: `
      <p>A educação inclusiva é um direito fundamental de todas as crianças, independentemente de suas necessidades específicas. Quando implementada corretamente, ela não apenas beneficia os estudantes com necessidades especiais, mas enriquece o ambiente de aprendizado para todos os alunos.</p>
      <p>Ao longo dos meus anos de trabalho na CONVIVER – Associação Assistencial e Educacional para Pessoas com Necessidades, tenho testemunhado inúmeras histórias de superação e crescimento. Crianças que, ao receberem o apoio adequado em um ambiente inclusivo, desenvolvem habilidades que muitos acreditavam ser impossíveis.</p>
      <p>Um ambiente inclusivo ensina valores fundamentais como empatia, respeito às diferenças e cooperação. Estas são habilidades essenciais não apenas para a sala de aula, mas para a vida em sociedade. Quando crianças convivem desde cedo com a diversidade, elas desenvolvem uma visão de mundo mais abrangente e compassiva.</p>
      <p>Para educadores, o desafio está em adaptar metodologias e criar estratégias personalizadas que atendam às necessidades específicas de cada aluno. Isso requer formação continuada, dedicação e, acima de tudo, a crença de que toda criança tem potencial para aprender e se desenvolver.</p>
      <p>O caminho para uma educação verdadeiramente inclusiva ainda é longo, mas cada passo nessa direção representa uma vitória para toda a sociedade. É nosso dever como educadores, pais e cidadãos trabalhar juntos para construir um sistema educacional que acolha e valorize a diversidade.</p>
    `,
  coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
  date: "12 de Junho, 2023",
  author: "Pétala Lacerda",
  featured: true,
  categories: ["Educação Inclusiva", "Desenvolvimento Infantil"]
}, {
  id: "2",
  title: "Desafios da gestão educacional em instituições assistenciais",
  excerpt: "Uma análise sobre os principais desafios enfrentados por gestores educacionais em instituições que atendem pessoas com necessidades especiais.",
  content: `
      <p>A gestão educacional em instituições assistenciais apresenta desafios únicos que exigem uma abordagem diferenciada e multidisciplinar. Durante minha trajetória como gestora na CONVIVER, tenho enfrentado e superado diversos obstáculos que são comuns a este tipo de instituição.</p>
      <p>Um dos principais desafios é a captação e gestão de recursos. Instituições assistenciais frequentemente dependem de doações, parcerias e recursos públicos limitados, o que torna essencial uma gestão financeira eficiente e transparente. É necessário equilibrar as necessidades imediatas com investimentos de longo prazo em infraestrutura e capacitação profissional.</p>
      <p>Outro aspecto desafiador é a formação e retenção de profissionais qualificados. O trabalho com pessoas com necessidades especiais requer não apenas conhecimento técnico, mas também sensibilidade, paciência e dedicação. Investir na formação continuada da equipe é fundamental para manter a qualidade do atendimento.</p>
      <p>A integração entre diferentes áreas do conhecimento também representa um desafio significativo. Uma instituição assistencial eficaz precisa contar com profissionais de diversas áreas - educação, saúde, assistência social, psicologia - trabalhando de forma coordenada. Promover esta integração exige uma gestão que valorize a comunicação e o trabalho em equipe.</p>
      <p>Por fim, mas não menos importante, está o desafio de manter o foco no desenvolvimento integral das pessoas atendidas, respeitando suas individualidades e potencialidades. Cada pessoa tem um ritmo de aprendizado e necessidades específicas, e a instituição deve ser flexível o suficiente para acomodar estas diferenças.</p>
      <p>Apesar dos desafios, a gestão educacional em instituições assistenciais é extremamente gratificante. Ver o desenvolvimento e as conquistas das pessoas atendidas é uma recompensa que supera qualquer dificuldade encontrada no caminho.</p>
    `,
  coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  date: "28 de Maio, 2023",
  author: "Pétala Lacerda",
  featured: false,
  categories: ["Gestão Educacional", "Instituições Assistenciais"]
}, {
  id: "3",
  title: "O papel da família no processo educacional de crianças com necessidades especiais",
  excerpt: "Como a parceria entre família e instituição educacional pode potencializar o desenvolvimento de crianças com necessidades especiais.",
  content: `
      <p>A família é o primeiro e mais importante núcleo social de qualquer criança. Quando falamos de crianças com necessidades especiais, o papel da família ganha ainda mais relevância, tornando-se um pilar fundamental no processo educacional e no desenvolvimento global.</p>
      <p>Na CONVIVER, temos observado que os melhores resultados são alcançados quando existe uma parceria sólida entre a instituição e a família. Esta parceria não se limita a reuniões periódicas ou ao acompanhamento de tarefas escolares. Trata-se de um compromisso contínuo, onde família e educadores trabalham juntos com objetivos comuns.</p>
      <p>Os pais são os maiores conhecedores das particularidades de seus filhos - suas preferências, dificuldades, formas de comunicação e aprendizado. Este conhecimento é valioso para os educadores, que podem adaptar suas estratégias pedagógicas de acordo com as necessidades específicas de cada criança.</p>
      <p>Por outro lado, os profissionais da educação possuem conhecimento técnico e experiência que podem auxiliar as famílias a lidar com desafios cotidianos. Orientações sobre como estimular determinadas habilidades em casa, como lidar com comportamentos desafiadores ou como adaptar o ambiente doméstico são exemplos de contribuições que a instituição pode oferecer às famílias.</p>
      <p>É importante ressaltar que cada família tem sua própria dinâmica e enfrenta desafios específicos. Algumas famílias podem precisar de mais suporte emocional, outras de orientação prática ou de informações sobre direitos e recursos disponíveis. A instituição deve estar preparada para acolher estas diferentes necessidades, oferecendo um atendimento personalizado.</p>
      <p>Grupos de apoio para familiares também têm se mostrado extremamente benéficos. Estes espaços permitem a troca de experiências entre pessoas que vivenciam situações semelhantes, promovendo não apenas o aprendizado mútuo, mas também o fortalecimento emocional.</p>
      <p>Em suma, quando família e instituição caminham juntas, unindo forças e compartilhando conhecimentos, quem mais se beneficia é a criança. Esta parceria potencializa o desenvolvimento, amplia possibilidades e constrói um caminho mais seguro e acolhedor para todos os envolvidos.</p>
    `,
  coverImage: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
  date: "15 de Abril, 2023",
  author: "Pétala Lacerda",
  featured: false,
  categories: ["Família", "Educação Especial"]
}];
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};
export const getRecentPosts = (count: number): BlogPost[] => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  }).slice(0, count);
};