# Utilisez une image de node.js v14 comme image parent
FROM node:18

# Créer le répertoire de travail de l'application
WORKDIR /app

# Copier le fichier package.json et le package-lock.json dans le répertoire de travail de l'application
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tous les fichiers de l'application dans le répertoire de travail de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Exposer le port 3000 pour l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]