# Explicação do Código 

Este arquivo HTML implementa uma página interativa de charadas. Abaixo está uma explicação detalhada de seu funcionamento:

## Estrutura Visual

- **Título:** "Charadas Interativas" exibido no topo da página.
- **Imagem:** Uma imagem chamada `charada.jpg` é exibida abaixo do título.
- **Campo de Pergunta:** Um campo de texto exibe a pergunta da charada atual.
- **Botões:**
  - **Ver resposta:** Exibe a resposta da charada atual.
  - **Próxima:** Avança para a próxima charada.
- **Campo de Resposta:** Exibe a resposta da charada quando solicitada.

## Funcionamento do JavaScript

1. **Carregamento das Charadas:**
   - Ao abrir a página, o script faz uma requisição ao arquivo `charadas.json` usando `fetch`.
   - O conteúdo do arquivo (um array de objetos com `pergunta` e `resposta`) é armazenado na variável `charadas`.

2. **Exibição de Charada Aleatória:**
   - A função `mostrarCharada()` seleciona uma charada aleatória do array e exibe sua pergunta no campo de texto.
   - O campo de resposta é limpo a cada nova charada.

3. **Ver Resposta:**
   - Ao clicar no botão "Ver resposta", a resposta da charada atual é exibida abaixo dos botões.

4. **Próxima Charada:**
   - Ao clicar no botão "Próxima", o índice é incrementado e a próxima charada do array é exibida.
   - O índice é ajustado para voltar ao início caso ultrapasse o número de charadas.

## Observações Técnicas

- O campo de pergunta é somente leitura.
- O arquivo `charadas.json` deve estar no mesmo diretório do HTML.
- O funcionamento do `fetch` pode exigir um servidor local devido a restrições de segurança dos navegadores.

## Exemplo de Estrutura do `charadas.json`
