# Champions League API

A RESTful API built with Node.js, TypeScript, and Express for consulting and updating and deleting players and clubs, inspired by the Champions League.


## Features

- Retrieve all players or a single player by ID
- Create new players
- Update or delete players by ID
- Retrieve a list of clubs

## Built With

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [TSX](https://github.com/esbuild/tsx)
* [Tsup](https://tsup.egoist.dev/)


## Installation

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Clone the repository:

```bash
git clone https://github.com/your-username/projeto_champions.git
````

2. Navigate into the project directory:

```bash
cd projeto_champions
```

3. Install dependencies:

```bash
npm install
```

## Running the Project

To start the development server:

```bash
npm run start:dev
```

To build the project:

```bash
npm run dist
```

To run the compiled code:

```bash
npm run start:dist
```

To watch files during development:

```bash
npm run start:watch
```

## API Endpoints

### Players

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | `/players`     | Get all players       |
| GET    | `/players/:id` | Get a player by ID    |
| POST   | `/players`     | Create a new player   |
| PATCH  | `/players/:id` | Update a player by ID |
| DELETE | `/players/:id` | Delete a player by ID |

### Clubs

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| GET    | `/clubs` | Get all clubs |

## Example Request

**GET** all players:

```http
GET http://localhost:3333/players
```

**POST** a new player:

```http
POST http://localhost:3333/players

JSON:
{
  "id": 100,
  "name": "Vinícius Júnior",
  "club": "Real Madrid",
  "nationality": "Brazil",
  "position": "Left Winger",
  "statistics": {
    "Overall": 91,
    "Pace": 95,
    "Shooting": 83,
    "Passing": 80,
    "Dribbling": 94,
    "Defending": 35,
    "Physical": 72
  }
}
```
