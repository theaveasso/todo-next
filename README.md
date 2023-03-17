# my todo app 
Sorry For you to look at this mess code

To be honest with you I haven't been coding in react for quite sometime now, And this interview caught me in the very awkward situation. What I can do with this code is was only simple crud application with tons of bug. and Not meet some of the requirement. such (Filter, Hover to delete, I show it instead).

You could run this app by
Might need database to make this app work properly (postgres)
- option 1: 
```
docker-compose up
```
then setup the database url in the `.env` file.
- option 2 (which I used in this code
```
// create a database in suparbase copy the dabase_url then to .env file
DATABASE_URL="postgresql://postgres:password@db:5432/postgres"
```
### How to start the project
```
pnpm i 
// or 
npm i 
// or 
yarn i
```
```
// after config the DB url
pnpm prisma db push
// then 
pnpm prisma studio // to see db table
```

Cheers!!🥂

## Tech stack I used:
# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

An Email service also needs to be added for this partiular project
