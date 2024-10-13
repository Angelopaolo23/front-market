NOTAS PARA GENERAR EL README:

En ordersService al hacer la peticion para añadir una orden y sus items, es necesario que los items vayan en este formato (array de objetos por item):
{
"items": [
{ "product_id": 1, "quantity": 2, "price": 1000 },
{ "product_id": 2, "quantity": 1, "price": 500 }
]
}
-el user_id se lo enviaremos a traves de params
