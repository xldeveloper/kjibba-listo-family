# Workspace: listo.family (Multi-Project)

> **Aktive prosjekter:** React Native App + API + Functions + Landing Page + MCP server
>
> **VIKTIG (global regel):** Hver eneste respons skal starte med å vurdere om (og hvilke) MCP-servere som trengs. Hvis ja: bruk dem. Hvis nei: forklar hvorfor.
> **MCP er obligatorisk** for oppgaver som innebærer analyse eller endring i repoet.

---

## 🎯 Kilde for sannhet (Codebase Guide + Revision)

**Denne workspace’n styres av to “master” dokumentfamilier, og begge er splittet i /docs:**

- **CODEBASE GUIDE (oppslagsverk):**
   - Master: `NyeListo/CODEBASE_GUIDE.md`
   - Split: `NyeListo/docs/guides/README.md` (og 01-09)
- **CODEBASE REVISION (batch-plan):**
   - Master: `NyeListo/CODEBASE_REVISION.md`
   - Split: `NyeListo/docs/revision/README.md` (og batch-0…batch-8)

**Regel:** Når du jobber på noe som inngår i revisjonen, skal du alltid:
1) Identifisere *hvilken batch* (batch-fil i `NyeListo/docs/revision/`) og *hvilken guide* (guide-fil i `NyeListo/docs/guides/`) som er relevant.
2) Implementere i kode.
3) Oppdatere batch-/guide-dokumentasjon når det er en del av leveransen.

---

## ⛔ Før du bruker tools (obligatorisk workflow)

**Triggerord (starter alltid denne sjekklista):**
`implement`, `add`, `fix`, `create`, `update`, `refactor`, `change`, `build`, `lag`, `fiks`, `endre`

### 📋 PRE-WORK CHECKLIST (Revision-ready)

#### Steg 1: Les relevante skills (minst 2)
Les fra `.github/skills/*/SKILL.md` basert på oppgaven.

Vanlige kombinasjoner:
- Plan + orkestrering: `plan-writing`, `development-workflow`
- Feilsøk: `systematic-debugging`, `lint-and-validate`
- Kodeendringer: `clean-code`, `code-reviewer`
- Arkitekturvalg: `architecture`

#### Steg 2: Forankre i docs (batch + guide)
- Finn riktig batch i `NyeListo/docs/revision/`.
- Finn riktig guide i `NyeListo/docs/guides/`.
- Hvis det *ikke* passer i eksisterende batch: logg det som “out-of-scope” og spør om ny batch/avvik.

#### Steg 3: Sjekk om mønster/implementasjon finnes (MCP Listo Codebase)
Bruk alltid minst én av disse før du koder:
- `mcp_listo-codebas_find_similar_code(searchTerm, type)`
- `mcp_listo-codebas_find_usages(symbolName)`

#### Steg 4: Kartlegg påvirkede filer før refaktor
Velg relevante:
- `mcp_listo-codebas_get_file_dependencies(filePath)`
- `mcp_listo-codebas_get_service_methods(serviceName)`
- `mcp_listo-codebas_get_component_props(componentName)`
- `mcp_listo-codebas_list_types(filter)`

#### Steg 5: Eksterne biblioteker? Bruk Context7
Hvis du må slå opp API/beste praksis:
- `mcp_io_github_ups_resolve-library-id(libraryName)`
- `mcp_io_github_ups_get-library-docs(context7CompatibleLibraryID, topic, mode)`

#### Steg 6: Plan og synlighet
- Bruk `manage_todo_list` for større arbeid.
- Fortell tydelig: “Files to update” + “Hvordan verifiseres det”.

---

## 🧭 Prosjekt-router (hvilke regler gjelder hvor?)

### 🌐 Landing Page (`Listo.family landing page/`)
- **Framework:** Next.js 14 App Router, TypeScript, Tailwind
- **Språk:** kun norsk (Bokmål)
- **Kilde:** `NyeListo/docs/guides/05-landing-page.md` + `Listo.family landing page/docs/`

**Ikke-forhandlebart:**
- Alt innhold på norsk (Bokmål)
- `lang="nb"` i HTML
- SEO metadata per side

### 📱 React Native App (`NyeListo/listo-app/`)
(Relevant når landingssider peker inn i app-flows.)
- **Kilde:** `NyeListo/docs/guides/02-react-native-app.md`

---

## 🧱 Codebase Revision Mode (slik vi får maks ut av revisjonen)

### 1) Batch-first levering
- Alt større arbeid skal “bo” i én batch-fil i `NyeListo/docs/revision/`.
- Ikke gjør side-quests. Hvis du oppdager relaterte forbedringer: samle dem og foreslå “følger opp i Batch X / ny batch”.

### 2) Evidence over antakelser
- Før refaktor: finn liknende kode + usages med MCP.
- Når du endrer API/signaturer: finn og oppdater alle usages i én runde.

### 3) Definisjon av ferdig (DoD)
Minimum per leveranse:
- Kodeendring(er) + relevant docs oppdatert (batch/guide/changelog/bugs) når det er del av oppgaven
- `get_errors()` etter hver filendring

---

## 🚫 Git & deploy

- Spør alltid før `git push` til `main` (auto-deploy)
- Bruk feature-branch for større arbeid

---

## 📚 MCP-verktøy (hva er faktisk tilgjengelig)

**Listo Codebase MCP (tilgjengelig her):**
- `mcp_listo-codebas_find_similar_code`
- `mcp_listo-codebas_find_usages`
- `mcp_listo-codebas_get_service_methods`
- `mcp_listo-codebas_get_component_props`
- `mcp_listo-codebas_list_types`
- `mcp_listo-codebas_get_file_dependencies`
- `mcp_listo-codebas_find_hardcoded_text`
- `mcp_listo-codebas_check_translations`
- `mcp_listo-codebas_check_web_compatibility`
- `mcp_listo-codebas_find_layout_issues`
- `mcp_listo-codebas_get_changelog_status`
- `mcp_listo-codebas_analyze_code_metrics`
- `mcp_listo-codebas_analyze_large_files`
- `mcp_listo-codebas_analyze_duplicate_code`
- `mcp_listo-codebas_analyze_import_graph`
- `mcp_listo-codebas_estimate_complexity`

**Merk:** Hvis et dokument refererer til MCP-funksjoner som ikke finnes, skal du bruke nærmeste tilgjengelige alternativ (typisk `find_similar_code` + `find_usages`).

