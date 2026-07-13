# Draling — Guía para Claude

## Contexto
- Este es el **repositorio central de Draling**: empresa de automatización con IA
  para pymes y startups argentinas.
- Visión: `VISION.md` (fuente de verdad). Estrategia en dos fases:
  **Fase 1 (ahora)** = servicio/agencia de automatización; **Fase 2** = plataforma todo-en-uno.
- Estado y pendientes: `PLAN.md` (mantenerlo actualizado, marcar `[x]` lo completado).
- Contexto de marketing para las skills: `.agents/product-marketing.md`.
- El proyecto anterior (Betina Potap – Alimentos Naturales, primer cliente/caso
  de éxito) vive en el repo `tommylopas123-eng/draling`.

## Idioma
- Responder siempre en **español** (el usuario es de Argentina, voseo).

## Uso proactivo de skills (IMPORTANTE)
- Hay skills instaladas en `.claude/skills/` (marketing, ventas B2B, landing,
  competencia, precios, redes, etc.). Ver `.claude/skills/ATTRIBUTION.md`.
- **Cada vez que una tarea coincida con una skill instalada, usarla automáticamente
  sin que el usuario lo pida**, mencionando brevemente cuál se usa.

## Formato de entrega al usuario (IMPORTANTE)
- El usuario **no tiene Excel ni lee archivos .md/.docx** cómodamente.
- **Documentos/material → entregar siempre en PDF** (usar `SendUserFile`).
- **Datos/planillas → subir a Google Sheets** (Google Drive MCP: subir el CSV con
  `contentMimeType: text/csv`) y pasar el link.
- Los `.md` y `.csv` del repo son la fuente; lo que se le manda al usuario va
  en PDF / Google Sheets. Carpeta de Drive de la empresa: "Draling".

## Datos fijos
- WhatsApp del negocio: **+54 9 11 2614-6803** (ya configurado en `landing/index.html`).
- Instagram: creado. TikTok y página de LinkedIn: pendientes (bios en `PLAN-REDES.md` §2).
- Demo del bot publicada: https://claude.ai/code/artifact/4844a5db-74ba-416d-baff-58af3f6803dc

## Flujo de trabajo
- El usuario está aprendiendo a automatizar con la ruta de `APRENDER-AUTOMATIZACION.md`
  (Make → n8n → IA → WhatsApp Cloud API). Ayudarlo paso a paso cuando lo pida.
- Mantener `PLAN.md` al día y **commitear y pushear** los cambios a la rama `main`.
