---
name: norwegian-api-integrations
description: Integration with Norwegian public and private APIs to automate data entry and validation.
---

# Norwegian API Integrations

Reduce "clicks" by prepopulating data using Norwegian services.

## Critical Lookups

### 1. Address Lookup (Kartverket / SSR / Posten)
- **Goal:** Pre-populate municipality, zip code, and house type.
- **API:** [Kartverket API](https://www.kartverket.no/api-og-data) or [Bring/Posten Postnummer](https://developer.bring.com/api/postnummer/).

### 2. Business Lookup (Brønnøysundregistrene)
- **Goal:** Get company info for B2B customers using Organization Number.
- **API:** [Enhetsregisteret Open Data](https://data.brreg.no/enhetsregisteret/api).

### 3. Weather & Climate (Yr.no / MET)
- **Goal:** Inform the technician about outdoor conditions (snow, temperature) before driving out.
- **API:** [MET Norway Meteorologisk Institutt](https://api.met.no/).

## Data Mapping (Norwegian Standards)
Ensure the database fields map correctly to these public schemas:
- `Poststed` -> `Postal Area`
- `Knr` (Kommune nummer) -> `Municipality Number`
- `Gnr/Bnr` (Gårdsnummer/Bruksnummer) -> Unique property ID for real estate validation.

## Implementation Pattern
- Create a `lib/external` directory for API wrappers.
- Implement rate-limiting and local caching (Redis/Prisma) to avoid hitting public API limits.
- Use Norwegian labels in the UI while keeping English keys in the API response objects.
