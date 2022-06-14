# Desafio 04 Introdução ao SOLID

Resposta ao `Desafio 04 - Introdução ao SOLID`, da trilha de Back-end do curso [Ignite da Rockeseat](https://www.rocketseat.com.br/ignite).

## Requisitos do desafio
### POST `/users`
- [x] A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

- [x] A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

- [x] A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

- [x] A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.

### Teste do model

- [ ] Should be able to create an user with all props
### Testes do repositório

- [ ] Should be able to create new users
    
- [ ] Should be able to list all users

- [ ] Should be able to find user by ID
    
- [ ] Should be able to find user by e-mail address

- [ ] Should be able to turn an user as admin
    
### Testes de useCases

- [ ] Should be able to create new users

- [ ] Should not be able to create new users when email is already taken

- [ ] Should be able to turn an user as admin

- [ ] Should not be able to turn a non existing user as admin

- [ ] Should be able to get user profile by ID

- [ ] Should not be able to show profile of a non existing user

- [ ] Should be able to list all users

- [ ] Should not be able to a non admin user get list of all users

- [ ] Should not be able to a non existing user get list of all users
### Testes das rotas

- [ ] Should be able to create new users
        
- [ ] Should not be able to create new users when email is already taken

- [ ] Should be able to turn an user as admin
    
- [ ] Should not be able to turn a non existing user as admin

- [ ] Should be able to get user profile by ID

- [ ] Should not be able to show profile of a non existing user
    
- [ ] Should be able to list all users

- [ ] Should not be able to a non admin user get list of all users
    
- [ ] Should not be able to a non existing user get list of all users
