const Sequelize = require('sequelize');

//**  Подключение к БД  **//
const sequelize = new Sequelize(
    'proxy', // название Базы Данных
    'root', // Пользователь Базы Данных 
    '', // Пароль для пользователя root
    {
        host: 'localhost', // Адрес сервера БД
        dialect: 'postgres', // Название сервера БД

    }
);

// Экспорт экземпляра подключения
// Нужен для использования в других файлах
module.exports = sequelize;
