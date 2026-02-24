<img width="1500" height="891" alt="image" src="https://github.com/user-attachments/assets/c59724fe-c15e-4803-b032-33032a951652" />

# Portfolio Website

A full-stack portfolio website that

implementates and displays several

full-stack projects under one domain.

## Features

- Load Balancer to route traffic to

  different applications

- Use of custom UI components

  (https://github.com/DanielProano/Website-UI)

- Display of my research & projects

- User login system

## Tech Stack

### Docker

For containerizing, isolation, and easy deployment of both

the backend and frontend

### Google Cloud Run

Deployment of different full stacks as serverless Network 

Endpoint Group (NEG) under (dannyproano.com) using a load balancer

for traffic and API routing

### Backend

- **javascript** - Makes up a majority of my backend

- **sqlite3** - My Database of choice

- **express.js** - Web Framework

- **express-rate-limit** - Library for rate limiting

- **jsonwebtoken** - Library for JWT generation and verification

- **dotenv** - Library to load and use local, secret variables

- **crypto** - Library used to create secure and random salts

### Frontend:

- **React** - My language of choice to write the frontend

- **vite** - Frontend build tool

- **dproano_npm/website-topbar** - My custom topbar component 

publically available on npm (https://github.com/DanielProano/Website-UI)

- **react-router-dom** - React library facilitating the interaction between

- **bcryptjs** - Javascript library for hashing and salting


## Installation

```bash

git clone https://github.com/DanielProano/Portfolio-Website.git

cd Portfolio-Website/frontend

./host.sh
```

## History

The first iteration of this deployment: 

(https://github.com/DanielProano/Password-Manager)
