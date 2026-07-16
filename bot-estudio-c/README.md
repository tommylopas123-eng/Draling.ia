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

### 5. Verificar el token en el nodo "Chequear token"
El flujo ya trae resuelta la verificación GET que pide Meta (ver "Arquitectura" abajo).
Abrí el nodo **Chequear token** y confirmá/cambiá esta línea:
```
const VERIFY_TOKEN = 'estudioc123';
```
Podés dejar `estudioc123` o poner otra palabra — lo único importante es que sea
**exactamente la misma** que vas a escribir en Meta en el paso 6.

### 6. Conectar el webhook en Meta
En la app de Meta → WhatsApp → **Configuration → Webhook**:
- **Callback URL:** la misma Production URL para los dos casos — copiala del nodo
  **Webhook WhatsApp** (la del POST) o de **Verificación Webhook (GET)`; ambas
  comparten la ruta `/estudio-c`, así que es la misma URL.
- **Verify token:** el mismo valor que pusiste en `VERIFY_TOKEN` (paso 5).
- Click en **Verify and save** → Meta va a mandar el `GET` de verificación,
  el flujo lo responde solo con el nodo **Responder OK**.
- Suscribirse al campo **`messages`**.

### 7. Probar
Escribir "hola" al número de WhatsApp de prueba → debería aparecer el menú.

---

## Arquitectura (actualizada)

El flujo tiene **dos webhooks en la misma ruta** `/estudio-c`, uno por método HTTP
(así trabaja Meta: primero valida con `GET`, después manda los mensajes por `POST`):

```
GET  /estudio-c → Verificación Webhook (GET) → Chequear token → ¿Token válido? → Responder OK / Responder Forbidden
POST /estudio-c → Webhook WhatsApp → Router → Enviar respuesta (+ Avisar al equipo si corresponde)
```

- **`estudio-c-whatsapp-bot.json`** — el flujo de n8n listo para importar (10 nodos).
- Todo el texto de las respuestas está dentro del nodo **Router** (fácil de editar).
- Si volvés a importar el archivo sobre el workflow que ya tenías en n8n, revisá que
  no queden dos webhooks duplicados en la misma ruta — mejor borrar el workflow viejo
  e importar este de nuevo entero.

---

## Pendiente
- [ ] Completar los textos de cada opción con la info real del estudio (marcados `[COMPLETAR]`).
- [ ] Afinar el tono con los chats reales de la dueña (ver Task de análisis de tono).
- [ ] Rama "Agendar": v1 avisa al equipo; a futuro se puede sumar Google Calendar.
