import { finalizeEvent } from 'nostr-tools/pure'
import { generateSecretKey } from 'nostr-tools/pure'

const privateKey = generateSecretKey()

// finalizeEvent faz a maior parte do trabalho incluindo a chave pública, id e a assinatura
const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "Olá, mundo Nostr!",
}, privateKey)

console.log('Evento:', event)
