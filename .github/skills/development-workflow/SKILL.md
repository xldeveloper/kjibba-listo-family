---
name: development-workflow
description: Development workflow and quality assurance process
---

# Development Workflow

## Prinsipper for vellykket implementering

### 1. Plan før kode
**Aldri** start koding uten:
- [ ] Feature-spec skrevet
- [ ] Datamodell-endringer dokumentert
- [ ] UI-skisser tegnet
- [ ] API-endepunkter definert

### 2. Små, testbare steg
**Én feature om gangen**, ikke store omskrivinger.

### 3. Alltid verifiser
Test i browser **før** commit.

---

## Standard feature-flyt

```
1. PLANLEGGING
   │
   ├─ Les feature-spec (docs/features/*.md)
   ├─ Identifiser påvirkede filer
   └─ Opprett task.md-sjekkpunkter
   │
   ▼
2. DATABASE (hvis nødvendig)
   │
   ├─ Oppdater schema.prisma
   ├─ npx prisma db push
   ├─ npx prisma generate
   └─ Test i Prisma Studio
   │
   ▼
3. BACKEND (hvis nødvendig)
   │
   ├─ Lag/oppdater API-routes
   ├─ Test med cURL/Postman
   └─ Håndter feil
   │
   ▼
4. FRONTEND
   │
   ├─ Opprett komponenter
   ├─ Koble til API
   └─ Stil med Tailwind
   │
   ▼
5. VERIFISERING
   │
   ├─ Test i browser (mobil + desktop)
   ├─ Sjekk konsoll for feil
   ├─ Test edge cases
   └─ Kjør gjennom før-deploy-sjekklisten
   │
   ▼
6. COMMIT
   │
   ├─ git add .
   ├─ git commit -m "feat: beskrivelse"
   └─ git push
```

---

## Pre-implementation checklist

**Før du begynner på en ny feature:**

- [ ] Er feature-spec skrevet? (docs/features/X.md)
- [ ] Er datamodell dokumentert? (.agent/DATABASE.md)
- [ ] Er det konflikter med eksisterende kode?
- [ ] Har du lest relevante skills? (.agent/skills/)
- [ ] Er dev-server kjørende? (`npm run dev`)

---

## During implementation checklist

**Mens du koder:**

- [ ] Følger du skills/components.md?
- [ ] Følger du skills/api.md?
- [ ] Bruker du riktige Tailwind-klasser? (skills/design.md)
- [ ] Er TypeScript-feil fikset underveis?
- [ ] Tester du i browser etter hver større endring?

---

## Pre-commit checklist

**Før du committer:**

### TypeScript
- [ ] `npm run build` går gjennom uten feil
- [ ] Ingen TypeScript-advarsler i VS Code

### Browser
- [ ] Ingen røde feil i konsollen
- [ ] Feature fungerer som forventet
- [ ] Test både desktop og mobil
- [ ] Test både admin og montør (hvis relevant)

### Data integrity
- [ ] Database-endringer er trygt reversible
- [ ] Eksisterende data påvirkes ikke negativt
- [ ] Foreign keys håndtert korrekt

### Code quality
- [ ] Ingen hardkodede verdier (bruk env-variabler)
- [ ] Ingen duplisert kode (refaktorer til funksjoner)
- [ ] Kommentarer der kode er uklart

---

## Unngå vanlige feil

### 1. Schema-endringer uten regenerering
**Problem:** Database endret, men TypeScript kjenner ikke nye felter.

**Løsning:**
```bash
npx prisma db push
npx prisma generate  # <-- Alltid!
```

### 2. Client/Server mismatch
**Problem:** "use client" mangler, men bruker useState.

**Løsning:** Les skills/components.md, sjekk client vs. server.

### 3. Foreign key constraints
**Problem:** Kan ikke slette fordi relasjon finnes.

**Løsning:** Les skills/database.md, bruk `onDelete: Cascade` eller håndter manuelt.

