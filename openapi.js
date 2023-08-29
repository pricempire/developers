var spec = {
    "openapi": "3.0.2",
    "info": {
        "description": `A few endpoint need an active subscription. You can purchase [here](https://pricempire.com/subscribe).`,
        "termsOfService": "https://pricempire.com/assets/api-terms",
        "contact": {
            "email": "info@pricempire.com"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "1.0"
    },
    "externalDocs": {
        "description": "Join Pricempire.com Discord server to get help at the #dev channel.",
        "url": "https://discord.gg/aqwjbsFTGh"
    },
    "servers": [
        {
            "url": "https://api.pricempire.com/"
        }
    ],
    "tags": [
        {
            "name": "Item",
            "description": "Get item prices over API",
        },
        {
            "name": "Portfolio",
            "description": "Manage your portfolios with API. (Soon)",
        },
        {
            "name": "Inventory",
            "description": "Get Inventories",
        }
    ],
    "paths": {
        "/v2/items/{market_hash_name}": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Getting a single item (API Key required)",
                "description": "Getting a single item by market_hash_name",
                "operationId": "getItemByName",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "market_hash_name",
                        "in": "path",
                        "description": "Name of item to return",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "format": "string"
                        }
                    },
                    {
                        "name": "currency",
                        "in": "query",
                        "description": "Selected currency (Default: USD)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'USD'
                        }
                    },
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SingleItem"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid name supplied"
                    },
                    "404": {
                        "description": "Item not found"
                    }
                },
                "security": [
                    {
                        "api_key": []
                    }
                ]
            },
        },
        "/v2/items/prices": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "FILTERED! by params. Getting all items in one response (API Key required)",
                "description": "Getting all items in one response",
                "operationId": "getAllItems",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "currency",
                        "in": "query",
                        "description": "Selected currency (Default: USD)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'USD'
                        }
                    },
                    {
                        "name": "maxAge",
                        "in": "query",
                        "description": "Max age for the prices in days.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int(32)",
                            "example": 7
                        }
                    },
                    {
                        "name": "inflationThreshold",
                        "in": "query",
                        "description": "Max price increase percentage in the last 30 days.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int(32)",
                            "example": 30
                        }
                    },
                    {
                        "name": "minCount",
                        "in": "query",
                        "description": "Minimum items listed at the source site.",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int(32)",
                            "example": 30
                        }
                    },
                    {
                        "name": "extended",
                        "in": "query",
                        "description": "Extended data for items",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "format": "boolean",
                            "example": false,
                        }
                    },
                    {
                        "name": "liquidity",
                        "in": "query",
                        "description": "Returns the item liquidity in the object",
                        "required": false,
                        "schema": {
                            "type": "boolean",
                            "format": "boolean",
                            "example": false,
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AllItem"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid name supplied"
                    },
                    "404": {
                        "description": "Item not found"
                    }
                },
                "security": [
                    {
                        "api_key": []
                    }
                ]
            },
        },
        "/v3/items/basic": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Getting items basic data (API Key required)",
                "description": "Getting items basic data",
                "operationId": "getItemsBasicData",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/BasicItems"
                                }
                            }
                        }
                    },
                },
                "security": [
                    {
                        "api_key": []
                    }
                ],
            } 
        },
        "/v3/items/advanced": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Getting items advanced data (API Key & Enterprise plan required)",
                "description": "Getting items advanced data",
                "operationId": "getItemsAdvancedData",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AdvancedItems"
                                }
                            }
                        }
                    },
                },
                "security": [
                    {
                        "api_key": []
                    }
                ],
            } 
        },
        "/v3/items/prices/history": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Get all items price history by source (API Key required)",
                "description": "Getting all items in one response",
                "operationId": "getPriceHistories",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "currency",
                        "in": "query",
                        "description": "Selected currency (Default: USD)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'USD'
                        }
                    },
                    {
                        "name": "app_id",
                        "in": "query",
                        "description": "AppId (Default: 730)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": '730'
                        }
                    },
                    {
                        "name": "days",
                        "in": "query",
                        "description": "Days (7, 14, 30, 60, 90, 120, 180, Depends on your subscription)",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "format": "int(32)",
                            "example": 7
                        }
                    },
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/getPriceHistories"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": []
                    }
                ]
            },
        },
        "/v3/items/prices": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Getting all items in one response (API Key required)",
                "description": "Getting all items in one response",
                "operationId": "getAllItemsV3",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "currency",
                        "in": "query",
                        "description": "Selected currency (Default: USD)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'USD'
                        }
                    },
                    {
                        "name": "appId",
                        "in": "query",
                        "description": "app ID",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": '730',
                            "enum": ['730', "440", '570', '252490']
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AllItemV3"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "api_key": []
                    }
                ]
            },
        },
        "/v3/items/prices/test": {
            "get": {
                "tags": [
                    "Item"
                ],
                "summary": "Getting all items in one response TEST Endpoint",
                "description": "Getting all items in one response",
                "operationId": "get_all_items_test",
                "parameters": [
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AllItemV3"
                                }
                            }
                        }
                    }
                },
            },
        },
        "/v3/inventory/{steamId}": {
            "get": {
                "tags": [
                    "Inventory"
                ],
                "summary": "Getting an user inventory (API Key required)",
                "description": "Cached for 5 minutes",
                "operationId": "getInventory",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "query",
                        "description": "Pricempire.com API key",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "steamId",
                        "in": "path",
                        "description": "Steam64ID of the user",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "format": "string"
                        }
                    },
                    {
                        "name": "currency",
                        "in": "query",
                        "description": "Selected currency (Default: USD)",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'USD'
                        }
                    },
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/getInventory"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid name supplied"
                    },
                    "404": {
                        "description": "Item not found"
                    }
                },
                "security": [
                    {
                        "api_key": []
                    }
                ]
            },
        },
    },
    "components": {
        "schemas": {
            "getInventory": {
                "type": "object",
                "example":
                {
                    "user": {
                        "name": "antal",
                        "image": "5ff6e7042be74eb6d7a20e67c641aed358b3c4b1",
                        "steam64Id": "76561198023809011",
                        "created": "2010-04-12T00:00:00.000Z",
                        "country": "N/A"
                    },
                    "items": [
                        {
                            "tradelock": true,
                            "name": "★ Talon Knife",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjmJrnIqWZQ-sd9j-Db8IjKhF2zowdyNj37cYaQcQ8_NF7Zr1Dqwb270cPv6Z_Izydj7CkjtHrelkThhxwaP_sv26JqHcKn6w",
                            "appId": 730,
                            "category": "skin",
                            "family": "★ Talon Knife",
                            "marketHashName": "★ Talon Knife | Doppler (Factory New) - Ruby",
                            "price": 310785,
                            "p": 310785,
                            "cheapest": 310785,
                            "liquidity": "0.718725735524185341460000",
                            "type": "skin",
                            "sparkline": [
                                311295,
                                319825,
                                319303,
                                317809,
                                316428,
                                317809,
                                315534,
                                315085,
                                314806,
                                313475,
                                314792,
                                314123,
                                313939,
                                315582,
                                320720,
                                320389,
                                318784,
                                315534,
                                314123,
                                320389,
                                315612,
                                315288,
                                314558,
                                309045,
                                305264,
                                305447,
                                305454,
                                306215,
                                306632,
                                306424,
                                310785
                            ],
                            "paintSeed": 865,
                            "weaponId": 523,
                            "float": 0.015595508739352226,
                            "assetId": "28845088468",
                            "prices": {
                                "buff": 310785,
                                "buff_buy": 301035
                            },
                            "pattern": null,
                            "stickers": []
                        },
                    ]
                }
            },
            "SingleItem": {
                "type": "object",
                /*
                status": true,
                    "item": {
                    "name": "StatTrak™ USP-S | Cyrex (Field-Tested)",
                    "liquidity": 94.02985074626864,
                    "steamVolume": 100,
                    "prices": {
                    "bitskins": {
                */
                "properties": {
                    "status": {
                        "type": "boolean",
                        "format": "boolean",
                        "example": true
                    },
                    "name": {
                        "type": "string",
                        "format": "string",
                        "example": "StatTrak™ USP-S | Cyrex (Field-Tested)"
                    },
                    "liquidity": {
                        "type": "integer",
                        "format": "float",
                        "example": 85.68834
                    },
                    "steamVolume": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": 953
                    },
                    "prices": {
                        "type": "object",
                        "xml": {
                            "name": "prices",
                            "wrapped": true
                        },
                        "example": {
                            "bitskins": {
                                "sourcePrice": 269,
                                "sourceCurrency": "USD",
                                "price": 269,
                                "count": 78,
                                "createdAt": "2022-12-01T17:54:03.700Z"
                            },
                            "bitskins_recent": {
                                "sourcePrice": 244,
                                "sourceCurrency": "USD",
                                "price": 244,
                                "count": 1,
                                "createdAt": "2022-12-01T16:15:03.397Z"
                            },
                            "csgofloat": {
                                "sourcePrice": 300,
                                "sourceCurrency": "USD",
                                "price": 300,
                                "count": 8,
                                "createdAt": "2022-12-01T17:54:00.813Z"
                            },
                            "csgotm": {
                                "sourcePrice": 358,
                                "sourceCurrency": "USD",
                                "price": 358,
                                "count": 55,
                                "createdAt": "2022-12-01T17:54:00.750Z"
                            },
                        }
                        // "additionalProperties": {
                        //     "$ref": "#/components/schemas/SingleItemPrice",
                        // },
                    }
                },
                "xml": {
                    "name": "order"
                }
            },
            "SingleItemPrice": {
                "type": "object",
                "name": "asd",
                "properties": {
                    "sourcePrice": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "58853"
                    },
                    "sourceCurrency": {
                        "type": "string",
                        "format": "string",
                        "example": "USD"
                    },
                    "price": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": 68864
                    },
                    "count": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": 32
                    },
                    "createdAt": {
                        "type": "string",
                        "format": "date-time",
                    }
                },
                "xml": {
                    "name": "prices"
                }
            },
            "AllItem": {
                "type": "object",
                "name": "asd",
                "properties": {
                    "provider_name_0": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "58853"
                    },
                    "provider_name_1": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "64331"
                    },
                    "provider_name_2": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "1235"
                    },
                },
                "xml": {
                    "name": "prices"
                },
                example: {
                    "MP5-SD | Phosphor (Field-Tested)": { "buff163": 355, "csgoempire": 214, "dmarket": 371 },
                    "M4A4 | The Emperor (Field-Tested)": { "buff163": 1204, "csgoempire": 895, "dmarket": 1193 },
                    "AK-47 | Fire Serpent (Field-Tested)": { "buff163": 65979, "csgoempire": 62010, "dmarket": 73290 }
                }
            },
            "getPriceHistories": {
                "type": "object",
                "example": {
                    "AK-47 | Elite Build (Field-Tested)": [
                        149,
                        150,
                        150,
                        150,
                        150,
                        151,
                        151,
                        152,
                        152,
                        152,
                        154,
                        154,
                        155,
                        156,
                        159,
                        147,
                        151,
                        154,
                        159,
                        160,
                        161,
                        162,
                        163,
                        164,
                        165,
                        166,
                        167,
                        167
                    ],
                    "Sawed-Off | Amber Fade (Field-Tested)": [
                        51,
                        51,
                        51,
                        51,
                        51,
                        52,
                        52,
                        52,
                        53,
                        56,
                        59,
                        60,
                        61,
                        61,
                        62,
                        55,
                        52,
                        59,
                        62,
                        64,
                        61,
                        60,
                        60
                    ],
                    "Souvenir P90 | Schematic (Battle-Scarred)": [
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        118,
                        144,
                        144
                    ],
                    "USP-S | Forest Leaves (Factory New)": [
                        117,
                        122,
                        122,
                        123,
                        128,
                        132,
                        133,
                        135,
                        135,
                        135,
                        132,
                        131,
                        130,
                        128,
                        124,
                        110,
                        132,
                        132,
                        124,
                        123,
                        122,
                        120,
                        121,
                        122,
                        122
                    ],
                    "UMP-45 | Plastique (Battle-Scarred)": [
                        72,
                        74,
                        74,
                        76,
                        79,
                        77,
                        77,
                        77,
                        77,
                        76,
                        74,
                        72,
                        71,
                        71,
                        71,
                        55,
                        77,
                        74,
                        71,
                        59,
                        57,
                        56,
                        55,
                        53,
                        52,
                        51,
                        50,
                        49,
                        49
                    ],
                    "★ Butterfly Knife | Night (Field-Tested)": [
                        84610,
                        83121,
                        82640,
                        82158,
                        81455,
                        82764,
                        82039,
                        81060,
                        80041,
                        79128,
                        77577,
                        77168,
                        76430,
                        75889,
                        73874,
                        83808,
                        82764,
                        77577,
                        73874,
                        73399,
                        73913,
                        73650,
                        73502,
                        74640,
                        74385,
                        74889,
                        74902,
                        73799,
                        73737,
                        74307,
                        74307
                    ],
                    "StatTrak™ P250 | Muertos (Minimal Wear)": [
                        1318,
                        1335,
                        1334,
                        1349,
                        1350,
                        1368,
                        1372,
                        1376,
                        1365,
                        1350,
                        1328,
                        1323,
                        1312,
                        1312,
                        1297,
                        1240,
                        1368,
                        1328,
                        1297,
                        1292,
                        1279,
                        1263,
                        1247,
                        1227,
                        1216,
                        1208,
                        1211,
                        1218,
                        1224,
                        1225,
                        1225
                    ],
                    "XM1014 | Blue Tire (Battle-Scarred)": [
                        16,
                        17,
                        17,
                        17,
                        17,
                        17,
                        16,
                        17,
                        17,
                        17,
                        19,
                        19,
                        20,
                        20,
                        21,
                        17,
                        17,
                        19,
                        21,
                        20,
                        21,
                        21
                    ],
                }
            },
            "AllItemV3": {
                "type": "object",
                "name": "asd",
                "properties": {
                    "provider_name_0": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "58853"
                    },
                    "provider_name_1": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "64331"
                    },
                    "provider_name_2": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "1235"
                    },
                },
                "xml": {
                    "name": "prices"
                },
                example: {
                    "XM1014 | Zombie Offensive (Well-Worn)": {
                        "liquidity": 53.555,
                        "buff": {
                            "isInflated": false,
                            "price": 32,
                            "count": 43,
                            "avg30": 28,
                            "createdAt": "2023-02-02T12:13:07.393Z"
                        },
                    },
                }
            },
            "AdvancedItems": {
                "type": "object",
                "name": "asd",
                "properties": {
                    "provider_name_0": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "58853"
                    },
                    "provider_name_1": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "64331"
                    },
                    "provider_name_2": {
                        "type": "integer",
                        "format": "int(32)",
                        "example": "1235"
                    },
                },
                "xml": {
                    "name": "prices"
                },
                example: {
                    "XM1014 | Zombie Offensive (Well-Worn)": {
                        "liquidity": 53.555,
                        "buff": {
                            "isInflated": false,
                            "price": 32,
                            "count": 43,
                            "avg30": 28,
                            "createdAt": "2023-02-02T12:13:07.393Z"
                        },
                    },
                }
            }
        },
        "securitySchemes": {
            // "bearerAuth": {
            //     "type": "http",
            //     "scheme": "bearer",
            //     "bearerFormat": "JWT",
            //     "description": "Pricempire.com API Key",
            // },
            "api_key": {
                "description": "Pricempire.com API Key",
                "type": "apiKey",
                "in": "query",
            }
        }
    },
    "security": {
        api_key: [],
        bearerAuth: [],
    }
}