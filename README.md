# Formation React

## 1. Pré-requis

Avoir sur son poste :

- [Visual Studio Code](https://code.visualstudio.com) avec les extensions suivantes :

  - ESLint
  - Prettier
  - Color Higjlight
  - Thunder Client

- [NodeJS LTS](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## 2. Programme

Voici le programme de la formation et des liens associés :

- [La décomposition](https://2ality.com/2015/01/es6-destructuring.html)
- [TypeScript](https://www.typescriptlang.org)
- [Yet Another Resource Negotiator YARN](https://yarnpkg.com)
- [React](https://beta.reactjs.org)
- [React Router](https://reactrouter.com)
- [Component Library (IHM, material)](https://mui.com)
- [Le Style avec React](https://emotion.sh/docs/introduction)
- [Mobx (State management)](https://mobx.js.org/README.html)
- local storage, session storage, cookies, [IndexedDB](https://javascript.info/indexeddb)
- [Les tests Cypress](https://www.cypress.io)
- [Les Progressive Web Apps](https://create-react-app.dev/docs/making-a-progressive-web-app)
- [Best practice React](https://alexkondov.com/tao-of-react)
- [Comment debugger ?](https://developer.chrome.com/docs/devtools/console)

Pour les anglophiles ([voici une chaîne YouTube](https://www.youtube.com/watch?v=Dorf8i6lCuk) qui fournit des vidéos très bien construites sur React, Angular, Vue.js, Svelte, Mobx etc.

## 3. Description

Ce projet a pour but de démontrer comment utiliser React au travers de différents exemples.

Il est composé de trois dossiers:

- client : application Front-End contenant les exemples [React](https://beta.reactjs.org/learn)
- server : application server [Next.js](https://nextjs.org) utilisé pour l'exemple axios
- virtualDom : dossier contenant un fichier clock.html démontrant l'utilisation de virtual DOM par React

## 4. Client [React](https://beta.reactjs.org/learn)

Pour installer les packages nécessaires au développement du client, utilisez les commandes suivantes `depuis la racine du projet` :

```bash
cd client
yarn install
```

Pour lancer l'application client :

```bash
cd client
yarn start
```

Il est accessible sur le `localhost:5200`

## 5. Server [Next.js](https://nextjs.org)

Pour installer les packages nécessaires au développement du server, utilisez les commandes suivantes `depuis la racine du projet` :

```bash
cd server
yarn install
```

Pour lancer le server :

```bash
cd server
npx next dev -p 6200
```

Il est accessible sur le `localhost:6200`

## 6. Cypress

Pour utiliser cypress en local, il est nécessaire de lancer l'application client.

Ensuite il faut utiliser la commande suivante pour lancer Cypress en mode `headfull` (avec navigateur)

```bash
cd client
yarn cypress open
```
