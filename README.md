---
title: Read Me
date: "2021-12-13T15:00:48.859Z"
lastmod: "2021-12-13T15:00:48.859Z"
draft: false
slug: readme
author: Alexandre Civilise
description: Read Me
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
showToc: true
TocOpen: false
hidemeta: false
---

## 1. Pré-requis

Ce projet utilise Yarn, pour l'installer, utilisez la commande suivante :

```bash
npm install -g yarn
```

Pour installer les packages nécessaires au développement de ce projet, utilisez ensuite la commande :

```bash
yarn install
```

## 1. CLI importantes

Pour utiliser le linter :

```bash
yarn lint --fix --quiet
```

Pour utiliser prettier :

```bash
npx prettier --write .
```

Pour lancer l'application :

```bash
cd client
yarn start
```

Pour lancer le server :

```bash
cd server
npx next dev -p 4000
```

## 1. Cypress

Pour utilise cypress en local, il est nécessaire de lancer l'application :

```bash
yarn start
```

Ensuite il faut utiliser la commande suivante pour lancer Cypress en mode headfull (avec navigateur)

```bash
yarn cypress open
```
