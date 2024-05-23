FROM node:18-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN rm -f package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "dev"]
