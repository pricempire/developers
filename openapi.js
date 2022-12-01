var spec = {
    "openapi": "3.0.2",
    "info": {
        "title": "Pricempire.com - API Documentation",
        "description": "A few endpoint need an active subscription. You can purchase [here](https://pricempire.com/subscription).",
        "termsOfService": "https://pricempire.com/terms",
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
            "url": "https://api.pricempire.com/v2/"
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
            "description": "Get Inventories (Soon)",
        }
    ],
    "paths": {
        "/getItemByName/{market_hash_name}": {
            "get": {
                "tags": [
                    "items"
                ],
                "summary": "Getting a single item (API Key required)",
                "description": "Getting a single item by market_hash_name",
                "operationId": "getItemByName",
                "parameters": [
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
                    {
                        "name": "source",
                        "in": "query",
                        "description": "Selected Providers",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'buff163,skinport,csgoempire'
                        }
                    }
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
                        "bearerAuth": []
                    }
                ]
            },
        },
        "/getAllItems": {
            "get": {
                "tags": [
                    "items"
                ],
                "summary": "Getting all items in one response (API Key required)",
                "description": "Getting all items in one response",
                "operationId": "getAllItems",
                "parameters": [
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
                        "name": "source",
                        "in": "query",
                        "description": "Selected Providers",
                        "required": false,
                        "schema": {
                            "type": "string",
                            "format": "string",
                            "example": 'buff163,skinport,csgoempire'
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
                        "bearerAuth": []
                    }
                ]
            },
        },
        /*
        "/pet/findByStatus": {
            "get": {
                "tags": [
                    "pet"
                ],
                "summary": "Finds Pets by status",
                "description": "Multiple status values can be provided with comma separated strings",
                "operationId": "findPetsByStatus",
                "parameters": [
                    {
                        "name": "status",
                        "in": "query",
                        "description": "Status values that need to be considered for filter",
                        "required": false,
                        "explode": true,
                        "schema": {
                            "type": "string",
                            "default": "available",
                            "enum": [
                                "available",
                                "pending",
                                "sold"
                            ]
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Pet"
                                    }
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Pet"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            }
        },
        "/pet/findByTags": {
            "get": {
                "tags": [
                    "pet"
                ],
                "summary": "Finds Pets by tags",
                "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
                "operationId": "findPetsByTags",
                "parameters": [
                    {
                        "name": "tags",
                        "in": "query",
                        "description": "Tags to filter by",
                        "required": false,
                        "explode": true,
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Pet"
                                    }
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Pet"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            }
        },
        "/pet/{petId}": {
            "get": {
                "tags": [
                    "pet"
                ],
                "summary": "Find pet by ID",
                "description": "Returns a single pet",
                "operationId": "getPetById",
                "parameters": [
                    {
                        "name": "petId",
                        "in": "path",
                        "description": "ID of pet to return",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/Pet"
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Pet"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Pet not found"
                    }
                },
                "security": [
                    {
                        "api_key": []
                    },
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            },
            "post": {
                "tags": [
                    "pet"
                ],
                "summary": "Updates a pet in the store with form data",
                "description": "",
                "operationId": "updatePetWithForm",
                "parameters": [
                    {
                        "name": "petId",
                        "in": "path",
                        "description": "ID of pet that needs to be updated",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "Name of pet that needs to be updated",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "description": "Status of pet that needs to be updated",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "405": {
                        "description": "Invalid input"
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            },
            "delete": {
                "tags": [
                    "pet"
                ],
                "summary": "Deletes a pet",
                "description": "",
                "operationId": "deletePet",
                "parameters": [
                    {
                        "name": "api_key",
                        "in": "header",
                        "description": "",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "petId",
                        "in": "path",
                        "description": "Pet id to delete",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid pet value"
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            }
        },
        "/pet/{petId}/uploadImage": {
            "post": {
                "tags": [
                    "pet"
                ],
                "summary": "uploads an image",
                "description": "",
                "operationId": "uploadFile",
                "parameters": [
                    {
                        "name": "petId",
                        "in": "path",
                        "description": "ID of pet to update",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    },
                    {
                        "name": "additionalMetadata",
                        "in": "query",
                        "description": "Additional Metadata",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/octet-stream": {
                            "schema": {
                                "type": "string",
                                "format": "binary"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ApiResponse"
                                }
                            }
                        }
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            }
        },
        "/store/inventory": {
            "get": {
                "tags": [
                    "store"
                ],
                "summary": "Returns pet inventories by status",
                "description": "Returns a map of status codes to quantities",
                "operationId": "getInventory",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "additionalProperties": {
                                        "type": "integer",
                                        "format": "int32"
                                    }
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
            }
        },
        "/store/order": {
            "post": {
                "tags": [
                    "store"
                ],
                "summary": "Place an order for a pet",
                "description": "Place a new order in the store",
                "operationId": "placeOrder",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Order"
                            }
                        },
                        "application/xml": {
                            "schema": {
                                "$ref": "#/components/schemas/Order"
                            }
                        },
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Order"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Order"
                                }
                            }
                        }
                    },
                    "405": {
                        "description": "Invalid input"
                    }
                }
            }
        },
        "/store/order/{orderId}": {
            "get": {
                "tags": [
                    "store"
                ],
                "summary": "Find purchase order by ID",
                "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
                "operationId": "getOrderById",
                "parameters": [
                    {
                        "name": "orderId",
                        "in": "path",
                        "description": "ID of order that needs to be fetched",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/Order"
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Order"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Order not found"
                    }
                }
            },
            "delete": {
                "tags": [
                    "store"
                ],
                "summary": "Delete purchase order by ID",
                "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
                "operationId": "deleteOrder",
                "parameters": [
                    {
                        "name": "orderId",
                        "in": "path",
                        "description": "ID of the order that needs to be deleted",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Order not found"
                    }
                }
            }
        },
        "/user": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "Create user",
                "description": "This can only be done by the logged in user.",
                "operationId": "createUser",
                "requestBody": {
                    "description": "Created user object",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        },
                        "application/xml": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        },
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                },
                "responses": {
                    "default": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/user/createWithList": {
            "post": {
                "tags": [
                    "user"
                ],
                "summary": "Creates list of users with given input array",
                "description": "Creates list of users with given input array",
                "operationId": "createUsersWithListInput",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "default": {
                        "description": "successful operation"
                    }
                }
            }
        },
        "/user/login": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Logs user into the system",
                "description": "",
                "operationId": "loginUser",
                "parameters": [
                    {
                        "name": "username",
                        "in": "query",
                        "description": "The user name for login",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "description": "The password for login in clear text",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "headers": {
                            "X-Rate-Limit": {
                                "description": "calls per hour allowed by the user",
                                "schema": {
                                    "type": "integer",
                                    "format": "int32"
                                }
                            },
                            "X-Expires-After": {
                                "description": "date in UTC when token expires",
                                "schema": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            }
                        },
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "type": "string"
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid username/password supplied"
                    }
                }
            }
        },
        "/user/logout": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Logs out current logged in user session",
                "description": "",
                "operationId": "logoutUser",
                "parameters": [],
                "responses": {
                    "default": {
                        "description": "successful operation"
                    }
                }
            }
        },
        "/user/{username}": {
            "get": {
                "tags": [
                    "user"
                ],
                "summary": "Get user by user name",
                "description": "",
                "operationId": "getUserByName",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "description": "The name that needs to be fetched. Use user1 for testing. ",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid username supplied"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            },
            "put": {
                "tags": [
                    "user"
                ],
                "summary": "Update user",
                "description": "This can only be done by the logged in user.",
                "operationId": "updateUser",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "description": "name that need to be deleted",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "description": "Update an existent user in the store",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        },
                        "application/xml": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        },
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                },
                "responses": {
                    "default": {
                        "description": "successful operation"
                    }
                }
            },
            "delete": {
                "tags": [
                    "user"
                ],
                "summary": "Delete user",
                "description": "This can only be done by the logged in user.",
                "operationId": "deleteUser",
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "description": "The name that needs to be deleted",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "400": {
                        "description": "Invalid username supplied"
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            }
        }
        */
    },
    "components": {
        "schemas": {
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
            "requestBodies": {
                "Pet": {
                    "description": "Pet object that needs to be added to the store",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Pet"
                            }
                        },
                        "application/xml": {
                            "schema": {
                                "$ref": "#/components/schemas/Pet"
                            }
                        }
                    }
                },
                "UserArray": {
                    "description": "List of user object",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            },
        },
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
                "description": "Pricempire.com API Key",
            }
        }
    },
    "security": {
        bearerAuth: [],
    }
}