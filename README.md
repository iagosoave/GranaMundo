# Conversor de Moedas

![home](https://github.com/user-attachments/assets/ced79e48-14ee-4d43-8d2d-4c5f5169f431)



Um projeto moderno de conversão de moedas com gráficos históricos e notícias de mercado, desenvolvido em React.

## 🌐 Acesse o Projeto

[**GranaMundo - Conversor de Moedas**](https://granamundo.netlify.app/)

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS
- **API**: [FastForex](https://fastforex.io)
- **Componentes**: Lucide React para ícones

## ✨ Funcionalidades

- Conversão de moedas em tempo real com base em taxas de câmbio atualizadas.
- Gráficos históricos de taxas de câmbio.
- Visualização de notícias de mercado relacionadas a economia e câmbio.
- Interface moderna, responsiva e amigável.
- Troca dinâmica entre moedas de origem e destino.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado ([Instalar aqui](https://nodejs.org))
- API Key do FastForex ([Obter aqui](https://fastforex.io))

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/conversor-de-moedas.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd conversor-de-moedas
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure a variável de ambiente com sua API Key no arquivo `.env`:
   ```env
   REACT_APP_FASTFOREX_API_KEY=YOUR_API_KEY
   ```
5. Execute o projeto:
   ```bash
   npm start
   ```

O projeto estará disponível em `http://localhost:3000`.

## 🖼️ Demonstração

### Tela Principal
![home](https://github.com/user-attachments/assets/6af70e06-c3ac-4b9a-8b9c-7d7c0df32011)


### Conversão de Moedas
![converter](https://github.com/user-attachments/assets/e20da89f-3590-4526-8991-389e7cac2219)


### Gráficos Históricos
![grafico](https://github.com/user-attachments/assets/92dce33a-019a-47a7-9c29-48a7463c800e)


### Notícias de Mercado
![news](https://github.com/user-attachments/assets/6ecaf239-7d4b-4274-91d8-c9b58cdc2373)


## 📂 Estrutura do Projeto

```
📂 src
├── 📁 components       # Componentes reutilizáveis
├── 📁 data             # Dados mockados para testes
├── 📁 assets           # Imagens e ícones
├── 📁 styles           # Estilos globais e configurações do Tailwind CSS
├── App.jsx             # Componente principal
└── index.js            # Arquivo de entrada
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
