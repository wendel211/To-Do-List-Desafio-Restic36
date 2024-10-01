

## Lista de Tarefas - Desafio ResTIC 36

**Descrição do Projeto**

Este projeto faz parte do desafio da residência em software ResTIC 36, oferecido pelo CEPEDI, e implementa um aplicativo de lista de tarefas (To-Do List) usando TypeScript e React Native. O design foi previamente definido no início do curso utilizando o Figma.

O principal objetivo é criar um aplicativo para gerenciar tarefas, permitindo que os usuários possam adicionar, visualizar, organizar e remover tarefas. O aplicativo inclui funcionalidades como exibição da contagem total de tarefas, visualização de tarefas concluídas, e uso de cartões (CardNumber) para representar informações adicionais ou estatísticas.

## Funcionalidades Implementadas

1. Adição de Tarefas
Descrição: O usuário pode adicionar uma nova tarefa inserindo uma descrição no campo de entrada.
Validação: O sistema evita o cadastro de tarefas sem descrição e impede duplicações, utilizando o pacote Formik para gerenciamento de formulários e Yup para validação.
2. Contagem de Tarefas
Descrição: Exibe o número total de tarefas cadastradas e o número de tarefas finalizadas.
Atualização Automática: A contagem é atualizada automaticamente conforme novas tarefas são adicionadas ou finalizadas.
3. Ordenação de Tarefas
Descrição: As tarefas são automaticamente ordenadas pela sua situação (em aberto ou finalizadas), exibindo as tarefas em aberto no topo.
Tecnologia: Utiliza a função sort combinada com useMemo para otimização do desempenho.
4. Interface de Usuário
Componentes:
Campo de entrada de texto para novas tarefas.
Botão com ícone para adicionar a tarefa.
Lista de tarefas dividida em duas seções: "Em Aberto" e "Finalizadas".
Mensagem indicando que a lista está vazia, caso não haja tarefas cadastradas.
Remoção de tarefas com uma janela de confirmação.
Cartões (CardNumber) exibindo informações adicionais, como contagem de tarefas e outras estatísticas.
5. Gerenciamento de Estado
Descrição: O estado global do aplicativo é gerenciado usando React Context API para garantir consistência dos dados entre diferentes componentes.
Persistência: As tarefas são persistidas localmente utilizando AsyncStorage, garantindo que os dados não sejam perdidos ao fechar o aplicativo.
6. Validação de Formulário
Tecnologia: A validação de entrada de dados é implementada com Formik e Yup para assegurar que o usuário não insira dados inválidos.
7. Layout Responsivo
Descrição: O layout foi projetado para ser responsivo, utilizando propriedades como flex-grow para garantir que os textos das tarefas se ajustem corretamente, evitando quebras no design.
8. Alertas Personalizados
Descrição: Componentes customizados foram criados para exibir alertas e mensagens ao usuário, como confirmações ao excluir tarefas.
Tecnologias Utilizadas
React Native: Framework principal para desenvolvimento do aplicativo.
TypeScript: Tipagem estática para maior robustez do código.
React Navigation: Biblioteca utilizada para navegação entre telas.
Styled Components: Utilizado para estilização e temas no aplicativo.
React Context API: Gerenciamento de estado global entre os componentes.
AsyncStorage: Utilizado para armazenamento e persistência de dados localmente.
Formik & Yup: Implementados para gerenciamento e validação de formulários.
Estrutura do Projeto
Principais Diretórios:
src/components: Componentes reutilizáveis como CardNumber, lista de tarefas e botões.
src/screens: Telas principais do aplicativo, como Home, Detalhes da Tarefa, etc.
src/context: Contexto global para gerenciamento do estado do aplicativo.
src/hooks: Custom hooks para funcionalidades reutilizáveis, como integração com o AsyncStorage.
src/styles: Definições de estilo para os componentes e telas do aplicativo.
Instruções para Executar o Projeto
1. Clonar o Repositório
Para obter uma cópia local do projeto, execute o seguinte comando:

bash
Copiar código
git clone https://github.com/wendel211/To-Do-List-Desafio-Restic36.git
2. Navegar até o Diretório do Projeto
Entre no diretório recém-clonado:

bash
Copiar código
cd ToDoList_DesafioResTIC36
3. Instalar as Dependências
Instale todas as dependências necessárias utilizando o gerenciador de pacotes npm:

bash
Copiar código
npm install
4. Iniciar o Projeto
Por fim, inicie o projeto no ambiente de desenvolvimento com o seguinte comando:

bash
Copiar código
npm start
Isso abrirá o aplicativo no emulador ou dispositivo físico, dependendo do ambiente configurado.

## **Contribuições**
Se você deseja contribuir com este projeto, siga os passos abaixo:

Fork o repositório.
Crie uma nova branch com a funcionalidade ou correção:
bash
Copiar código
git checkout -b minha-feature
Faça um commit com suas mudanças:
bash
Copiar código
git commit -m 'Adiciona nova funcionalidade'
Envie para a branch:
bash
Copiar código
git push origin minha-feature
Crie um Pull Request para análise.
