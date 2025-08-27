const useUserStatus = (url: string | null = null) => {
  const redirectPath = useSupabaseCookieRedirect()
  const user = useSupabaseUser()
  if (url) {
    watch(
      user,
      (user) => {
        if (user) {
          const path = redirectPath.pluck()
          return navigateTo(path || '/')
        }
      },
      { immediate: true },
    )
  }

  return { user }
}

export default useUserStatus
