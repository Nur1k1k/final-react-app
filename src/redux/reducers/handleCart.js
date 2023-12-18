// Начальное состояние корзины (пустой массив).
const cart = [];

// Редуктор handleCart, отвечающий за обработку состояния корзины.
const handleCart = (state = cart, action) => {
  const product = action.payload;
  
  // Используем оператор switch для обработки различных типов действий (action.type).
  switch (action.type) {
    case "ADDITEM":
      // Проверяем, существует ли товар уже в корзине.
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        // Если товар уже существует, увеличиваем количество (qty).
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // Если товара еще нет в корзине, добавляем его с начальным количеством 1.
        return [...state, { ...product, qty: 1 }];
      }
      
    case "DELITEM":
      // Проверяем, существует ли товар для удаления в корзине.
      const exist1 = state.find((x) => x.id === product.id);
      
      if (exist1.qty === 1) {
        // Если количество товара равно 1, удаляем его из корзины.
        return state.filter((x) => x.id !== exist1.id);
      } else {
        // Если количество товара больше 1, уменьшаем количество (qty).
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      
    default:
      // Если действие не соответствует ни одному case, возвращаем текущее состояние.
      return state;
  }
};

// Экспортируем редуктор handleCart для использования в корневых редукторах.
export default handleCart;
