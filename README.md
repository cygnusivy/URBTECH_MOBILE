
![Urbtech](./assets/img/readme/urbtechmd.png) 
##
![Sobre nós](./assets/img/readme/sobrenos.png)

#### O URBTECH é um aplicativo incrível para ciclistas apaixonados por pedalar e também para aqueles que só querem uma melhor forma de transitar pela cidade! Com ele, você pode personalizar suas rotas, encontrar os melhores pontos de reparo para sua bike, descobrir rotas seguras e até mesmo localizar onde alugar uma bicicleta. É a ferramenta perfeita para quem quer explorar a cidade de uma forma saudável, sustentável e divertida. Baixe já o [URBTECH](https://urbtech.netlify.app) e comece a desfrutar de todas essas vantagens agora mesmo!
##
#### Em um contexto geral, a URBTECH possui três repositórios: o [URBTECH PWA](https://github.com/cygnusivy/URBTECH), [URBTECH BACK-END](https://github.com/cygnusivy/BACKEND_URBTECH) e [URBTECH MOBILE](https://github.com/cygnusivy/URBTECH_MOBILE). O URBTECH MOBILE e URBTECH PWA dependem exclusivamente do URBTECH BACK-END para seu funcionamento, pois utilizam as APIs deste projeto para plena execução das funcionalidades asoociadas a seus sistemas. Dentre as funcionalidades podemos citar: cadastro de conta; edição de perfil; login no sistema; postagem na comunidade; e visualizar postagens da comunidade. As informações utilizadas para construção do mapa são acessadas internamente dentro do próprio sistema mobile por meio da disponibilização de arquivos .json.
##
#### Neste documento trataremos apenas dos aspéctos referentes ao projeto [URBTECH MOBILE](https://github.com/cygnusivy/URBTECH_MOBILE). Para obter mais detalhes sobre as particularidades referentes aos outros sistemas visite seus repositórios.
##
![Equipe](./assets/img/readme/equipe.png)
|**Nome**|Aldenir Telles|Emmilly Lins|Everton Nascimento|Jhonata Carvalho|Pablo Souza|Pedro H. Sousa|Ronaldo Sabino|Victor Ferreira|
|---|---|---|---|---|---|---|---|---|
|**GitHub**|[@aldenirtelles](https://github.com/aldenirtelles)|[@emmillylins](https://github.com/emmillylins)|[@cygnusivy](https://github.com/cygnusivy)|[@jhonata.carvalho](https://github.com/SaveTheForest)|-|[@pedrohssouza](https://github.com/pedrohssouza)|[@ronaldosabino](https://github.com/ronaldosabino)|[@victorferreiral](https://github.com/victorferreiral)|
##
## Passos necessários para subir o sistema.
#### - Possuir o Expo Go instalado no seu aparelho de celular.
#### - Caso não tenha o expo instalado na sua máquina (notebook ou pc) instale-o utilizando: 
```
yarn install -g expo-cli
```
#### no seu terminal de comando. 
#### - Verifica se a instalação foi realizada com sucesso executando o comando: 
```
expo --version
```
#### no seu terminal de comando.
#### - Realize o clone do projeto:
```
git clone "https://github.com/cygnusivy/URBTECH_MOBILE.git"
```
#### - Navege até a pasta raíz do projeto e execute:
```
yarn 
```
#### para baixar os pacotes e dependências do projeto.
#### - Por fim, execute:
```
expo start
```
#### para subir a aplicação mobile. Escanei o QR Code disponibilizado e divirta-se.
##
![Artefatos](./assets/img/readme/artefatos.png)
##
<a href="https://www.figma.com/file/9cTYQ1oBqvuStSaEPpmT79/URBTECH?node-id=20-2&t=cLoR578noDStaAkv-0" target="_blank" rel="noopener">Figma - Protótipo Mobile</a>
##
![Tecnologiasmd](./assets/img/readme/tecnologia.png)
##
#### - Mobile: React Native; TypeScript; Styled Component; Cloudinary; Expo Go;
#### - APIs Back-end: Java; Spring Boot; Heroku (para deploy da aplicação)
#### - Banco de dados: Amazon AWS; MySQL;
##
![Tecnologias](./assets/img/tecatualizado.png)
##
![Base de dados](./assets/img/readme/basedados.png)

Todos os dados utilizados para desenvolvimento da plataforma foram obtidos a partir do [Portal de Dados Abertos da cidade do Recife](http://dados.recife.pe.gov.br/).
