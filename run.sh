#!/bin/bash
cd ./api
npm install
cd ../app
npm install
cd ..
docker-compose up --build
