# Handlebars é um Template Engine

## Introdução

O Handlebars é um template engine para JavaScript que permite que você crie templates HTML estruturados de forma mais fácil e rápida. Ele utiliza marcações chamadas expressões handlebars para inserir dados dinâmicos em suas páginas HTML.

Por exemplo, se você tiver uma variável chamada nome com o valor "João", pode usar uma expressão handlebars para exibi-la na página HTML assim:

    <p>Olá, meu nome é {{nome}}.</p>

Ao processar o template, o Handlebars substituirá a expressão pelo valor da variável, produzindo o seguinte HTML:

    <p>Olá, meu nome é João.</p>

O Handlebars também oferece recursos como laços e condicionais, permitindo que você crie templates mais complexos. Ele é compatível com a maioria dos navegadores e pode ser usado tanto no lado do cliente quanto no lado do servidor.

## Laço de Repetição

Com o Handlebars, é possível usar laços para iterar sobre um array de dados e exibir um template para cada item do array. Isso é útil quando você quer exibir uma lista de itens de forma dinâmica.

Por exemplo, suponha que você tenha um array chamado produtos com os seguintes itens:

    [
    {nome: "Produto 1", preco: 9.99},
    {nome: "Produto 2", preco: 19.99},
    {nome: "Produto 3", preco: 29.99}
    ]

Você pode usar um laço handlebars para exibir uma lista desses produtos assim:

    <ul>
    {{#each produtos}}
        <li>{{nome}} (R$ {{preco}})</li>
    {{/each}}
    </ul>

O resultado seria a seguinte lista HTML:

    <ul>
    <li>Produto 1 (R$ 9.99)</li>
    <li>Produto 2 (R$ 19.99)</li>
    <li>Produto 3 (R$ 29.99)</li>
    </ul>

## Condicionais

Além de laços, o Handlebars também permite que você use condicionais para exibir ou esconder partes do template baseado em certas condições. Por exemplo:

    {{#if mostrarMensagem}}
    <p>Essa é uma mensagem importante!</p>
    {{/if}}

Nesse exemplo, se a variável mostrarMensagem tiver o valor true, a mensagem será exibida. Se tiver o valor false, ela será ignorada.

Esses são apenas alguns exemplos de como o Handlebars pode ajudar você a criar templates HTML de forma mais fácil e rápida. Ele oferece muitas outras opções e recursos para ajudá-lo a criar templates mais complexos e personalizados.

## Sobre o else

Sim, o Handlebars também oferece a opção de usar um bloco else junto com um condicional if. Isso permite que você especifique o que deve ser exibido caso a condição não seja atendida.

Por exemplo:

	{{#if mostrarMensagem}}
	  <p>Essa é uma mensagem importante!</p>
	{{else}}
	  <p>Não há mensagens importantes no momento.</p>
	{{/if}}

Nesse exemplo, se a variável mostrarMensagem tiver o valor true, a primeira mensagem será exibida. Se tiver o valor false, a segunda mensagem será exibida.

Você também pode usar múltiplos blocos else if para testar várias condições diferentes:

	{{#if mostrarMensagem}}
	  <p>Essa é uma mensagem importante!</p>
	{{else if outraCondicao}}
	  <p>Essa é outra mensagem importante!</p>
	{{else}}
	  <p>Não há mensagens importantes no momento.</p>
	{{/if}}
	
	
Nesse caso, se a variável mostrarMensagem tiver o valor true, a primeira mensagem será exibida. Se tiver o valor false e a variável outraCondicao tiver o valor true, a segunda mensagem será exibida. Se ambas tiverem o valor false, a terceira mensagem será exibida.


## Conclusão

Pronto eu falei dos principais comandos no handlebars para criação de paginas html dinamicas.

Um bom trabalho.

