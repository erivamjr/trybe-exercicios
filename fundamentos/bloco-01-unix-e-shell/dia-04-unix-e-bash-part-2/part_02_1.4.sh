# Exercício 1
# Navegue até a pasta unix_tests ;

# o comando para navegar é o: cd
# vai depender de qual pasta você estiver, e de onde a pasta unix_tests estiver
# use o comando: pwd para verificar em qual pasta você está
cd /home/joaozinho/unix_tests
pwd

# Exercício 2

# Rode o comando ls -l e veja quais as permissões dos arquivos;

ls -l

# Exercício 3

# Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l

chmod a+rw bunch_of_things.txt
ls -l

# Exercício 4

#Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;

chmod a-w bunch_of_things.txt
ls -l

# Exercício 5

# Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .

chmod 644 bunch_of_things.txt
ls -l

