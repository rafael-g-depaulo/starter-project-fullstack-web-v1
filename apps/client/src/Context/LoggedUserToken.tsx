import { FC, createContext, useMemo, useContext } from "react"

import useLocalStorage from 'Hooks/useLocalStorage'

type notLoggedIn = {
  setToken: (t?: string) => void
  token: undefined
  isLoggedIn: false
}

type loggedIn = {
  setToken: (t?: string) => void
  token: string
  isLoggedIn: true
}
export type CurrentUserToken = notLoggedIn | loggedIn

export const CurrentUserTokenContext = createContext<CurrentUserToken>({} as CurrentUserToken)
export const useCurrentUserToken = () => useContext(CurrentUserTokenContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ token, setToken ] = useLocalStorage<string | undefined>('token', undefined)

  const currentUserValue = useMemo<CurrentUserToken>(() => {
    return ({
      token,
      setToken,
      isLoggedIn: !!token,
    } as CurrentUserToken)
  }, [token, setToken])

  // if (process.env.NODE_ENV === 'development') console.log("user context.", currentUserValue)

  return (
    <CurrentUserTokenContext.Provider value={currentUserValue}>
      { !token ? children :
        <UserUpdateChecker token={token}>
          {children}
        </UserUpdateChecker>
      }
    </CurrentUserTokenContext.Provider>
  )
}

export const UserUpdateChecker: FC<{ token: string }> = ({ token: _contextToken, children }) => {
  // // call API
  // const currentlyLoggedUser = useCurrentUser(contextToken)
  // const { setToken } = useCurrentUserToken()

  // if (currentlyLoggedUser.error?.response?.data.code === 401) {
  //   // console.log("user unlogged. removing token")
  //   setToken(undefined)
  // } 

  return (<>{children}</>)
}
