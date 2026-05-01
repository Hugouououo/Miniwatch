<img width="1027" height="605" alt="{2C0794FB-8421-46DA-B98E-E477597E75F9}" src="https://github.com/user-attachments/assets/d35ad9be-11c3-4832-bedd-025141f723f4" />

### Objetivo
O objetivo deste projeto foi desenvolver a lógica de um cronômetro através da manipulação direta de variáveis e contadores no JavaScript, não se utilizando do objeto nativo `Date` para o cálculo de tempo real. 
O projeto explora como o navegador gerencia ciclos de execução e estados de interface.

### Funcionalidades:
- [X] Funções de _Pausar_, _Continuar_ e _Reiniciar_
- [ ] Botão/menu para alternar entre 3 ou mais temas
	- [X] Verde (Padrão)
	- [X] Roxo
	- [X] Vermelho
	- [X] Azul
	- [X] Laranja
- [ ] Sons 
	- [ ] Botão para desativá-los
- [ ] Guardar preferências no `localStorage`
### Bugs:
- [X] Trava depois de ±40 segundos em segundo plano, provavelmente pela inativididade da guia.
	- Conclusão: O bug ocorre devido às limitações do *throttling* (inatividade) de guias do navegador. A questão seria solucionada com o uso de `Date` para calcular o tempo no JavaScript.

- [ ] _:hover_ nos botões não tem transição completa 