### 4. Hardkodet data
**Problem:** Admin-ID, URLs, API-nøkler i kode.

**Løsning:** Bruk environment variables (.env).

### 5. Manglende error handling
**Problem:** API krasjer uten feilmelding.

**Løsning:** Bruk try-catch, returnér meningsfulle statuskoder.

---

## Feature-flags for beta-testing

Når du implementerer ny, usikker funksjonalitet:

```typescript
// I komponent
const { data: session } = useSession();
const isBetaTester = session?.user?.isBetaTester;

return (
    <>
        {/* Eksisterende, stabil feature */}
        <OldFeature />
        
        {/* Ny feature, kun for beta-testere */}
        {isBetaTester && <NewExperimentalFeature />}
    </>
);
```

Dette lar deg deploye uten å ødelegge for andre brukere.

---

## Code review (selvsjekk)

**Før push, still deg selv:**

1. Ville jeg forstått denne koden om 6 måneder?
2. Er variabel/funksjonsnavn beskrivende?
3. Er logikken enkel å følge?
4. Har jeg testet feil-cases (tom input, ugyldig data)?
5. Er koden konsistent med resten av prosjektet?

---

## Når ting går galt

### TypeScript-feil
1. Les feilmeldingen nøye
2. Sjekk at Prisma client er oppdatert (`npx prisma generate`)
3. Se skills/components.md eller skills/api.md

### Runtime-feil
1. Åpne browser DevTools (F12)
2. Se Console og Network-fanen
3. Isoler problemet (kommenter ut kode til det fungerer)

### Database-feil
1. Sjekk Prisma Studio (`npx prisma studio`)
2. Verifiser relasjoner
3. Se skills/database.md

---

## Eksempel: Implementering av ny feature

**Feature:** Kunde-oppdateringer (customer-updates.md)

### Steg 1: Planlegging
- [x] Les docs/features/customer-updates.md
- [x] Identifiser påvirkede filer:
  - `prisma/schema.prisma` (FormUpdate tabell)
  - `src/app/api/forms/public/[token]/route.ts` (API)
  - `src/app/form/[token]/page.tsx` (kunde-UI)
  - `src/components/admin/DashboardContent.tsx` (varsler)

### Steg 2: Database
```bash
# Legg til FormUpdate i schema.prisma
npx prisma db push
npx prisma generate
# Test i Prisma Studio
```

### Steg 3: Backend
- Opprett `PATCH /api/forms/public/[token]`
- Test med cURL:
  ```bash
  curl -X PATCH http://localhost:3000/api/forms/public/abc123 \
    -H "Content-Type: application/json" \
    -d '{"additionalNotes": "Ny kommentar"}'
  ```

### Steg 4: Frontend
- Lag komponent for "Legg til kommentar"
- Koble til API
- Legg til varsling i admin-dashboard

### Steg 5: Verifiser
- Test som kunde: Legg til kommentar
- Test som admin: Se varsel
- Mobil + desktop
- Ingen konsoll-feil

### Steg 6: Commit
```bash
git add .
git commit -m "feat: enable customer updates after form submission"
git push
```

---

## Verktøy for kvalitetssikring

### Lokal utvikling
```bash
# Always running
npm run dev

# Database inspection
npx prisma studio

# Type checking
npm run build
```

### Browser-testing
- Chrome DevTools (F12)
- Responsive mode (Ctrl+Shift+M)
- Lighthouse audit (Performance/Accessibility)

---

## Team-koordinering

Hvis flere utviklere:
1. **Pull før du starter:** `git pull origin main`
2. **Feature branches:** `git checkout -b feature/customer-updates`
3. **Små commits:** Commit ofte, push daglig
4. **Kommuniser:** Si fra hvis du endrer felles filer

---

## Neste: Start implementering

Når dokumentasjonen er klar:
1. Les feature-spec grundig
2. Følg denne workflow-guiden
3. Huk av i task.md underveis
4. Test før push

**Regel #1:** Når i tvil, sjekk dokumentasjonen først.
