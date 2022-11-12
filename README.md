## SubSteak API

This is REST API built with `NestJS`, `Prisma`, `SQLite` and `Typescript` for a blog application called Substeak.

It uses `Swagger` for the API documentation.

I've heard great things about Nest and Prisma. I've also been learning some TS recently so I decided to build an API with it.

Inspired by the helpful tutorial at Prisma docs.

## How it works

There are two Prisma models. The `author` and `article` model.

Every user is an author. An author can have a number of articles.

author model:

```
  model Author {
    id Int
    email String
    name: String
    articles Artcle[]
  }
```

article model:

```
model Article{
  id Int
  title String
  description String
  body String
  published Boolean
  createdAt DateTime
  updatedAt DateTime
  author Author
  authorId Int
}
```

# How to run

To run this api locally,

1. Clone the repo

2. Install the dependencies with:

```
npm install
```

3. Generate the `env` file

```
npx prisma migrate dev --name init
```

3. Connect the `db` file to the Prisma service

```
npx prisma generate
```

4. Run it locally by running:

```
npm run start: dev
```
