# Lista de Tarefas - Desafio ResTIC 36

## Descrição do Projeto

Este projeto corresponde ao desafio da residência em software ResTIC36, implementando o design proposto no início do curso no Figma. Faz parte da trilha de desenvolvimento mobile, oferecida pelo CEPEDI.

O objetivo é criar uma aplicação de lista de tarefas utilizando React Native, que permite adicionar tarefas, visualizar a lista, ver detalhes das tarefas e exibir uma contagem total. O aplicativo também inclui cartões (`CardNumber`) para representar informações adicionais ou estatísticas.

### Funcionalidades Implementadas

- **Adição de Tarefas**: Permite ao usuário adicionar novas tarefas com descrição. O sistema verifica campos vazios e evita duplicações.
- **Contagem de Tarefas**: Exibe o total de tarefas e finalizadas. A contagem é atualizada automaticamente.
- **Ordenação de Tarefas**: Utiliza `sort` e `useMemo` para ordenar tarefas por status (em aberto primeiro).
- **Interface de Usuário**:
  - Campo de entrada para novas tarefas.
  - Botão com ícone para adicionar tarefas.
  - Lista de tarefas dividida entre "em aberto" e "finalizadas".
  - Mensagens para listas vazias.
  - Remoção de tarefas com confirmação.
  - Cartões (`CardNumber`) para exibir estatísticas.
- **Gerenciamento de Estado**: Usa `useContext` e `AsyncStorage` para persistência de dados.
- **Validação de Formulário**: Implementa validação básica com `Formik` e `Yup`.
- **Layout Responsivo**: Usa `flex-grow` para garantir que o texto das tarefas não quebre o layout.
- **Alertas Personalizados**: Implementação de componentes de alerta customizados.

### Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento móvel.
- **React Navigation**: Navegação entre telas.
- **Styled Components**: Estilização e temas.
- **React Context API**: Gerenciamento de estado global.
- **AsyncStorage**: Persistência de dados local.
- **Formik & Yup**: Validação de formulários.

## Instruções para Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/diogomasc/ToDoList_DesafioResTIC36.git
   ```

2. **Navegue até o Diretório do Projeto**:
   ```bash
   cd ToDoList_DesafioResTIC36
   ```

3. **Instale as Dependências**:
   ```bash
   npm install
   ```

4. **Inicie o Projeto**:
   ```bash
   npm start
   ```

## Telas 

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/0ddddd38-5dc9-4018-9299-deab233fc158" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/a91b3929-aaf2-4bfb-a872-a960b9276d5f" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/bf1e0c39-d707-4b5f-b2f7-9e9bbd71b6b4" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/fb19cf3d-35ce-4487-8798-38805757208c" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/bbb180c0-1e0e-44c2-86bc-62c65a82b06d" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/81040181-0b0f-4137-8f7d-a67714e91dbe" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/a671f2e4-b38a-4c36-8d6a-d8f2ed90d373" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/0d9819cc-6d72-42b1-bc25-4ab4fa8e5606" alt="Tela 8" style="height: 500px; margin-right: 10px;">

</div>
