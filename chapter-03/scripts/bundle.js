import { generateSecretKey, getPublicKey, finalizeEvent } from 'nostr-tools/pure'
import { Relay } from 'nostr-tools/relay'
import { bytesToHex, hexToBytes } from '@noble/hashes/utils'

const privateKey = generateSecretKey()
const publicKey = getPublicKey(privateKey)

console.log('Chave privada:', bytesToHex(privateKey))
console.log('Chave pública:', publicKey)

const event = finalizeEvent({
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "Olá, mundo Nostr!",
}, privateKey)

const relayUrl = 'wss://relay.damus.io'
const relay = new Relay(relayUrl)

await relay.connect()
await relay.publish(event)

console.log('Evento publicado!', event)
relay.close()
