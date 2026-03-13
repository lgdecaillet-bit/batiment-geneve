# Bâtiment Genève

Site vitrine pour une entreprise de bâtiment (construction/rénovation/finitions) basée à Genève, Suisse.

## Stack technique

- **Next.js 14** (App Router) — Static export pour Vercel
- **TypeScript**
- **Tailwind CSS** — Design system custom (cream, charcoal, accent terracotta)
- **Framer Motion** — Animations scroll reveal, counters, stagger
- **Lucide React** — Icônes
- **DM Serif Display + Outfit** — Typographies Google Fonts

## Structure

```
src/
├── app/
│   ├── layout.tsx            Fonts + metadata
│   ├── page.tsx              Composition des composants
│   └── globals.css           Styles custom (pseudo-éléments, keyframes)
├── components/
│   ├── Navbar.tsx            Navigation fixe + hamburger mobile
│   ├── Hero.tsx              Section héro avec image + stat flottante
│   ├── TrustBar.tsx          Barre de confiance (certifications)
│   ├── Services.tsx          6 cartes de services avec images
│   ├── Process.tsx           4 étapes du processus
│   ├── Portfolio.tsx         Grille de réalisations
│   ├── Stats.tsx             Compteurs animés
│   ├── Testimonials.tsx      Témoignages clients
│   ├── CTA.tsx               Section contact → WhatsApp
│   ├── Footer.tsx            Pied de page 4 colonnes
│   ├── BackToTop.tsx         Bouton retour en haut
│   └── WhatsAppButton.tsx    Bouton WhatsApp flottant
└── lib/
    ├── config.ts             Toutes les données business centralisées
    └── animations.ts         Variants Framer Motion réutilisables
```

## Personnalisation

Toutes les données du site (nom, téléphone, email, services, témoignages, etc.) sont centralisées dans **`src/lib/config.ts`**. Modifiez ce seul fichier pour adapter le contenu.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Static export dans /out
```

## Déploiement

Configuré avec `output: 'export'` pour déploiement statique sur Vercel ou tout hébergeur statique.

---

Conception: **TESO**
