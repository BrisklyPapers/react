FROM node:11

COPY entrypoint.sh .

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install bash