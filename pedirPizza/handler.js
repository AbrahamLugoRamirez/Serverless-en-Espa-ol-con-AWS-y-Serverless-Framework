// POST - https://37xkv1yo4h.execute-api.us-east-1.amazonaws.com/pedido

"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports.hacerPedido = async (event, callback) => {
  const orderId = uuidv4();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "El pedido fue registrado con el numero de orden:" + orderId + "",
    }),
  };
  callback(null, response);
};
