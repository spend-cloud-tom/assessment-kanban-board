import { createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const laneId = getRouterParam(event, 'laneId')!

  const { data, error } = await client.from('tickets').select('id, content, lane_id').eq('lane_id', laneId)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
