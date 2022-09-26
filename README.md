# API da aplicação de um cadastro de clientes.

## Métodos 🛠️

| Método | Endpoint | Descrição | Autorização Token |
|---|---|---|---|
| `GET` | `/client` |`lista todos os clientes cadastrados` | `Sim` |
| `POST` | `/client` |`criação de um novo cliente` | `Não` |
| `POST` | `/login` |`login do cliente` | `Não` |
| `GET` | `/client/:id` |`lista apenas um cliente relacionado pelo id` | `Sim` |
| `PATCH` | `/client/:id` | `atualiza o cliente relacionado pelo id` | `Sim` |
| `DELETE` | `/client/:id` |`deleta o cliente relacionado pelo id` | `Sim` |
| `POST` | `/client/contact` |`cria um contato para o cliente relacionado pelo id` | `Sim` |
| `GET` | `/client/:id/contact` |`lista os contatos do cliente relacionado pelo id` | `Sim` |
| `PATCH` | `/client/:id/contact/:idContact` |`edita os contatos do cliente relacionado pelo id` | `Sim` |
| `DELETE` | `/client/:id/contact/:idContact` |`exclui os contatos do cliente relacionado pelo id` | `Sim` |
