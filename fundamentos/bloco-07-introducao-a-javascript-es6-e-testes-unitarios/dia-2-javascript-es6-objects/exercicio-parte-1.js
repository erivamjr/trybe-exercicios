const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name1 = order.order.delivery.deliveryPerson;
  const name2 = order.order.name;
  const phone = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  return `Olá ${name1}, entrega para: ${name2}, Telefone: ${phone}, R. ${address}, Nº: ${number}, AP: ${apartment}`

}
customerInfo(order);
console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const drinks = order.order.drinks.coke.type;
  const pizzas = Object.keys(order.order.pizza);
  const drinksCokePrice = order.order.drinks.coke.price;
  const discountPrice = order.payment.total = '50';
  return `Olá Luiz Silva, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${discountPrice},00. `

}

orderModifier(order);
console.log(orderModifier(order));

/*  Agora você vai fazer alguns exercícios de fixação.
1-Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
   -Note que o parâmetro da função já está sendo passado na chamada da função.

2-Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
   -Modifique o nome da pessoa compradora.
   -Modifique o valor total da compra para R$ 50,00. */

