# passo a passo para instalação do CLI

1. instalar/verificar se o nodejs está instalado no seu computador
=> por conta do [npm], que é um gerenciador de pacootes que vem instalado junto com o nodejs.

2. Liberar a instalação do CLI pelo PowerShell
=> Acessar o PowerShell como administrador e vai inserir o seguinte script:
=> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
=> Após, digitar a opção A - Sim para todos.

3. instalar no PowerShell o CLI do angular:
=> npm i -g @angular/cli

4. Incluir o caminho do npm nas variáveis de ambiente:
=> Disco local C -> Usuários -> escolher o usuário utilizado -> procurar AppData as pastas ocultas -> roaming -> entrar na pasta npm e copiar o caminho da pasta, em seguida, adicionar às variáveis de ambiente.
=> Para saber se o angular esta instalado: Abra o cmd e digite "ng v".


# Comandos principais do Angular CLI
ng v => verifica se o angular esta instalado e em qual versão.
ng new NomeDoApp => Cria um novo App com o nome especificado.
ng serve => Inicializar o servidor.
ng g c NomeDoComponente => Cria um novo componente.