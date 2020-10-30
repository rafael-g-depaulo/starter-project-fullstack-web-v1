import { strapi } from "Api"
import CreateApiHook from 'Utils/CreateApiHook'

export interface PersonExample {
  name: string,
  age: number,
}

export const fetchPersonExample = (id: number) => strapi
  .get<PersonExample>(`/people-examples/${id}`)
  .then(({ data }) => data)
  .then(({ name, age }) => ({ name, age }))

export const usePersonExample = (id: number) => CreateApiHook<PersonExample>(`/people-example/${id}`, () => fetchPersonExample(id))

export const fetchPeopleExample = () => strapi
  .get<PersonExample[]>(`/people-examples`)
  .then(({ data }) => data)
  .then(people => people
    .map(({ name, age }) => ({ name, age }))
  )

export const usePeopleExample = () =>  CreateApiHook<PersonExample[]>(`/people-example`, fetchPeopleExample)
