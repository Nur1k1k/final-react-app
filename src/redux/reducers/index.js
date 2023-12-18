// Импортируем редуктор handleCart, который будет отвечать за обработку состояния корзины.
import handleCart from "./handleCart";

// Импортируем функцию combineReducers из библиотеки Redux, которая объединяет различные редукторы в один корневой редуктор.
import { combineReducers } from "redux";

// Создаем корневые редукторы (rootReducers) с помощью функции combineReducers, передавая ей объект, в котором каждое свойство соответствует отдельному редуктору.
const rootReducers = combineReducers({
  handleCart, // Привязываем редуктор handleCart к ключу с именем handleCart в корневых редукторах.
});

// Экспортируем созданные корневые редукторы, чтобы они могли быть использованы в создании хранилища.
export default rootReducers;
