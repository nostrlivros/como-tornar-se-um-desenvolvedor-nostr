import { Relay } from 'nostr-tools/relay'
import { generateSecretKey, finalizeEvent } from 'nostr-tools/pure'

// conecta ao relay
const relay = new Relay('wss://relay.damus.io')
await relay.connect()

const privateKey = generateSecretKey()

const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "Olá, mundo Nostr!",
}, privateKey)

// publica o evento
await relay.publish(event)

console.log('Evento publicado!', event)

// fecha a conexão para terminar o script
relay.close()
