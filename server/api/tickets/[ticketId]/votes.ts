import { createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const ticketId = getRouterParam(event, 'ticketId')!

  const { data, error } = await client.from('votes')
    .select(`
      id,
      username
    `)
    .eq('ticket_id', ticketId)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
