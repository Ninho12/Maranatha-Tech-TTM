# EJS é um Template Engine

Tamplate Engine é forma de gerar html dinamico como o php faz.

O EJS (Embedded JavaScript) é um template engine para JavaScript que permite você misturar código JavaScript em suas páginas HTML. Aqui estão alguns dos principais comandos do EJS:

    <%= %>: Renderiza o conteúdo HTML escapado.
    <%- %>: Renderiza o conteúdo HTML não escapado.
    <% %>: Executa código JavaScript, mas não renderiza nada.
    <%_ %>: Remove espaços em branco à esquerda do código.
    <%# %>: Adiciona um comentário.
    <%%>: Renderiza um símbolo de porcentagem.

Aqui está um exemplo de como esses comandos podem ser usados em uma visualização do EJS:

    <!DOCTYPE html>
    <html>
    <head>
        <title><%= title %></title>
    </head>
    <body>
        <h1><%= title %></h1>
        <% for (let i = 0; i < 10; i++) { %>
        <p>Contagem: <%= i %></p>
        <% } %>
    </body>
    </html>

Este é um exemplo de codigo EJS.

## Podemos usar também...

Os comandos do javascript como o if e o else e também o for e foreach o while podemos usar função também.

Podemos usar arrays e objetos javascript também podemos dividir o nosso arquivo em partes para melhor organização.

## Incluindo arquivo ejs em outro arquivo ejs

Para incluir um arquivo EJS em outro arquivo EJS, você pode usar o comando include. Por exemplo, suponha que você tenha um arquivo header.ejs com o seguinte conteúdo:

    <header>
    <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/contact">Contato</a></li>
        </ul>
    </nav>
    </header>

Você pode adicionar o arquivo ejs dessa forma:

    <!DOCTYPE html>
    <html>
    <head>
        <title><%= title %></title>
    </head>
    <body>
        <%- include('header') %>
        <h1><%= title %></h1>
        <p>Conteúdo da página</p>
    </body>
    </html>

O caminho para o arquivo incluído é relativo à pasta views. Se o arquivo header.ejs estiver em uma pasta chamada partials, por exemplo, você pode incluí-lo da seguinte maneira:

    <%- include('partials/header') %>

## Conclusão

Pronto isso é tudo sobre o ejs de maneira resumida. Espero que ponha em pratica os conhecimento adquiridos.



