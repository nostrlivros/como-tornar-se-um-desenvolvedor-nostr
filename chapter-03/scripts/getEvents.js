// Utilizando a classe SimplePool podemos nos conectar em mais de um relay
import { SimplePool } from 'nostr-tools'

const relays = ['wss://relay.damus.io']

const pool = new SimplePool()

const eventId = 'f97dad9d5382c7c80cad911ec9ae420d3a5235a0bbb03ffd7bc44bb3816ae3f9'

const event = await pool.get(relays, { ids: [eventId] })

if (event) {
  console.log('Evento encontrado:', event)
} else {
  console.log('Evento não encontrado nos relays fornecidos.')
}

// encerra a conexão com o relay manualmente
process.exit(0)
