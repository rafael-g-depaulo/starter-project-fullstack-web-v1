import { useRouteMatch } from "react-router-dom"

export const useUrl = () => {
  const { url } = useRouteMatch()
  return url.replace(/\/$/, "")
}

export default useUrl