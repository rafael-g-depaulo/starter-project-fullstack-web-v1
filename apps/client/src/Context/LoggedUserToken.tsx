import { FC, createContext, useMemo, useContext } from "react"

import useLocalStorage from 'Hooks/useLocalStorage'

type notLoggedIn = {
  setToken: (t: string | undefined) => void
  token: undefined
  isLoggedIn: false
}

type loggedIn = {
  setToken: (t: string | undefined) => void
  token: string
  isLoggedIn: true
}

export type CurrentUser = notLoggedIn | loggedIn

export const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser)
export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ token, setToken ] = useLocalStorage<string | undefined>('token', undefined)

  const currentUserValue = useMemo<CurrentUser>(() => ({
      token,
      setToken,
      isLoggedIn: !!token,
    }) as CurrentUser
    , [token, setToken])

  // if (process.env.NODE_ENV === 'development') console.log("user context.", currentUserValue)

  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
