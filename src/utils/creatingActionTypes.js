//Функция для создания типов action в редьюсере
export default actions =>
Object.keys(actions).reduce(
    (acc, key) => ({
        ...acc,
        [key]: actions[key].type,
    }), {}
);