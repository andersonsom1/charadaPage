# Explica��o do C�digo 

Este arquivo HTML implementa uma p�gina interativa de charadas. Abaixo est� uma explica��o detalhada de seu funcionamento:

## Estrutura Visual

- **T�tulo:** "Charadas Interativas" exibido no topo da p�gina.
- **Imagem:** Uma imagem chamada `charada.jpg` � exibida abaixo do t�tulo.
- **Campo de Pergunta:** Um campo de texto exibe a pergunta da charada atual.
- **Bot�es:**
  - **Ver resposta:** Exibe a resposta da charada atual.
  - **Pr�xima:** Avan�a para a pr�xima charada.
- **Campo de Resposta:** Exibe a resposta da charada quando solicitada.

## Funcionamento do JavaScript

1. **Carregamento das Charadas:**
   - Ao abrir a p�gina, o script faz uma requisi��o ao arquivo `charadas.json` usando `fetch`.
   - O conte�do do arquivo (um array de objetos com `pergunta` e `resposta`) � armazenado na vari�vel `charadas`.

2. **Exibi��o de Charada Aleat�ria:**
   - A fun��o `mostrarCharada()` seleciona uma charada aleat�ria do array e exibe sua pergunta no campo de texto.
   - O campo de resposta � limpo a cada nova charada.

3. **Ver Resposta:**
   - Ao clicar no bot�o "Ver resposta", a resposta da charada atual � exibida abaixo dos bot�es.

4. **Pr�xima Charada:**
   - Ao clicar no bot�o "Pr�xima", o �ndice � incrementado e a pr�xima charada do array � exibida.
   - O �ndice � ajustado para voltar ao in�cio caso ultrapasse o n�mero de charadas.

## Observa��es T�cnicas

- O campo de pergunta � somente leitura.
- O arquivo `charadas.json` deve estar no mesmo diret�rio do HTML.
- O funcionamento do `fetch` pode exigir um servidor local devido a restri��es de seguran�a dos navegadores.

## Exemplo de Estrutura do `charadas.json`
