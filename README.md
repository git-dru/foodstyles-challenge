# Foodstyles Challenge
This is a Node.js API built with Express. The aim is to generate a search algorithm using permutations of varying entities from a random search query.

## Installation
To get started with this project, follow these steps:

### Clone the Repository
```bash
git clone https://github.com/git-dru/foodstyles-challenge.git
```
### Set Up MySQL Schema
1. Ensure you have MySQL installed.
2. Create a schema for the project.
3. Copy the `.env.example`  file to `.env`  and update it with your MySQL connection details.
### Install Dependencies
```bash
npm install
```
### Migrate and Seed Database
```bash
npm run seed
```
## Usage
### Start the Server
#### Simple Method
```bash
npm run start
```

### Interact with the API
Use tools like Postman to interact with the API.

- Make a GET request to [﻿http://localhost:8000/api/search?searchTerm=McDonald's](http://localhost:8000/api/search?searchTerm=McDonald's) , where `searchTerm`  is any string value, which may include spaces.
## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branchgit checkout -b feature/your-feature
3. Make changes and commit themgit commit -am 'Add new feature'
4. Push to the branchgit push origin feature/your-feature
5. Create a new Pull Request
## License
This project is licensed under the MIT License.

