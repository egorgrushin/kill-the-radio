const glob = require('glob'),
    path = require('path');

const states = [{
    "Scenario": {
        "Id": 24,
        "Title": "Initial"
    },
    "Id": 26,
    "Title": "InitialState",
    "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
    "DialogType": 9,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 24,
        "Title": "Initial"
    },
    "Id": 27,
    "Title": "Operator",
    "Message": "Ожидайте ответа оператора...",
    "DialogType": 8,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 25,
        "Title": "Отключение гудка"
    },
    "Id": 28,
    "Title": "Гудок подключен.",
    "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
    "DialogType": 3,
    "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
}, {
    "Scenario": {
        "Id": 25,
        "Title": "Отключение гудка"
    },
    "Id": 29,
    "Title": "Гудок не подключен.",
    "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
    "DialogType": 4,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 25,
        "Title": "Отключение гудка"
    },
    "Id": 30,
    "Title": "Подтверждение. ",
    "Message": "Вы уверены что хотите отключить услугу гудок?",
    "DialogType": 4,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 26,
        "Title": "Обещанный платеж"
    },
    "Id": 31,
    "Title": "Обещанный платеж, по какому номеру?",
    "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
    "DialogType": 3,
    "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
}, {
    "Scenario": {
        "Id": 26,
        "Title": "Обещанный платеж"
    },
    "Id": 32,
    "Title": "Обещанный платеж, на какую сумму?",
    "Message": "Максимальная сумма обещанного платежа {{APIObeshanyPayment.max_value}} рублей. На какую сумму вы желаете пополнить баланс ?",
    "DialogType": 6,
    "DialogDataJSON": "{max_value:\"APIObeshanyPayment.max_value\"}"
}, {
    "Scenario": {
        "Id": 26,
        "Title": "Обещанный платеж"
    },
    "Id": 33,
    "Title": "Обещанный платеж. Подтверждение.",
    "Message": "Вы уверены что хотите активировать услугу обещанный платеж?   \nЗа использование обещанного платежа взимается плата   \nДо 30 руб. бесплатно   \nОт 31 до 99 руб. 7 руб.\nОт 100 до 199 руб. 10 руб.\nОт 200 до 499 руб. 25 руб.\nОт 500 руб. и выше 50 руб.",
    "DialogType": 4,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 29,
        "Title": "Перевод средств"
    },
    "Id": 34,
    "Title": "перевести откуда",
    "Message": "С какого счета вы желаете отправить средства",
    "DialogType": 3,
    "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
}, {
    "Scenario": {
        "Id": 29,
        "Title": "Перевод средств"
    },
    "Id": 35,
    "Title": "Какую сумму перевести?",
    "Message": "Какую сумму перевести?",
    "DialogType": 5,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 29,
        "Title": "Перевод средств"
    },
    "Id": 37,
    "Title": "куда первести",
    "Message": "Введите номер получателя платежа",
    "DialogType": 7,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 29,
        "Title": "Перевод средств"
    },
    "Id": 38,
    "Title": "Введите код из смс",
    "Message": "Вам отправлено смс с кодом, введите этот код для подтверждения перевода.",
    "DialogType": 6,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 39,
    "Title": "2",
    "Message": "2",
    "DialogType": 1,
    "DialogDataJSON": "2"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 40,
    "Title": "2",
    "Message": "2",
    "DialogType": 2,
    "DialogDataJSON": "2"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 41,
    "Title": "2",
    "Message": "2",
    "DialogType": 1,
    "DialogDataJSON": "2"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 42,
    "Title": "3",
    "Message": "4",
    "DialogType": 1,
    "DialogDataJSON": "5"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 43,
    "Title": "5",
    "Message": "5",
    "DialogType": 1,
    "DialogDataJSON": "5"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 45,
    "Title": "2",
    "Message": "2",
    "DialogType": 1,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 31,
        "Title": "dev"
    },
    "Id": 46,
    "Title": "WAT",
    "Message": "dejlgfsekgiegihreg",
    "DialogType": 0,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 31,
        "Title": "dev"
    },
    "Id": 47,
    "Title": "Wat",
    "Message": "wefegeg",
    "DialogType": 0,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 50,
    "Title": "3",
    "Message": "3",
    "DialogType": 2,
    "DialogDataJSON": "{}"
}, {
    "Scenario": {
        "Id": 51,
        "Title": "Новый сценарий"
    },
    "Id": 51,
    "Title": "2",
    "Message": "2",
    "DialogType": 1,
    "DialogDataJSON": "{}"
}];
export default states;