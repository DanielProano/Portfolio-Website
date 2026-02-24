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

- For containerizing and isolating the app

### Google 

- Acts as a reverse proxy

### Backend:

- **express.js** - Web Framework

- **express-rate-limit** - Library for rate limiting

- **jsonwebtoken** - Library for JWT generation and verification

- **sqlite3** - Database

- **dotenv** - Library to load variables from .env

- **crypto** - Library used to create secure and random salts

### Frontend:

- **vite** - Frontend build tool

- **react-router-dom** - React library facilitating the interaction between

- **bcryptjs** - Javascript library for hashing and salting

different pages

## Installation

```bash

git clone https://github.com/DanielProano/Portfolio-Website.git

cd Portfolio-Website/frontend

./host.sh
