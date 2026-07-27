# brainbox_front
## Installation
- Vérifier si node.js est bien installer et a la bonne version
```bash
node --version
npm --version
```
- Installer Angular dans le dossier parent du front
```bash
npm install -g @angular/cli
```
- Vérfification de son installation 
```bash
ng version
```
- Créer l'environnement d'Anglura dans le front 
```bash
ng new front --directory .
```
**Réponse aux questions posées : SCSS, N et None**
- Ouvrir Angular
```bash 
ng serve --open
ou 
Local: http://localhost:4200/
```
- Pour créer un composant 
```bash
ng generate component conv
```

## Angular

### Générer un service 
```bash
ng generate service services/connaissance
```
Service
→ prépare la requête

Composant
→ s’abonne et déclenche la requête

### Générer un component
```bash
ng generate component components/connaissances
```
```bash
Angular crée le composant
        ↓
ngOnInit() est exécuté
        ↓
chargerConnaissances() est appelée
        ↓
le service envoie GET /allConnaissances
        ↓
Express interroge MongoDB
        ↓
le tableau est renvoyé à Angular
        ↓
this.connaissances reçoit les données

```
```bash
URL /connaissances
        ↓
Angular cherche une route correspondante
        ↓
component: Connaissances
        ↓
Angular insère le composant dans router-outlet
```