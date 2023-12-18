// Действие для добавления товара в корзину
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product,
    };
  };
  
  // Действие для удаления товара из корзины
  export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product,
    };
  };
  