import { createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const boardId = getRouterParam(event, 'boardId')

  function getData() {
    const query = client.from('tickets').select('id, name')

    if (boardId) {
      query.eq('board_id', boardId)
    }

    return query
  }

  const { data, error } = await getData()

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
