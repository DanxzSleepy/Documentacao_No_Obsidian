> **UC10 – Realizar Testes nas Aplicações Desenvolvidas Remota**  
> **Data de conclusão:** 10/10/2025 às 23:59  
> **Tema:** A importância, os métodos e as ferramentas para a garantia de qualidade (Quality Assurance - QA)

---

## Objetivo Geral
Realizar uma pesquisa aprofundada sobre o universo dos testes de software, compreendendo as diferentes metodologias, níveis de aplicação e as ferramentas que sustentam o desenvolvimento de aplicações **robustas e confiáveis**.

---

## 1. Níveis e Tipos de Testes (Metodologia)

### Hierarquia de Testes (Testing Pyramid)
A pirâmide de testes representa a proporção ideal de cada tipo de teste em um projeto.  
Na base estão os **testes unitários**, mais rápidos e numerosos; no topo, os **testes de aceitação**, mais complexos e demorados.

---

### Níveis de Teste

#### Teste Unitário (Unit Testing)
- **O que é:** Testa pequenas partes do código (funções, métodos, classes).  
- **Por que é o primeiro:** Detecta falhas rapidamente antes da integração.  
- **Quem realiza:** Desenvolvedores.

#### Teste de Integração (Integration Testing)
- **Foco:** Verifica a interação entre módulos e componentes.  
- **Importância:** Garante que as partes funcionem bem juntas.  
- **Exemplo:** Testar a comunicação entre o backend e o banco de dados.

#### Teste de Sistema / E2E (End-to-End Testing)
- **O que faz:** Simula o fluxo completo do usuário.  
- **Objetivo:** Validar o comportamento do sistema como um todo.  
- **Exemplo:** Testar o login, o envio de formulário e o logout.

#### Teste de Aceitação do Usuário (UAT)
- **Propósito:** Confirmar que o sistema atende aos requisitos do cliente.  
- **Quem valida:** Usuário final ou cliente.  
- **Quando ocorre:** Antes da entrega final do software.

---

### Tipos de Testes Adicionais

#### Teste de Regressão
- **Função:** Garantir que novas alterações não quebrem funcionalidades antigas.  
- **Importância:** Fundamental após correções de bugs e novas features.

#### Teste de Performance / Carga
- **Objetivo:** Avaliar velocidade, estabilidade e escalabilidade sob alta demanda.  
- **Exemplo:** Simular 1.000 usuários acessando o site simultaneamente.

#### Teste de Segurança
- **Meta:** Identificar vulnerabilidades e falhas de autenticação.  
- **Métodos:** Testes de penetração, verificação de criptografia, injeção de SQL.

---

## 2. Ferramentas e Frameworks Populares (Tecnologia)

### Automação de Testes Web (Funcionais / E2E)
- **Selenium:** Popular, suporta várias linguagens e browsers.  
- **Cypress:** Rápido, moderno e integrado com JavaScript/TypeScript.

### Testes de Carga / Performance
- **Apache JMeter:** Ferramenta open-source amplamente usada para simulações de carga.  
- **Gatling:** Ideal para testes em aplicações web de alta performance.

### Testes Unitários
- **PyTest (Python):** Simples, poderoso e extensível.  
- **JUnit (Java):** Framework padrão na comunidade Java, integrado com CI/CD.

### Gestão de Testes e Rastreamento de Bugs
- **Jira:** Usado em equipes ágeis para gerenciar tarefas e bugs.  
- **TestRail:** Focado em relatórios e gestão de casos de teste.

---

## 3. Testes no Contexto de Desenvolvimento Ágil (Prática)

### TDD (Test-Driven Development)
**Ciclo “Red – Green – Refactor”:**
1. **Red:** Escreve um teste que falha.  
2. **Green:** Implementa o código mínimo para o teste passar.  
3. **Refactor:** Melhora o código mantendo o teste passando.

> **Benefício:** Obriga o desenvolvedor a pensar primeiro na funcionalidade e qualidade, reduzindo retrabalho.

---

### CI/CD (Continuous Integration / Continuous Delivery)
- **Integração Contínua:** Cada mudança no código dispara testes automáticos.  
- **Entrega Contínua:** Deploy automatizado após os testes passarem.  
- **Ferramentas Comuns:** GitHub Actions, Jenkins, GitLab CI.

> **Impacto:** Garante entregas rápidas, estáveis e sem comprometer a qualidade.

---

## Conclusão
Os testes de software são um **pilar essencial da qualidade**.  
Eles não apenas identificam falhas, mas asseguram que o software se mantenha confiável, escalável e seguro ao longo de sua evolução.  
Com a integração de metodologias ágeis, ferramentas automatizadas e boas práticas, o QA se torna uma parte vital e contínua do desenvolvimento moderno.

---

## Referências Bibliográficas
- [Documentação oficial do Selenium](https://www.selenium.dev/documentation/)
- [Cypress Docs](https://docs.cypress.io/)
- [Apache JMeter User Manual](https://jmeter.apache.org/usermanual/)
- [PyTest Documentation](https://docs.pytest.org/)
- Pressman, R. S. *Engenharia de Software: Uma Abordagem Profissional*.  
- Sommerville, I. *Engenharia de Software*.
