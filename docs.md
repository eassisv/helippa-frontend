# Documentação

- [Telas](#telas)
  - [LoginScreen](#loginscreen)
  - [HomeScreen](#homescreen)
  - [EventDetailScreen](#eventdetailscreen)
  - [CreateEventScreen](#createeventscreen)
  - [LogoutScreen](#logoutscreen)
- [Navegadores](#navegadores)
  - [AppNavigator](#appnavigator)
  - [MainNavigator](#mainnavigator)
  - [HomeNavigator](#homenavigator)

## Telas

### `LoginScreen`

Exibe uma tela *modal* com o *slogan* e a logotipo do aplicativo, para dispensá-lo basta deslizá-lo para cima ou apertar nas setas que aparece na tela. Abaixo da tela modal tem um botão para executar login/cadastro no aplicativo através do Facebook.

### `HomeScreen`

Exibe a lista de eventos disponíveis. Para acessar os detalhes do evento basta tocar na imagem ou título do evento.

### `EventDetailScreen`

Exibe os detalhes do evento, como horário, data, local, descrição, etc.

### `CreateEventScreen`

Permite cadastrar um novo evento. É necessário nome, data e horário para o evento. Também é possível fornecer uma foto para a capa do evento e uma descrição.

### `LogoutScreen`

Apenas realiza o logout do usuário e o retorna para a `LoginScreen`.

## Navegadores

Os navegadores gerênciam as rotas do aplicativo.

### `AppNavigator`

Navegação inicial do aplicativo. Possui duas rotas uma para a `LoginScreen` e outra para o `MainNavigator`.

### `MainNavigator`

Navegação principal do aplicativo. Possui três rotas, uma para o `HomeNavigator`, uma para a `CreateEventScreen` e uma para a `LogoutScreen`.

### `HomeNavigator`

Possui duas rotas, uma para a `HomeScreen` e outra para a `EventDetailScreen`.
