import { SerializedUser, UserSignup } from "@starter-project/entities"

import { api, SuccessObject } from "Api"
import { useMutateApi } from "Hooks/useMutateApi"
import { extractApiData, throwApiError } from "Utils/handleApiResponse"

export const Signup = (userInfo: UserSignup) => api
  .post<SuccessObject<SerializedUser>>("/users/register", userInfo)
  .then<SerializedUser>(extractApiData)
  .catch(throwApiError)

export const useSignup = () => useMutateApi("/users/register", Signup)
