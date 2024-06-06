import { createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const boardId = getRouterParam(event, 'boardId')!

  const { data, error } = await client.from('lanes').select('id, name').eq('board_id', boardId)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
