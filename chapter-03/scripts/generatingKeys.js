import { bytesToHex } from '@noble/hashes/utils'
import { generateSecretKey, getPublicKey } from 'nostr-tools/pure'

// gerar as chaves aleatoriamente
const privateKey = generateSecretKey()
const publicKey = getPublicKey(privateKey)

console.log('Chave privada:', bytesToHex(privateKey))
console.log('Chave pública:', publicKey)
