# Memoteca

* Este projeto consiste em uma aplicação em Angular, versão 14, que realiza um CRUD (Create, Read, Update e Delete) de lembretes, os quais podem ser criados em três estilos diferentes (rosa, amarelo e azul). O projeto está hospedado no Vercel, e pode ser acessado por meio deste link: https://angular-memoteca-ghmmt6ztn-natalia-r-l.vercel.app/listNotes

* Para que o usuário possa cadastrar e editar os lembretes, foram utilizados Reactive Forms, por meio da importação do ReactiveFormsModule no app.module. 
* O Back End foi simulado por meio da JSON Server, que nada mais é do que um pacote NPM usado para simular uma API REST. Este é o link para o repositório do Back End: https://github.com/natalia-r-l/Memoteca-Fake-API
* A comunicação entre Front e Back foi realizada por meio de requisições HTTP, com a injeção da classe HttpClient. 

Este projeto foi desenvolvido com base nos seguintes cursos da Alura, com a instrutora Nayanne Batista:
* Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD. 
* Angular 14: evoluindo a aplicação. 

## Foram realizadas mudanças de layout, e de usabilidade em relação ao projeto original, para deixá-lo mais aderente ao meu perfil. As imagens abaixo mostram as diferenças entre a página inicial do projeto original e a do meu projeto: 

Projeto com minhas modificações: 

![image](https://github.com/natalia-r-l/Angular-Memoteca/assets/61936956/14338b98-318e-46fa-8c41-ac569b6a33c6)

Projeto original: 

![image](https://github.com/natalia-r-l/Angular-Memoteca/assets/61936956/b31ea399-bc0e-45fa-bacc-39a4894434a8)





### Importante: Há duplicação de estilos CSS pois quando o estilo foi definido globalmente, ocorreram bugs de interface no Vercel. 


______________________________________________________________________________________________________________________________________________________________________________________


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
