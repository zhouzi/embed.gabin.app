# embed.gabin.app

Cette application permet d'imbriquer le site d'un partenaire afin d'y injecter un bandeau.

Il s'agit tout simplement d'un bout de code Node qui retourne une page HTML dans laquelle le site partenaire est imbriqué dans une iframe. Le bandeau est codé à la main.

Pour réutiliser ce projet tu peux le cloner et modifier le code à ta guise.

## Installation

Pré-requis : [Node](https://nodejs.org/en/download/) et le [CLI Vercel](https://vercel.com/docs/cli).

1. `npm install`
2. `vercel dev` (afin de simuler un environnement Vercel prenant en compte le `vercel.json`)

## Déploiement

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzhouzi%2Fembed.gabin.app)

P.S.: le tracker d'analytics Vercel est injecté dans la page. Les données remonteront une fois le module analytics activée sur le projet (depuis l'interface de gestion Vercel).
