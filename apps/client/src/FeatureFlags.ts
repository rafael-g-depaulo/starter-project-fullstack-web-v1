const UseEnvVar = (varName: string, defaultValue: boolean) => 
  process.env[varName] === "true" ? true :
  process.env[varName] === "false" ? false : defaultValue

export const showRoutes = UseEnvVar("REACT_APP_SHOW_ROUTES", true)

// export const showReactQueryDevtools = useEnvVar("REACT_APP_SHOW_RQUERY_DEVTOOLS", true)
