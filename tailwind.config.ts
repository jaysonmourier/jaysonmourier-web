import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#4F46E5', // Bleu pour les boutons et éléments principaux
          light: '#6366F1',  // Bleu clair pour survol ou accents
          dark: '#3730A3',   // Bleu foncé pour le texte ou les arrière-plans
        },
        secondary: {
          DEFAULT: '#EC4899', // Rose pour les accents ou alertes
          light: '#F472B6',  // Rose clair
          dark: '#BE185D',   // Rose foncé
        },
        neutral: {
          100: '#F3F4F6',  // Gris très clair (arrière-plans)
          200: '#E5E7EB',  // Gris clair (borders)
          300: '#D1D5DB',  // Gris moyen (textes secondaires)
          500: '#6B7280',  // Gris foncé (textes principaux)
          900: '#111827',  // Noir bleuté (titres et éléments foncés)
        },
        success: '#10B981',   // Vert pour succès ou validations
        warning: '#F59E0B',   // Orange pour avertissements
        error: '#EF4444',
      },
    },
  },
  plugins: [],
} satisfies Config;
