# Paretto: A Complete DotSama Wallet API

## Introduction

Paretto is a complete DotSama wallet API. It is a RESTful API that allows you to create, manage and use DotSama wallets. It offers the following features:

- Validate Polkadot addresses

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Documentation](#documentation)
  - [API Reference](#api-reference)
    - [Utils](#utils)
      - [Validate Address](#validate-address)
  - [Swagger](#swagger)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js 16+ (preferably 18+)

### Installation

```bash
yarn install
```

### Usage

```bash
yarn start
```

## Documentation

### API Reference

#### Utils

##### Validate Address

```http
GET /utils/validate-address/:address
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `address` | `string` | **Required**. Address to validate |

**Example**

```bash
curl -X GET "http://localhost:3000/utils/validate-address/5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE" -H  "accept: application/json"
```

**Response**

```json
{
  "address": "5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE",
  "isValid": true
}
```

### Swagger

You can find the Swagger documentation at `/docs`.

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page]()

## License

This project is [MIT](LICENSE) licensed.

