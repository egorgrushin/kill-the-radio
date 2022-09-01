const glob = require('glob'),
    path = require('path');

const transitionExamples = [{
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 134,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 135,
            "Example": "Как отключить гудок"
        }, {
            "Id": 136,
            "Example": "Уберите гудок"
        }, {
            "Id": 137,
            "Example": "Я хочу отключить услугу гудок"
        }, {
            "Id": 263,
            "Example": "я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 133,
    "Example": "Отключить услугу гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 133,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 135,
            "Example": "Как отключить гудок"
        }, {
            "Id": 136,
            "Example": "Уберите гудок"
        }, {
            "Id": 137,
            "Example": "Я хочу отключить услугу гудок"
        }, {
            "Id": 263,
            "Example": "я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 134,
    "Example": "Отключите мне гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 133,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 134,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 136,
            "Example": "Уберите гудок"
        }, {
            "Id": 137,
            "Example": "Я хочу отключить услугу гудок"
        }, {
            "Id": 263,
            "Example": "я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 135,
    "Example": "Как отключить гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 133,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 134,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 135,
            "Example": "Как отключить гудок"
        }, {
            "Id": 137,
            "Example": "Я хочу отключить услугу гудок"
        }, {
            "Id": 263,
            "Example": "я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 136,
    "Example": "Уберите гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 133,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 134,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 135,
            "Example": "Как отключить гудок"
        }, {
            "Id": 136,
            "Example": "Уберите гудок"
        }, {
            "Id": 263,
            "Example": "я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 137,
    "Example": "Я хочу отключить услугу гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 139,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 140,
            "Example": "Как отключить гудок"
        }, {
            "Id": 141,
            "Example": "Уберите гудок"
        }, {
            "Id": 142,
            "Example": "Я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 54,
        "Priority": 50,
        "Title": "Отключить гудок, гудок не подключен",
        "TransitionRequirements": "APIGoodok.status = false",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 138,
    "Example": "Отключить услугу гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 138,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 140,
            "Example": "Как отключить гудок"
        }, {
            "Id": 141,
            "Example": "Уберите гудок"
        }, {
            "Id": 142,
            "Example": "Я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 54,
        "Priority": 50,
        "Title": "Отключить гудок, гудок не подключен",
        "TransitionRequirements": "APIGoodok.status = false",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 139,
    "Example": "Отключите мне гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 138,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 139,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 141,
            "Example": "Уберите гудок"
        }, {
            "Id": 142,
            "Example": "Я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 54,
        "Priority": 50,
        "Title": "Отключить гудок, гудок не подключен",
        "TransitionRequirements": "APIGoodok.status = false",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 140,
    "Example": "Как отключить гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 138,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 139,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 140,
            "Example": "Как отключить гудок"
        }, {
            "Id": 142,
            "Example": "Я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 54,
        "Priority": 50,
        "Title": "Отключить гудок, гудок не подключен",
        "TransitionRequirements": "APIGoodok.status = false",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 141,
    "Example": "Уберите гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 138,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 139,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 140,
            "Example": "Как отключить гудок"
        }, {
            "Id": 141,
            "Example": "Уберите гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 54,
        "Priority": 50,
        "Title": "Отключить гудок, гудок не подключен",
        "TransitionRequirements": "APIGoodok.status = false",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 142,
    "Example": "Я хочу отключить услугу гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 30,
            "Title": "Подтверждение. ",
            "Message": "Вы уверены что хотите отключить услугу гудок?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 318,
            "Example": "своему"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 55,
        "Priority": 50,
        "Title": "Гудок подключен, отключить по своему номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 143,
    "Example": "По своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 27,
            "Title": "Operator",
            "Message": "Ожидайте ответа оператора...",
            "DialogType": 8,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 146,
            "Example": "по другому"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 56,
        "Priority": 50,
        "Title": "Гудок подключен, но отключить по другому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 145,
    "Example": "По чужому"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 27,
            "Title": "Operator",
            "Message": "Ожидайте ответа оператора...",
            "DialogType": 8,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 145,
            "Example": "По чужому"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 56,
        "Priority": 50,
        "Title": "Гудок подключен, но отключить по другому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 146,
    "Example": "по другому"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 27,
            "Title": "Operator",
            "Message": "Ожидайте ответа оператора...",
            "DialogType": 8,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 57,
        "Priority": 50,
        "Title": "Гудок не подключен, отключить по другому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 147,
    "Example": "да"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 29,
            "Title": "Гудок не подключен.",
            "Message": "У вас не подключена услуга гудок. Отключить услугу по чужому номеру?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 58,
        "Priority": 50,
        "Title": "Гудок не подключен, не отключать по другому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 148,
    "Example": "нет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 30,
            "Title": "Подтверждение. ",
            "Message": "Вы уверены что хотите отключить услугу гудок?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 59,
        "Priority": 50,
        "Title": "Подтверждено отключение гудка.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{command=\"APIGoodok.turnOff()\"}",
        "Message": "Услуга успешно удалена по вашему номеру"
    },
    "Id": 149,
    "Example": "да"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 30,
            "Title": "Подтверждение. ",
            "Message": "Вы уверены что хотите отключить услугу гудок?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 60,
        "Priority": 50,
        "Title": "Не отключать гудок.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для отключения мелодии или настройки правил проигрывания, вы можете воспользоваться Web сайтом услуги www.goodok.mts.ru, Мобильным приложением 'Мой МТС', Мобильным приложением 'GOOD’OK', Личным кабинетом IVR 0550. При отключении последней мелодии услуга Goodok автоматически удаляется по вашему номеру."
    },
    "Id": 150,
    "Example": "нет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 151,
    "Example": "Обещанный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 152,
    "Example": "Хочу пополнить счет обещанным платежом"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 153,
    "Example": "доверительный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 154,
    "Example": "дайте мне доверительный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 155,
    "Example": "Дайте мне обещанный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 156,
    "Example": "хочу взять в долг"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 157,
    "Example": "пополните мне счет в долг"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 158,
    "Example": "баланс взаймы"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 159,
    "Example": "баланс в долг"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 32,
            "Title": "Обещанный платеж, на какую сумму?",
            "Message": "Максимальная сумма обещанного платежа {{APIObeshanyPayment.max_value}} рублей. На какую сумму вы желаете пополнить баланс ?",
            "DialogType": 6,
            "DialogDataJSON": "{max_value:\"APIObeshanyPayment.max_value\"}"
        },
        "TransitionExamples": [{
            "Id": 161,
            "Example": "своему"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 62,
        "Priority": 50,
        "Title": "Обещанный платеж доступен, по своему номеру.",
        "TransitionRequirements": "APIObeshanyPayment.availability = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 160,
    "Example": "По своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 32,
            "Title": "Обещанный платеж, на какую сумму?",
            "Message": "Максимальная сумма обещанного платежа {{APIObeshanyPayment.max_value}} рублей. На какую сумму вы желаете пополнить баланс ?",
            "DialogType": 6,
            "DialogDataJSON": "{max_value:\"APIObeshanyPayment.max_value\"}"
        },
        "TransitionExamples": [{
            "Id": 160,
            "Example": "По своему"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 62,
        "Priority": 50,
        "Title": "Обещанный платеж доступен, по своему номеру.",
        "TransitionRequirements": "APIObeshanyPayment.availability = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 161,
    "Example": "своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 163,
            "Example": "своему"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 63,
        "Priority": 50,
        "Title": "Обещанный платеж не доступен, по своему номеру.",
        "TransitionRequirements": "APIObeshanyPayment.availability = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 162,
    "Example": "По своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 162,
            "Example": "По своему"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 63,
        "Priority": 50,
        "Title": "Обещанный платеж не доступен, по своему номеру.",
        "TransitionRequirements": "APIObeshanyPayment.availability = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 163,
    "Example": "своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 27,
            "Title": "Operator",
            "Message": "Ожидайте ответа оператора...",
            "DialogType": 8,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 165,
            "Example": "по другому"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 64,
        "Priority": 50,
        "Title": "Обещанный платеж доступен, по чужому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 164,
    "Example": "По чужому"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 27,
            "Title": "Operator",
            "Message": "Ожидайте ответа оператора...",
            "DialogType": 8,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 164,
            "Example": "По чужому"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 64,
        "Priority": 50,
        "Title": "Обещанный платеж доступен, по чужому номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 165,
    "Example": "по другому"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 33,
            "Title": "Обещанный платеж. Подтверждение.",
            "Message": "Вы уверены что хотите активировать услугу обещанный платеж?   \nЗа использование обещанного платежа взимается плата   \nДо 30 руб. бесплатно   \nОт 31 до 99 руб. 7 руб.\nОт 100 до 199 руб. 10 руб.\nОт 200 до 499 руб. 25 руб.\nОт 500 руб. и выше 50 руб.",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 328,
            "Example": "2"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 66,
        "Priority": 50,
        "Title": "Подтверждено ОП.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{command=\"APIObeshanyPayment.Activate()\"}",
        "Message": "Услуга успешно подключена."
    },
    "Id": 166,
    "Example": "да"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 33,
            "Title": "Обещанный платеж. Подтверждение.",
            "Message": "Вы уверены что хотите активировать услугу обещанный платеж?   \nЗа использование обещанного платежа взимается плата   \nДо 30 руб. бесплатно   \nОт 31 до 99 руб. 7 руб.\nОт 100 до 199 руб. 10 руб.\nОт 200 до 499 руб. 25 руб.\nОт 500 руб. и выше 50 руб.",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 67,
        "Priority": 50,
        "Title": "Не подтверждено ОП.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Вы отказались от подключения услуги"
    },
    "Id": 167,
    "Example": "нет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 168,
    "Example": "Как оплатить за ЖКУ"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 169,
    "Example": "Как оплатить за ЖКХ"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 170,
    "Example": "Хочу заплатить за квартиру"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 171,
    "Example": "Хочу оплатить за квартиру"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 172,
    "Example": "Хочу оплатить за коммуналку"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 173,
    "Example": "Что нужно сделать для оплаты квартиры"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 174,
    "Example": "Что нужно сделать для оплаты за квартиру"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 176,
            "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 175,
    "Example": "Что нужно сделать для оплаты квартплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 168,
            "Example": "Как оплатить за ЖКУ"
        }, {
            "Id": 169,
            "Example": "Как оплатить за ЖКХ"
        }, {
            "Id": 170,
            "Example": "Хочу заплатить за квартиру"
        }, {
            "Id": 171,
            "Example": "Хочу оплатить за квартиру"
        }, {
            "Id": 172,
            "Example": "Хочу оплатить за коммуналку"
        }, {
            "Id": 173,
            "Example": "Что нужно сделать для оплаты квартиры"
        }, {
            "Id": 174,
            "Example": "Что нужно сделать для оплаты за квартиру"
        }, {
            "Id": 175,
            "Example": "Что нужно сделать для оплаты квартплаты"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 68,
        "Priority": 50,
        "Title": "Как оплатить за ЖКХ",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Для того чтобы оплатить за ЖКУ (Москва) Вам необходимо:   \n1.\tПерейти сайт МТС: https://payment.mts.ru   \n2.\tВыбрать интересующую Вас услугу: раздел Квартплата, далее выбрать «ЖКУ (Москва)    \n3.\tВ поле «Код плательщика» указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр.     \n4.\tВ поле «Период начислений» указать период, за который Вы планируете оплатить ЖКУ в формате: ммгг (месяц, год), к примеру: 01.17    \n5.\tВ поле «Добровольная страховка» необходимо выбрать платите Вы со страховкой за квартиру или без страховки.    \n6.\tВ поле «Сумма платежа» необходимо указать сумму платежа, согласно сумме, указанной в Вашей квитанции.     \n7.\tВ поле «Способ оплаты» необходимо выбрать откуда с Вас будут списаны денежные средства: с кошелька МТС-Деньги (ЭДС), с Банковской карты или с Вашего лицевого счета (со счета телефона).     \n7.1.\tПосле этого нажать «Войти» (если Вы не вошли в свой личный кабинет раньше). Далее:     \n•\tВы будете перемешены на страницу, где необходимо будет ввести Ваш номер телефона и установленный Вами ранее пароль.    \n•\tЕсли вход осуществляется впервые, то нажимаете «Получить пароль» и на указанный выше телефон придет смс с одноразовым паролем для входа, который необходимо после входа сразу же изменить.    \n7.2.\tЕсли Вы выбрали оплату с:    \n•\tБанковской карты, то необходимо либо выбрать привязанную Вами ранее карту, либо ввести реквизиты карты в открывшемся для этого окне. Далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\tЛицевого счета (поставили галочку около Вашего номера телефона), далее нажать «Оплатить» и следовать дальнейшим инструкциям.    \n•\t«Мой кошелек», далее нажать «Оплатить» и следовать дальнейшим инструкциям.    "
    },
    "Id": 176,
    "Example": "Есть ли какая-нибудь инструкция по оплате ЖКХ в кошельке МТС-Деньги"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 178,
    "Example": "хочу перевести деньги"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 179,
    "Example": "отправить деньги"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 180,
    "Example": "как совершить перевод"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 181,
    "Example": "как мне совершить перевод"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 182,
    "Example": "перевести с кошелька на кошелек"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 183,
    "Example": "перевести на другой кошелек с карты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 185,
            "Example": "перевод"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 184,
    "Example": "пополнить кошелек со счета мтс"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "TransitionExamples": [{
            "Id": 178,
            "Example": "хочу перевести деньги"
        }, {
            "Id": 179,
            "Example": "отправить деньги"
        }, {
            "Id": 180,
            "Example": "как совершить перевод"
        }, {
            "Id": 181,
            "Example": "как мне совершить перевод"
        }, {
            "Id": 182,
            "Example": "перевести с кошелька на кошелек"
        }, {
            "Id": 183,
            "Example": "перевести на другой кошелек с карты"
        }, {
            "Id": 184,
            "Example": "пополнить кошелек со счета мтс"
        }],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 69,
        "Priority": 50,
        "Title": "Перевести средства",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 185,
    "Example": "перевод"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 35,
            "Title": "Какую сумму перевести?",
            "Message": "Какую сумму перевести?",
            "DialogType": 5,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 70,
        "Priority": 50,
        "Title": "С баланса телефона",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 186,
    "Example": "С баланса телефона"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 34,
            "Title": "перевести откуда",
            "Message": "С какого счета вы желаете отправить средства",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"С баланса телефона\",\"С личного счета МТС Банк\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 29,
                "Title": "Перевод средств"
            },
            "Id": 35,
            "Title": "Какую сумму перевести?",
            "Message": "Какую сумму перевести?",
            "DialogType": 5,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 29,
            "Title": "Перевод средств"
        },
        "Id": 71,
        "Priority": 50,
        "Title": "С личного счета МТС Банк",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 187,
    "Example": "С личного счета МТС Банк"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 188,
    "Example": "посоветуй тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 189,
    "Example": "какой тариф лучше выбрать"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 190,
    "Example": "порекомендуй тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 191,
    "Example": "рекомендация"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 192,
    "Example": "тарифы смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 193,
    "Example": "линейка смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 194,
    "Example": "какой выбрать смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 195,
    "Example": "тарифы мтс"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 196,
    "Example": "лучший тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 197,
    "Example": "выгодный тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 199,
            "Example": "посоветуй пакет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 198,
    "Example": "пакеты услуг"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 188,
            "Example": "посоветуй тариф"
        }, {
            "Id": 189,
            "Example": "какой тариф лучше выбрать"
        }, {
            "Id": 190,
            "Example": "порекомендуй тариф"
        }, {
            "Id": 191,
            "Example": "рекомендация"
        }, {
            "Id": 192,
            "Example": "тарифы смарт"
        }, {
            "Id": 193,
            "Example": "линейка смарт"
        }, {
            "Id": 194,
            "Example": "какой выбрать смарт"
        }, {
            "Id": 195,
            "Example": "тарифы мтс"
        }, {
            "Id": 196,
            "Example": "лучший тариф"
        }, {
            "Id": 197,
            "Example": "выгодный тариф"
        }, {
            "Id": 198,
            "Example": "пакеты услуг"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 77,
        "Priority": 50,
        "Title": "порекомендуй тариф",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Тарифы смарт**\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 199,
    "Example": "посоветуй пакет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 207,
            "Example": "ежемесячная оплата"
        }, {
            "Id": 208,
            "Example": "ежемесячная оплата смарт"
        }, {
            "Id": 209,
            "Example": "регулярные платежи"
        }, {
            "Id": 210,
            "Example": "сколько платить ежемесячно"
        }, {
            "Id": 211,
            "Example": "абоненплата"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 206,
    "Example": "какая абонентская плана"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 206,
            "Example": "какая абонентская плана"
        }, {
            "Id": 208,
            "Example": "ежемесячная оплата смарт"
        }, {
            "Id": 209,
            "Example": "регулярные платежи"
        }, {
            "Id": 210,
            "Example": "сколько платить ежемесячно"
        }, {
            "Id": 211,
            "Example": "абоненплата"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 207,
    "Example": "ежемесячная оплата"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 206,
            "Example": "какая абонентская плана"
        }, {
            "Id": 207,
            "Example": "ежемесячная оплата"
        }, {
            "Id": 209,
            "Example": "регулярные платежи"
        }, {
            "Id": 210,
            "Example": "сколько платить ежемесячно"
        }, {
            "Id": 211,
            "Example": "абоненплата"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 208,
    "Example": "ежемесячная оплата смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 206,
            "Example": "какая абонентская плана"
        }, {
            "Id": 207,
            "Example": "ежемесячная оплата"
        }, {
            "Id": 208,
            "Example": "ежемесячная оплата смарт"
        }, {
            "Id": 210,
            "Example": "сколько платить ежемесячно"
        }, {
            "Id": 211,
            "Example": "абоненплата"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 209,
    "Example": "регулярные платежи"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 206,
            "Example": "какая абонентская плана"
        }, {
            "Id": 207,
            "Example": "ежемесячная оплата"
        }, {
            "Id": 208,
            "Example": "ежемесячная оплата смарт"
        }, {
            "Id": 209,
            "Example": "регулярные платежи"
        }, {
            "Id": 211,
            "Example": "абоненплата"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 210,
    "Example": "сколько платить ежемесячно"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 206,
            "Example": "какая абонентская плана"
        }, {
            "Id": 207,
            "Example": "ежемесячная оплата"
        }, {
            "Id": 208,
            "Example": "ежемесячная оплата смарт"
        }, {
            "Id": 209,
            "Example": "регулярные платежи"
        }, {
            "Id": 210,
            "Example": "сколько платить ежемесячно"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 81,
        "Priority": 50,
        "Title": "какая абонентская плата",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Абонентская плата тарифов Смарт\n\n      \n**Smart mini**   \n200 руб. в месяц\n\n   \n**Smart**   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 211,
    "Example": "абоненплата"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 212,
    "Example": "сколько минут в тарифах"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 213,
    "Example": "сколько минут"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 214,
    "Example": "сколько минут включено"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 215,
    "Example": "сколько я смогу звонить"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 216,
    "Example": "сколько часов включено"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 218,
            "Example": "сколько минут в тарифах смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 217,
    "Example": "минут в пакете"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 212,
            "Example": "сколько минут в тарифах"
        }, {
            "Id": 213,
            "Example": "сколько минут"
        }, {
            "Id": 214,
            "Example": "сколько минут включено"
        }, {
            "Id": 215,
            "Example": "сколько я смогу звонить"
        }, {
            "Id": 216,
            "Example": "сколько часов включено"
        }, {
            "Id": 217,
            "Example": "минут в пакете"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 82,
        "Priority": 50,
        "Title": "сколько минут в тарифах включено",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Минуты в тарифах смарт\n\n      \n**Smart mini**   \nЗвонки 200 мин на все сети региона и МТС России   \n200 руб. в месяц\n\n   \n**Smart**   \nЗвонки 500 мин на все сети региона и МТС России   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \nЗвонки 300 мин на все сети региона и МТС России   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России    \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 218,
    "Example": "сколько минут в тарифах смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 220,
            "Example": "сколько смс в пакеах"
        }, {
            "Id": 221,
            "Example": "включенные смс"
        }, {
            "Id": 222,
            "Example": "смс в смарт"
        }, {
            "Id": 223,
            "Example": "много смс "
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 83,
        "Priority": 50,
        "Title": "сколько смс в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**    \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 219,
    "Example": "сколько смс в тарифах"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 219,
            "Example": "сколько смс в тарифах"
        }, {
            "Id": 221,
            "Example": "включенные смс"
        }, {
            "Id": 222,
            "Example": "смс в смарт"
        }, {
            "Id": 223,
            "Example": "много смс "
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 83,
        "Priority": 50,
        "Title": "сколько смс в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**    \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 220,
    "Example": "сколько смс в пакеах"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 219,
            "Example": "сколько смс в тарифах"
        }, {
            "Id": 220,
            "Example": "сколько смс в пакеах"
        }, {
            "Id": 222,
            "Example": "смс в смарт"
        }, {
            "Id": 223,
            "Example": "много смс "
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 83,
        "Priority": 50,
        "Title": "сколько смс в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**    \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 221,
    "Example": "включенные смс"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 219,
            "Example": "сколько смс в тарифах"
        }, {
            "Id": 220,
            "Example": "сколько смс в пакеах"
        }, {
            "Id": 221,
            "Example": "включенные смс"
        }, {
            "Id": 223,
            "Example": "много смс "
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 83,
        "Priority": 50,
        "Title": "сколько смс в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**    \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 222,
    "Example": "смс в смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 219,
            "Example": "сколько смс в тарифах"
        }, {
            "Id": 220,
            "Example": "сколько смс в пакеах"
        }, {
            "Id": 221,
            "Example": "включенные смс"
        }, {
            "Id": 222,
            "Example": "смс в смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 83,
        "Priority": 50,
        "Title": "сколько смс в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**    \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 223,
    "Example": "много смс "
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 224,
    "Example": "сколько трафика в смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 225,
    "Example": "сколько траффика"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 226,
    "Example": "сколько мегабайт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 227,
    "Example": "сколько гигабайт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 228,
    "Example": "мегайбайты в смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 229,
    "Example": "сколько интернета"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 230,
    "Example": "включенный интернет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 233,
            "Example": "условия по интернету"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 231,
    "Example": "интернет безлимитный"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 224,
            "Example": "сколько трафика в смарт"
        }, {
            "Id": 225,
            "Example": "сколько траффика"
        }, {
            "Id": 226,
            "Example": "сколько мегабайт"
        }, {
            "Id": 227,
            "Example": "сколько гигабайт"
        }, {
            "Id": 228,
            "Example": "мегайбайты в смарт"
        }, {
            "Id": 229,
            "Example": "сколько интернета"
        }, {
            "Id": 230,
            "Example": "включенный интернет"
        }, {
            "Id": 231,
            "Example": "интернет безлимитный"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 84,
        "Priority": 50,
        "Title": "сколько траффика в тарифах смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Интернет в тарифах смарт\n\n      \n**Smart mini**   \nИнтернет 1 Гб   \n200 руб. в месяц\n\n   \n**Smart**   \nСмарт 4 Гб   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#\n\n   \n**Smart Безлимитище**   \n10 Гб интернета   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#\n\n   \n**Smart Забугорище**   \n7 Гб интернета в неделю   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 233,
    "Example": "условия по интернету"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 237,
            "Example": "я не использую телефон"
        }, {
            "Id": 238,
            "Example": "редко пользуюсь телефоном"
        }, {
            "Id": 239,
            "Example": "самый дешевый тариф"
        }, {
            "Id": 240,
            "Example": "мне не нужен интернет"
        }, {
            "Id": 247,
            "Example": "я звоню по своему региону"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 236,
    "Example": "смарт мини"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 236,
            "Example": "смарт мини"
        }, {
            "Id": 238,
            "Example": "редко пользуюсь телефоном"
        }, {
            "Id": 239,
            "Example": "самый дешевый тариф"
        }, {
            "Id": 240,
            "Example": "мне не нужен интернет"
        }, {
            "Id": 247,
            "Example": "я звоню по своему региону"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 237,
    "Example": "я не использую телефон"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 236,
            "Example": "смарт мини"
        }, {
            "Id": 237,
            "Example": "я не использую телефон"
        }, {
            "Id": 239,
            "Example": "самый дешевый тариф"
        }, {
            "Id": 240,
            "Example": "мне не нужен интернет"
        }, {
            "Id": 247,
            "Example": "я звоню по своему региону"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 238,
    "Example": "редко пользуюсь телефоном"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 236,
            "Example": "смарт мини"
        }, {
            "Id": 237,
            "Example": "я не использую телефон"
        }, {
            "Id": 238,
            "Example": "редко пользуюсь телефоном"
        }, {
            "Id": 240,
            "Example": "мне не нужен интернет"
        }, {
            "Id": 247,
            "Example": "я звоню по своему региону"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 239,
    "Example": "самый дешевый тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 236,
            "Example": "смарт мини"
        }, {
            "Id": 237,
            "Example": "я не использую телефон"
        }, {
            "Id": 238,
            "Example": "редко пользуюсь телефоном"
        }, {
            "Id": 239,
            "Example": "самый дешевый тариф"
        }, {
            "Id": 247,
            "Example": "я звоню по своему региону"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 240,
    "Example": "мне не нужен интернет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 242,
            "Example": "обычный смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 87,
        "Priority": 50,
        "Title": "смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#"
    },
    "Id": 241,
    "Example": "смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 241,
            "Example": "смарт"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 87,
        "Priority": 50,
        "Title": "смарт",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart**   \nСмарт 4 Гб   \nЗвонки 500 мин на все сети региона и МТС России   \nСМС\t500 SMS   \n300 руб. в месяц   \nПерейти: \\*111\\*1024\\*1\\#"
    },
    "Id": 242,
    "Example": "обычный смарт"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 243,
    "Example": "смарт безлимитище"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 244,
    "Example": "безлимитище"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 245,
    "Example": "нужно много интернета"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 246,
    "Example": "я много звоню по россии"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 236,
            "Example": "смарт мини"
        }, {
            "Id": 237,
            "Example": "я не использую телефон"
        }, {
            "Id": 238,
            "Example": "редко пользуюсь телефоном"
        }, {
            "Id": 239,
            "Example": "самый дешевый тариф"
        }, {
            "Id": 240,
            "Example": "мне не нужен интернет"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 86,
        "Priority": 50,
        "Title": "смарт мини",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart mini**   \nИнтернет 1 Гб   \nЗвонки 200 мин на все сети региона и МТС России   \nСМС\t200 sms   \n200 руб. в месяц"
    },
    "Id": 247,
    "Example": "я звоню по своему региону"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 248,
    "Example": "я много путешествую"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 249,
    "Example": "звонки по россии"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 250,
    "Example": "интернет за границей"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 251,
    "Example": "звонки за границей"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 252,
    "Example": "много смс"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 253,
    "Example": "много звонков"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 254,
    "Example": "я часто звоню загород"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 256,
            "Example": "соц сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 255,
    "Example": "я сижу в сети"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 243,
            "Example": "смарт безлимитище"
        }, {
            "Id": 244,
            "Example": "безлимитище"
        }, {
            "Id": 245,
            "Example": "нужно много интернета"
        }, {
            "Id": 246,
            "Example": "я много звоню по россии"
        }, {
            "Id": 252,
            "Example": "много смс"
        }, {
            "Id": 253,
            "Example": "много звонков"
        }, {
            "Id": 254,
            "Example": "я часто звоню загород"
        }, {
            "Id": 255,
            "Example": "я сижу в сети"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 88,
        "Priority": 50,
        "Title": "смарт безлимитище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Безлимитище**   \n10 Гб интернета   \nЗвонки 300 мин на все сети региона и МТС России   \n300 SMS   \n350 руб. в месяц   \nПерейти: \\*111\\*3888\\*1\\#"
    },
    "Id": 256,
    "Example": "соц сети"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 257,
    "Example": "максимальный тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 258,
    "Example": "самый дорого тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 259,
    "Example": "нужен выгодный роуминг"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 260,
    "Example": "очень много смс"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 261,
    "Example": "крутой тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 262,
    "Example": "максимальный тариф"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "TransitionExamples": [{
            "Id": 133,
            "Example": "Отключить услугу гудок"
        }, {
            "Id": 134,
            "Example": "Отключите мне гудок"
        }, {
            "Id": 135,
            "Example": "Как отключить гудок"
        }, {
            "Id": 136,
            "Example": "Уберите гудок"
        }, {
            "Id": 137,
            "Example": "Я хочу отключить услугу гудок"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 53,
        "Priority": 50,
        "Title": "Отключить гудок, гудок подключен",
        "TransitionRequirements": "APIGoodok.status = true",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 263,
    "Example": "я хочу отключить услугу гудок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 317,
            "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 264,
    "Example": "активировать услугу обещанный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 266,
            "Example": "где скачать мтс деньги"
        }, {
            "Id": 267,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ"
        }, {
            "Id": 268,
            "Example": "приожение мтс для оплаты"
        }, {
            "Id": 269,
            "Example": "мтс деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 90,
        "Priority": 50,
        "Title": "мтс деньги приложение",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Приложение МТС, в котором Вы можете оплатить услуги ЖКХ называется «МТС-Деньги». Скачать его можно в App Store и Play Market."
    },
    "Id": 265,
    "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ/ЖКУ/квартплату и пр и где мне его скачать?"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 265,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ/ЖКУ/квартплату и пр и где мне его скачать?"
        }, {
            "Id": 267,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ"
        }, {
            "Id": 268,
            "Example": "приожение мтс для оплаты"
        }, {
            "Id": 269,
            "Example": "мтс деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 90,
        "Priority": 50,
        "Title": "мтс деньги приложение",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Приложение МТС, в котором Вы можете оплатить услуги ЖКХ называется «МТС-Деньги». Скачать его можно в App Store и Play Market."
    },
    "Id": 266,
    "Example": "где скачать мтс деньги"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 265,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ/ЖКУ/квартплату и пр и где мне его скачать?"
        }, {
            "Id": 266,
            "Example": "где скачать мтс деньги"
        }, {
            "Id": 268,
            "Example": "приожение мтс для оплаты"
        }, {
            "Id": 269,
            "Example": "мтс деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 90,
        "Priority": 50,
        "Title": "мтс деньги приложение",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Приложение МТС, в котором Вы можете оплатить услуги ЖКХ называется «МТС-Деньги». Скачать его можно в App Store и Play Market."
    },
    "Id": 267,
    "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 265,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ/ЖКУ/квартплату и пр и где мне его скачать?"
        }, {
            "Id": 266,
            "Example": "где скачать мтс деньги"
        }, {
            "Id": 267,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ"
        }, {
            "Id": 269,
            "Example": "мтс деньги"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 90,
        "Priority": 50,
        "Title": "мтс деньги приложение",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Приложение МТС, в котором Вы можете оплатить услуги ЖКХ называется «МТС-Деньги». Скачать его можно в App Store и Play Market."
    },
    "Id": 268,
    "Example": "приожение мтс для оплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 265,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ/ЖКУ/квартплату и пр и где мне его скачать?"
        }, {
            "Id": 266,
            "Example": "где скачать мтс деньги"
        }, {
            "Id": 267,
            "Example": "Как называется приложение МТС, в котором можно оплачивать услуги ЖКХ"
        }, {
            "Id": 268,
            "Example": "приожение мтс для оплаты"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 90,
        "Priority": 50,
        "Title": "мтс деньги приложение",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Приложение МТС, в котором Вы можете оплатить услуги ЖКХ называется «МТС-Деньги». Скачать его можно в App Store и Play Market."
    },
    "Id": 269,
    "Example": "мтс деньги"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 91,
        "Priority": 50,
        "Title": "Что нужно указывать в поле «Код плательщика» при оплате ЖКХ?",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "В поле «Код плательщика» необходимо указать код, который размещен на Вашей квитанции под «ПЕРИОД оплаты». Код плательщика состоит из 10 цифр."
    },
    "Id": 270,
    "Example": "Что нужно указывать в поле «Код плательщика» при оплате ЖКХ?"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 272,
            "Example": "Что такое «Период начислений»?"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 92,
        "Priority": 50,
        "Title": "Что нужно указывать в поле «Период начислений»?",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "В поле «Период начислений» необходимо указать период, за который Вы планируете оплатить ЖКУ,  в формате: ммгг (месяц, год), к примеру: 01.17"
    },
    "Id": 271,
    "Example": "Что нужно указывать в поле «Период начислений»?"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 271,
            "Example": "Что нужно указывать в поле «Период начислений»?"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 92,
        "Priority": 50,
        "Title": "Что нужно указывать в поле «Период начислений»?",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "В поле «Период начислений» необходимо указать период, за который Вы планируете оплатить ЖКУ,  в формате: ммгг (месяц, год), к примеру: 01.17"
    },
    "Id": 272,
    "Example": "Что такое «Период начислений»?"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 274,
            "Example": "В каких случаях при оплате ЖКХ нужно указывать в поле «Добровольная страховка»"
        }, {
            "Id": 275,
            "Example": "Добровольная страховка"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 93,
        "Priority": 50,
        "Title": "Добровольная страховка",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Страхование имущества является добровольным, поэтому указывается только при условии Вашего согласия. Таким образом, указывать «Платеж со страховкой» необходимо только в том случае, если Вы на это согласны."
    },
    "Id": 273,
    "Example": "Обязательно ли указывать в поле «Добровольная страховка» сумму со страховкой"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 273,
            "Example": "Обязательно ли указывать в поле «Добровольная страховка» сумму со страховкой"
        }, {
            "Id": 275,
            "Example": "Добровольная страховка"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 93,
        "Priority": 50,
        "Title": "Добровольная страховка",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Страхование имущества является добровольным, поэтому указывается только при условии Вашего согласия. Таким образом, указывать «Платеж со страховкой» необходимо только в том случае, если Вы на это согласны."
    },
    "Id": 274,
    "Example": "В каких случаях при оплате ЖКХ нужно указывать в поле «Добровольная страховка»"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 273,
            "Example": "Обязательно ли указывать в поле «Добровольная страховка» сумму со страховкой"
        }, {
            "Id": 274,
            "Example": "В каких случаях при оплате ЖКХ нужно указывать в поле «Добровольная страховка»"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 93,
        "Priority": 50,
        "Title": "Добровольная страховка",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Страхование имущества является добровольным, поэтому указывается только при условии Вашего согласия. Таким образом, указывать «Платеж со страховкой» необходимо только в том случае, если Вы на это согласны."
    },
    "Id": 275,
    "Example": "Добровольная страховка"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 277,
            "Example": "Если указать другую сумму при оплате ЖКХ"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 95,
        "Priority": 50,
        "Title": "Если указать другую сумму при оплате ЖКХ, пройдет ли платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Оплата пройдет, но платеж за ЖКХ за период погашен НЕ будет"
    },
    "Id": 276,
    "Example": "Что будет, если указать не правильную сумму при оплате квартплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 276,
            "Example": "Что будет, если указать не правильную сумму при оплате квартплаты"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 95,
        "Priority": 50,
        "Title": "Если указать другую сумму при оплате ЖКХ, пройдет ли платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Оплата пройдет, но платеж за ЖКХ за период погашен НЕ будет"
    },
    "Id": 277,
    "Example": "Если указать другую сумму при оплате ЖКХ"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 279,
            "Example": "Какая комиссия взимается за оплату ЖКХ с мобильного приложения"
        }, {
            "Id": 280,
            "Example": "Взимается ли комиссия за оплату квартплаты"
        }, {
            "Id": 281,
            "Example": "комиссия за оплату квартиры"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 96,
        "Priority": 50,
        "Title": "Какой % комиссии берется за оплату квартплаты",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Комиссия за оплату ЖКХ/ЖКУ (и пр) взимается и зависит от выбранного Вами источника платежа:    \n•\tПри оплате с кошелька МТС-Деньги (ЭДС) или с Лицевого счета абонента (со счета телефона), комиссия составляет 2,5% от суммы платежа;\n•\tПри оплате с банковской карты МТС-Банка или картой другого Банка, комиссия составляет 1,5% от суммы платежа.\n\nВнимание! В период с 01.06.2017г. по 01.07.2017 комиссия за оплату ЖКХ составляет 0 руб., независимо от выбранного источника платежа.\n"
    },
    "Id": 278,
    "Example": "Какой процент комиссии берется за оплату квартплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 278,
            "Example": "Какой процент комиссии берется за оплату квартплаты"
        }, {
            "Id": 280,
            "Example": "Взимается ли комиссия за оплату квартплаты"
        }, {
            "Id": 281,
            "Example": "комиссия за оплату квартиры"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 96,
        "Priority": 50,
        "Title": "Какой % комиссии берется за оплату квартплаты",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Комиссия за оплату ЖКХ/ЖКУ (и пр) взимается и зависит от выбранного Вами источника платежа:    \n•\tПри оплате с кошелька МТС-Деньги (ЭДС) или с Лицевого счета абонента (со счета телефона), комиссия составляет 2,5% от суммы платежа;\n•\tПри оплате с банковской карты МТС-Банка или картой другого Банка, комиссия составляет 1,5% от суммы платежа.\n\nВнимание! В период с 01.06.2017г. по 01.07.2017 комиссия за оплату ЖКХ составляет 0 руб., независимо от выбранного источника платежа.\n"
    },
    "Id": 279,
    "Example": "Какая комиссия взимается за оплату ЖКХ с мобильного приложения"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 278,
            "Example": "Какой процент комиссии берется за оплату квартплаты"
        }, {
            "Id": 279,
            "Example": "Какая комиссия взимается за оплату ЖКХ с мобильного приложения"
        }, {
            "Id": 281,
            "Example": "комиссия за оплату квартиры"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 96,
        "Priority": 50,
        "Title": "Какой % комиссии берется за оплату квартплаты",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Комиссия за оплату ЖКХ/ЖКУ (и пр) взимается и зависит от выбранного Вами источника платежа:    \n•\tПри оплате с кошелька МТС-Деньги (ЭДС) или с Лицевого счета абонента (со счета телефона), комиссия составляет 2,5% от суммы платежа;\n•\tПри оплате с банковской карты МТС-Банка или картой другого Банка, комиссия составляет 1,5% от суммы платежа.\n\nВнимание! В период с 01.06.2017г. по 01.07.2017 комиссия за оплату ЖКХ составляет 0 руб., независимо от выбранного источника платежа.\n"
    },
    "Id": 280,
    "Example": "Взимается ли комиссия за оплату квартплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 278,
            "Example": "Какой процент комиссии берется за оплату квартплаты"
        }, {
            "Id": 279,
            "Example": "Какая комиссия взимается за оплату ЖКХ с мобильного приложения"
        }, {
            "Id": 280,
            "Example": "Взимается ли комиссия за оплату квартплаты"
        }],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 96,
        "Priority": 50,
        "Title": "Какой % комиссии берется за оплату квартплаты",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Комиссия за оплату ЖКХ/ЖКУ (и пр) взимается и зависит от выбранного Вами источника платежа:    \n•\tПри оплате с кошелька МТС-Деньги (ЭДС) или с Лицевого счета абонента (со счета телефона), комиссия составляет 2,5% от суммы платежа;\n•\tПри оплате с банковской карты МТС-Банка или картой другого Банка, комиссия составляет 1,5% от суммы платежа.\n\nВнимание! В период с 01.06.2017г. по 01.07.2017 комиссия за оплату ЖКХ составляет 0 руб., независимо от выбранного источника платежа.\n"
    },
    "Id": 281,
    "Example": "комиссия за оплату квартиры"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 283,
            "Example": "Часто путешествую"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 282,
    "Example": "Забугорище"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 248,
            "Example": "я много путешествую"
        }, {
            "Id": 249,
            "Example": "звонки по россии"
        }, {
            "Id": 250,
            "Example": "интернет за границей"
        }, {
            "Id": 251,
            "Example": "звонки за границей"
        }, {
            "Id": 257,
            "Example": "максимальный тариф"
        }, {
            "Id": 258,
            "Example": "самый дорого тариф"
        }, {
            "Id": 259,
            "Example": "нужен выгодный роуминг"
        }, {
            "Id": 260,
            "Example": "очень много смс"
        }, {
            "Id": 261,
            "Example": "крутой тариф"
        }, {
            "Id": 262,
            "Example": "максимальный тариф"
        }, {
            "Id": 282,
            "Example": "Забугорище"
        }],
        "Scenario": {
            "Id": 28,
            "Title": "Тариф смарт"
        },
        "Id": 89,
        "Priority": 50,
        "Title": "смарт забугорище",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "**Smart Забугорище**   \n7 Гб интернета в неделю   \nБезлимитные звонки на МТС России   \n350 мин в неделю на все сети региона и МТС России   \n350 SMS в неделю на все сети России   \nДействует на территории всей России и в популярных странах мира   \n150 руб. в неделю   \nПерейти: \\*111\\*1025\\*1\\#"
    },
    "Id": 283,
    "Example": "Часто путешествую"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 287,
            "Example": "добрый день"
        }, {
            "Id": 288,
            "Example": "доброе утро"
        }, {
            "Id": 289,
            "Example": "добрый вечер"
        }, {
            "Id": 326,
            "Example": "привет как ты"
        }, {
            "Id": 327,
            "Example": "привет как дела"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 286,
    "Example": "привет"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 286,
            "Example": "привет"
        }, {
            "Id": 288,
            "Example": "доброе утро"
        }, {
            "Id": 289,
            "Example": "добрый вечер"
        }, {
            "Id": 326,
            "Example": "привет как ты"
        }, {
            "Id": 327,
            "Example": "привет как дела"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 287,
    "Example": "добрый день"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 286,
            "Example": "привет"
        }, {
            "Id": 287,
            "Example": "добрый день"
        }, {
            "Id": 289,
            "Example": "добрый вечер"
        }, {
            "Id": 326,
            "Example": "привет как ты"
        }, {
            "Id": 327,
            "Example": "привет как дела"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 288,
    "Example": "доброе утро"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 286,
            "Example": "привет"
        }, {
            "Id": 287,
            "Example": "добрый день"
        }, {
            "Id": 288,
            "Example": "доброе утро"
        }, {
            "Id": 326,
            "Example": "привет как ты"
        }, {
            "Id": 327,
            "Example": "привет как дела"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 289,
    "Example": "добрый вечер"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 291,
            "Example": "как оно"
        }, {
            "Id": 292,
            "Example": "что нового"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 98,
        "Priority": 45,
        "Title": "Как дела",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Все отлично"
    },
    "Id": 290,
    "Example": "как дела"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 290,
            "Example": "как дела"
        }, {
            "Id": 292,
            "Example": "что нового"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 98,
        "Priority": 45,
        "Title": "Как дела",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Все отлично"
    },
    "Id": 291,
    "Example": "как оно"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 290,
            "Example": "как дела"
        }, {
            "Id": 291,
            "Example": "как оно"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 98,
        "Priority": 45,
        "Title": "Как дела",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Все отлично"
    },
    "Id": 292,
    "Example": "что нового"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 294,
            "Example": "что делаешь"
        }, {
            "Id": 295,
            "Example": "чем занят"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 99,
        "Priority": 45,
        "Title": "Что делаешь",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Помогаю вам"
    },
    "Id": 293,
    "Example": "чем занимаешься"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 293,
            "Example": "чем занимаешься"
        }, {
            "Id": 295,
            "Example": "чем занят"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 99,
        "Priority": 45,
        "Title": "Что делаешь",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Помогаю вам"
    },
    "Id": 294,
    "Example": "что делаешь"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 293,
            "Example": "чем занимаешься"
        }, {
            "Id": 294,
            "Example": "что делаешь"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 99,
        "Priority": 45,
        "Title": "Что делаешь",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Помогаю вам"
    },
    "Id": 295,
    "Example": "чем занят"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 296,
    "Example": "плохой"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 297,
    "Example": "бесполезный"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 298,
    "Example": "идиот"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 299,
    "Example": "придурок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 300,
    "Example": "ты пьян"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 322,
            "Example": "достал"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 301,
    "Example": "плохой бот"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 303,
            "Example": "полезный бот"
        }, {
            "Id": 304,
            "Example": "спасибо"
        }, {
            "Id": 305,
            "Example": "отлично"
        }, {
            "Id": 306,
            "Example": "хорошо"
        }, {
            "Id": 307,
            "Example": "умница"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 302,
    "Example": "хороший бот"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 302,
            "Example": "хороший бот"
        }, {
            "Id": 304,
            "Example": "спасибо"
        }, {
            "Id": 305,
            "Example": "отлично"
        }, {
            "Id": 306,
            "Example": "хорошо"
        }, {
            "Id": 307,
            "Example": "умница"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 303,
    "Example": "полезный бот"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 302,
            "Example": "хороший бот"
        }, {
            "Id": 303,
            "Example": "полезный бот"
        }, {
            "Id": 305,
            "Example": "отлично"
        }, {
            "Id": 306,
            "Example": "хорошо"
        }, {
            "Id": 307,
            "Example": "умница"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 304,
    "Example": "спасибо"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 302,
            "Example": "хороший бот"
        }, {
            "Id": 303,
            "Example": "полезный бот"
        }, {
            "Id": 304,
            "Example": "спасибо"
        }, {
            "Id": 306,
            "Example": "хорошо"
        }, {
            "Id": 307,
            "Example": "умница"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 305,
    "Example": "отлично"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 302,
            "Example": "хороший бот"
        }, {
            "Id": 303,
            "Example": "полезный бот"
        }, {
            "Id": 304,
            "Example": "спасибо"
        }, {
            "Id": 305,
            "Example": "отлично"
        }, {
            "Id": 307,
            "Example": "умница"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 306,
    "Example": "хорошо"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 302,
            "Example": "хороший бот"
        }, {
            "Id": 303,
            "Example": "полезный бот"
        }, {
            "Id": 304,
            "Example": "спасибо"
        }, {
            "Id": 305,
            "Example": "отлично"
        }, {
            "Id": 306,
            "Example": "хорошо"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 101,
        "Priority": 45,
        "Title": "Похвала",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Рад быть полезным"
    },
    "Id": 307,
    "Example": "умница"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 308,
    "Example": "пока"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 309,
    "Example": "прощай"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 310,
    "Example": "до свидания"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 311,
    "Example": "удачи"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 312,
    "Example": "я пошел"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 314,
            "Example": "до завтра"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 313,
    "Example": "увидимся"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 308,
            "Example": "пока"
        }, {
            "Id": 309,
            "Example": "прощай"
        }, {
            "Id": 310,
            "Example": "до свидания"
        }, {
            "Id": 311,
            "Example": "удачи"
        }, {
            "Id": 312,
            "Example": "я пошел"
        }, {
            "Id": 313,
            "Example": "увидимся"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 102,
        "Priority": 45,
        "Title": "Пока",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Всего доброго"
    },
    "Id": 314,
    "Example": "до завтра"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [],
        "Scenario": {
            "Id": 27,
            "Title": "Финуслуги(жкх)"
        },
        "Id": 94,
        "Priority": 50,
        "Title": "Зачем нужна страховка при оплате квартплаты",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Программа страхования призвана защитить имущественные интересы граждан в случае пожара, залива или взрыва"
    },
    "Id": 315,
    "Example": "Зачем нужна страховка при оплате квартплаты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 31,
            "Title": "Обещанный платеж, по какому номеру?",
            "Message": "Вы желаете воспользоваться услугой \"обещанный платеж\" по этому номеру, с которого обращаетесь?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Да, по своему\",\"На чужой\"]}"
        },
        "TransitionExamples": [{
            "Id": 151,
            "Example": "Обещанный платеж"
        }, {
            "Id": 152,
            "Example": "Хочу пополнить счет обещанным платежом"
        }, {
            "Id": 153,
            "Example": "доверительный платеж"
        }, {
            "Id": 154,
            "Example": "дайте мне доверительный платеж"
        }, {
            "Id": 155,
            "Example": "Дайте мне обещанный платеж"
        }, {
            "Id": 156,
            "Example": "хочу взять в долг"
        }, {
            "Id": 157,
            "Example": "пополните мне счет в долг"
        }, {
            "Id": 158,
            "Example": "баланс взаймы"
        }, {
            "Id": 159,
            "Example": "баланс в долг"
        }, {
            "Id": 264,
            "Example": "активировать услугу обещанный платеж"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 61,
        "Priority": 50,
        "Title": "Обещанный платеж",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 317,
    "Example": "я уехал за город и баланс кончился, хочу взять обещанный платеж"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 28,
            "Title": "Гудок подключен.",
            "Message": "У вас подключена услуга гудок. По какому номеру отключить услугу гудок?",
            "DialogType": 3,
            "DialogDataJSON": "{options:[\"Для своего\",\"Для чужого\"]}"
        },
        "ToState": {
            "Scenario": {
                "Id": 25,
                "Title": "Отключение гудка"
            },
            "Id": 30,
            "Title": "Подтверждение. ",
            "Message": "Вы уверены что хотите отключить услугу гудок?",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 143,
            "Example": "По своему"
        }],
        "Scenario": {
            "Id": 25,
            "Title": "Отключение гудка"
        },
        "Id": 55,
        "Priority": 50,
        "Title": "Гудок подключен, отключить по своему номеру.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": ""
    },
    "Id": 318,
    "Example": "своему"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 320,
            "Example": "ничего"
        }, {
            "Id": 321,
            "Example": "все ок"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 118,
        "Priority": 40,
        "Title": "чем я могу помочь? ничем",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Хорошо"
    },
    "Id": 319,
    "Example": "ничем"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 319,
            "Example": "ничем"
        }, {
            "Id": 321,
            "Example": "все ок"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 118,
        "Priority": 40,
        "Title": "чем я могу помочь? ничем",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Хорошо"
    },
    "Id": 320,
    "Example": "ничего"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 319,
            "Example": "ничем"
        }, {
            "Id": 320,
            "Example": "ничего"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 118,
        "Priority": 40,
        "Title": "чем я могу помочь? ничем",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Хорошо"
    },
    "Id": 321,
    "Example": "все ок"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 323,
            "Example": "ты надоел"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 322,
    "Example": "достал"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 296,
            "Example": "плохой"
        }, {
            "Id": 297,
            "Example": "бесполезный"
        }, {
            "Id": 298,
            "Example": "идиот"
        }, {
            "Id": 299,
            "Example": "придурок"
        }, {
            "Id": 300,
            "Example": "ты пьян"
        }, {
            "Id": 301,
            "Example": "плохой бот"
        }, {
            "Id": 322,
            "Example": "достал"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 100,
        "Priority": 45,
        "Title": "Критика",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Я переосмыслю свое поведение, и возможно завтра смогу помочь вам эффективнее."
    },
    "Id": 323,
    "Example": "ты надоел"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 286,
            "Example": "привет"
        }, {
            "Id": 287,
            "Example": "добрый день"
        }, {
            "Id": 288,
            "Example": "доброе утро"
        }, {
            "Id": 289,
            "Example": "добрый вечер"
        }, {
            "Id": 327,
            "Example": "привет как дела"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 326,
    "Example": "привет как ты"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 286,
            "Example": "привет"
        }, {
            "Id": 287,
            "Example": "добрый день"
        }, {
            "Id": 288,
            "Example": "доброе утро"
        }, {
            "Id": 289,
            "Example": "добрый вечер"
        }, {
            "Id": 326,
            "Example": "привет как ты"
        }],
        "Scenario": {
            "Id": 32,
            "Title": "Общение"
        },
        "Id": 97,
        "Priority": 45,
        "Title": "Приветствие",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{}",
        "Message": "Здравствуйте"
    },
    "Id": 327,
    "Example": "привет как дела"
}, {
    "Transition": {
        "FromState": {
            "Scenario": {
                "Id": 26,
                "Title": "Обещанный платеж"
            },
            "Id": 33,
            "Title": "Обещанный платеж. Подтверждение.",
            "Message": "Вы уверены что хотите активировать услугу обещанный платеж?   \nЗа использование обещанного платежа взимается плата   \nДо 30 руб. бесплатно   \nОт 31 до 99 руб. 7 руб.\nОт 100 до 199 руб. 10 руб.\nОт 200 до 499 руб. 25 руб.\nОт 500 руб. и выше 50 руб.",
            "DialogType": 4,
            "DialogDataJSON": "{}"
        },
        "ToState": {
            "Scenario": {
                "Id": 24,
                "Title": "Initial"
            },
            "Id": 26,
            "Title": "InitialState",
            "Message": "Чем я могу помочь?   \r\nОтключить услугу гудок   \r\nАктивировать услугу обещанный платеж   \r\nПомочь воспользоваться финансовыми услугами    \r\nПеревести деньги     \r\nПорекомендовать тариф   ",
            "DialogType": 9,
            "DialogDataJSON": "{}"
        },
        "TransitionExamples": [{
            "Id": 166,
            "Example": "да"
        }],
        "Scenario": {
            "Id": 26,
            "Title": "Обещанный платеж"
        },
        "Id": 66,
        "Priority": 50,
        "Title": "Подтверждено ОП.",
        "TransitionRequirements": "",
        "TransitionDataJSON": "{command=\"APIObeshanyPayment.Activate()\"}",
        "Message": "Услуга успешно подключена."
    },
    "Id": 328,
    "Example": "2"
}];
export default transitionExamples;