import type { RealtimeChannel } from '@supabase/supabase-js'

export default async function (key: string, table: string, callback: () => Promise<any>) {
  const client = useSupabaseClient()
  const instance = getCurrentInstance()

  let realtimeChannel: RealtimeChannel

  const { data, refresh } = await useAsyncData(key, callback)

  onMounted(() => {
    realtimeChannel = client
      .channel(`public:${key}`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => refresh())

    realtimeChannel.subscribe()
  }, instance)

  onUnmounted(() => {
    client.removeChannel(realtimeChannel)
  }, instance)

  return { data }
}
