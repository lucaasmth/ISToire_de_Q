#!/bin/bash

cd ISToire_de_Q
git pull
npm i
docker build . -t dortoir/istoire_de_q
docker stop istoire_de_q
docker rm istoire_de_q
docker run -p 7456:3000 -d dortoir/istoire_de_q --name=istoire_de_q
