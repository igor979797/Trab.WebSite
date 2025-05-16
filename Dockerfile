FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app/test-integration

# Copia os arquivos de package.json e package-lock.json da pasta test-integration do host para o container
COPY test-integration/package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o conteúdo da pasta test-integration para o diretório atual no container
COPY test-integration/ .

# Expõe a porta (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

