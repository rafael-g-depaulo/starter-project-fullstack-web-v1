import useSWR from 'swr'
import { strapi } from "Api"

export interface PersonExample {
  name: string,
  age: number,
}

export const fetchPersonExample = (id: number) => strapi
  .get<PersonExample>(`/people-examples/${id}`)
  .then(({ data }) => data)
  .then(({ name, age }) => ({ name, age }))

export const usePersonExample = (id: number) => {
  const { data, error, isValidating } = useSWR(`/people-example/${id}`, () => fetchPersonExample(id))

  return {
    error,
    data,
    isLoading: isValidating || (!data && !error),
  }
}

export const fetchPeopleExample = () => strapi
  .get<PersonExample[]>(`/people-examples`)
  .then(({ data }) => data)
  .then(people => people
    .map(({ name, age }) => ({ name, age }))
  )

export const usePeopleExample = () => {
  const { data, error, isValidating } = useSWR(`/people-example`, () => fetchPeopleExample())

  return {
    error,
    data,
    isLoading: isValidating || (!data && !error),
  }
}