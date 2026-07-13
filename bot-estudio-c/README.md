# Bot de WhatsApp — Estudio-C

Bot de atención automática para el estudio de la mamá (cliente #2 de Draling).
Cuando alguien escribe, el bot saluda y ofrece un menú:

1. **Agendar una reunión** → pide nombre + día/horario y avisa al equipo.
2. **Más información** → submenú:
   - Cursos presenciales
   - Cursos e-learning
   - Asesoramiento
   - Plataformas
3. **Contactar con un asesor** → deriva a otro número de WhatsApp.

## Arquitectura

```
WhatsApp (cliente) → WhatsApp Cloud API (Meta) → Webhook n8n → Router → respuesta
```

- **`estudio-c-whatsapp-bot.json`** — el flujo de n8n listo para importar.
- Todo el texto de las respuestas está dentro del nodo **Router** (fácil de editar).

---

## Puesta en marcha (paso a paso)

### 1. Tener n8n corriendo
- **Opción rápida:** crear cuenta en [n8n.io](https://n8n.io) → *Cloud* (prueba gratis 14 días).
- **Opción gratis:** self-hosted (Railway / Render / Docker en una compu que quede prendida).

### 2. Importar el flujo
En n8n: menú **⋯ → Import from File** → elegir `estudio-c-whatsapp-bot.json`.

### 3. Completar la CONFIG
Abrir el nodo **Router** y editar (arriba de todo) estos 4 valores:
- `PHONE_NUMBER_ID` → lo da Meta (WhatsApp → API Setup).
- `TOKEN` → token de acceso de WhatsApp.
- `NUM_ASESOR` → WhatsApp del asesor (formato `549…`, sin `+` ni espacios).
- `NUM_EQUIPO` → WhatsApp donde llegan los avisos de reunión.

### 4. Activar y copiar la URL del webhook
- Activar el workflow (toggle arriba a la derecha).
- Abrir el nodo **Webhook WhatsApp** y copiar la **Production URL**.

### 5. Conectar el webhook en Meta
En la app de Meta → WhatsApp → **Configuration → Webhook**:
- **Callback URL:** la Production URL de n8n.
- **Verify token:** cualquier palabra que elijas (ej. `estudioc123`).
- Suscribirse al campo **`messages`**.

> ⚠️ **Verificación (GET):** Meta manda primero un `GET` con `hub.challenge` para
> validar la URL. El webhook de este flujo escucha `POST`. Para la verificación,
> la forma más simple es usar el **nodo "WhatsApp Trigger"** de n8n (maneja la
> verificación solo) **o** agregar un segundo webhook `GET` que responda el
> `hub.challenge`. Lo resolvemos juntos cuando tengas la cuenta de Meta lista.

### 6. Probar
Escribir "hola" al número de WhatsApp de prueba → debería aparecer el menú.

---

## Pendiente
- [ ] Completar los textos de cada opción con la info real del estudio (marcados `[COMPLETAR]`).
- [ ] Afinar el tono con los chats reales de la dueña (ver Task de análisis de tono).
- [ ] Resolver la verificación del webhook (GET) al conectar con Meta.
- [ ] Rama "Agendar": v1 avisa al equipo; a futuro se puede sumar Google Calendar.
