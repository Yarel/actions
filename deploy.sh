#!/bin/bash
docker build -t app:1.0 .
docker tag app:1.0 app:latest
docker create --name web -p 8000:8080 --rm app
docker start web
