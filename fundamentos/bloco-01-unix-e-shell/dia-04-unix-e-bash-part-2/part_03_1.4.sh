# Exercício 1

# Liste todos os processos;

ps

# Exercício 2

# Agora use o comando sleep 30 & ;

sleep 30 &

# Exercício 3

# Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

ps | grep sleep
kill 1234 # se 1234 for o PID do processo criado no Exercício 2
# deve aparecer "terminated" no terminal

# Exercício 4

# Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

sleep 30
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal

# depois continue a execução usando o comando: bg
bg
# deve aparecer "continued" no terminal
# depois que passar os 30 segundos, deve aparecer "done" no terminal

# Exercício 5

# Crie um processo em background que rode o comando sleep por 300 segundos.

sleep 300 &

# Exercício 6

# Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

sleep 200
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal
sleep 100
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal

# Exercício 7

# Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.

jobs
# deve aparecer "running" à esquerda do processo sleep 300
fg %1 # trazendo o processo sleep 300 para foreground com o comando fg
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal
jobs
# todos os processos devem aparecer como "suspended"

# Exercício 8

# Retome a execução do processo sleep 100 em background com o comando bg .

bg %3 # executando o processo sleep 100 em background com o comando bg
jobs
# deve aparecer "running" à esquerda do processo sleep 100

# Exercício 9

# Termine a execução de todos os processos sleep (mate os processos).

ps | grep sleep
kill 1234 # assumindo que 1234 seja o PID de um dos processos sleep
kill 4567 # assumindo que 4567 seja o PID de um dos processos sleep
kill 7890 # assumindo que 7890 seja o PID de um dos processos sleep
# ou...
killall sleep

