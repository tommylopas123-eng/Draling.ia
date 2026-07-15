# Skills de terceros — atribución y licencias

Estas skills fueron instaladas desde repositorios públicos de la comunidad.
Revisar la licencia de cada repo fuente antes de uso comercial.

| Skills | Repo fuente |
|--------|-------------|
| customer-research, competitor-profiling, copywriting, pricing, offers, cold-email, emails, prospecting, sales-enablement, marketing-plan, social, product-marketing | https://github.com/coreyhaines31/marketingskills |
| icp-builder, content-calendar, write-landing, competitor-analysis | https://github.com/OpenClaudia/openclaudia-skills |
| local-seo | https://github.com/kostja94/marketing-skills |

Revisadas el 2026-06-23: solo contienen instrucciones Markdown (sin scripts ejecutables).

## Skills de diseño (agregadas 2026-06-23)
| Skill | Repo fuente | Licencia |
|-------|-------------|----------|
| canvas-design (+ canvas-fonts) | https://github.com/anthropics/skills | Apache 2.0 |

canvas-design: solo metodología de diseño (Markdown) + fuentes tipográficas (.ttf). Sin scripts ejecutables.

## Skills de animación / motion (agregadas 2026-07-14)
| Skills | Repo fuente | Licencia |
|--------|-------------|----------|
| emil-design-eng, review-animations, improve-animations, animation-vocabulary, apple-design | https://github.com/emilkowalski/skills | MIT (© 2026 Emil Kowalski) |

Filosofía de animación y diseño de interfaces de Emil Kowalski (creador de Sonner
y Vaul, ex-Vercel/Linear). Solo instrucciones Markdown, sin scripts ejecutables.
Aplicadas a `betina-landing/`: curvas de easing custom, press feedback en botones,
stagger, hovers gated en touch, duraciones bajo 300ms.

## Skills de diseño / QA de UI (agregadas 2026-07-14)
| Skills | Repo fuente | Licencia |
|--------|-------------|----------|
| impeccable | https://github.com/pbakaus/impeccable | Apache-2.0 (Paul Bakaus) |
| taste-skill (design-taste-frontend) | https://github.com/Leonxlnx/taste-skill | MIT (© 2026 Leonxlnx) |

- **impeccable**: skill de diseño + detector de antipatrones de UI. ATENCIÓN: trae
  scripts ejecutables Node (`scripts/*.mjs`, `.js`) — el detector estático corre con
  solo builtins de Node; las funciones `live`/browser necesitan deps extra (Playwright)
  y no se instalaron. Se copió solo la skill (~2.4 MB), NO el `site/` de 84 MB.
  Usada para auditar `betina-landing/`: resuelto el tell de em-dashes; Fraunces y el
  Proceso 01/02/03 se marcaron como decisiones deliberadas con `impeccable-disable`.
- **taste-skill**: guía "anti-slop" para landings/portfolios (Markdown, sin scripts).
