# MERN-docker-project-proposal
Dockerized a MERN project proposal system with:
- role authentication using Routes
- save form progress
- json web access tokens
- uploading files directly to MongoDB cloud storage using GridFS 

## Methodology
- Initialize frontend with ```npx create-react-app frontend```
- ```mkdir backend```
- create controllers for projectproposal and user auth calls
- use Axios for post and retrieving JSON responses
- create Dockerfile and .dockerignore for both frontend and backend
- ignore node_modules and
- create docker_compose.yaml in root folder
- initialize 3 services: mongo (with environment url), frontend and backend     

## Prerequisities
- node.js v18.13.0
- express.js
- Mongo Compass

## Usage

- Open cmd
- Install packages from package.json for backend
```
cd ./server/
npm install
```

- Install packages from package.json for frontend
```
cd ../frontend/
npm install
```

<b> Without docker </b>
- Run the server
```
cd ../server/
npm run dev
```


<b>With docker</b>
```
docker-compose up
```

## Authors:
[Devansh Kaushik, IIT Jodhpur(M22CS005)]([https://github.com/valkyron])
