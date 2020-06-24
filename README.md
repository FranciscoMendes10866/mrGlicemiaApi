# Mr Glicemia API

## CLI

Package Manager

```bash
npm # or yarn
```

Install dependencies

```bash
npm install # or yarn
```

Development env

```bash
npm start:dev # or yarn start:dev
```

Build cmd

```bash
npm build # or yarn build
```

Production env

```bash
npm start:prod # or yarn start:prod
```

Check patterns

```bash
npm run lint # or yarn lint
```

Correct code patterns

```bash
npm run lint:fix # or yarn lint:fix
```

Prisma Studio

```bash
npm run prisma:studio # or yarn prisma:studio
```

Prisma Introspect

```bash
npm run prisma:intro # or yarn prisma:intro
```

Prisma Migration save

```bash
npm run prisma:save <migrationName> # or yarn prisma:save <migrationName>
```

Prisma Migration up

```bash
npm run prisma:migrate # or yarn prisma:migrate
```

Jest test cmd

```bash
npm run test # or yarn test
```

## Used dependencies

```bash
express                 # Javascript Framework
body-parser             # body parser
cors                    # cors middleware protection
pg                      # Postgresql client for node.js
@prisma/cli             # database toolkit cli
@prisma/client          # database toolkit functionalities
dotenv                  # env vars
eslint                  # code patterns checker
morgan                  # http logger
ts-node-dev             # daemon process manager
joiful                  # data-types validator
babel                   # compiler
helmet                  # http headers protection
compression             # compacts body responses
jest                    # testing library
```

## Extras

Tudo isto encontra-se na root do projeto

```bash
babel.config.js        # Babel config
jest.config.js         # Jest config
tsconfig.json          # TS config
.eslintrc.yml          # ESLint config
.eslintignore          # eslint ignore config
.gitignore             # git ignore config
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
