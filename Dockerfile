FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do Node.js para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos da aplicação para o container
COPY . .

# Expõe a porta (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

