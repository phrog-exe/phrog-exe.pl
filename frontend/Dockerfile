# Krok 1: Budowanie produkcyjne React
FROM node:20-alpine AS build-stage
WORKDIR /app

# Kopiowanie plików zależności
COPY package*.json ./

# Instalowanie zależności (dodajemy --legacy-peer-deps dla kompatybilności React 19 z react-scripts)
RUN npm install --legacy-peer-deps

# Kopiowanie reszty plików źródłowych frontendu
COPY . .

# Budowanie wersji produkcyjnej HTML/JS/CSS
RUN npm run build

# Krok 2: Uruchomienie Nginx do serwowania plików i proxy
FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html

# Kopiowanie naszej konfiguracji Nginx do kontenera
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
