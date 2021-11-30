import { Asserts } from "yup"
import { TypedSchema } from "yup/lib/util/types"
import { MutateFunction } from "react-query"
import { useCallback } from "react"

type formikMutate<FormSchema extends TypedSchema, FormFields extends Asserts<FormSchema>, ReturnData>  = (info: FormFields) => Promise<ReturnData>
// ((values: FormFields, formikHelpers: FormikHelpers<FormFields>) => void | Promise<any>)

export const useFormikSubmit = <FormSchema extends TypedSchema, FormFields extends Asserts<FormSchema>, ReturnData, ReturnError> (mutateFn: MutateFunction<ReturnData, ReturnError, FormFields>) => useCallback<formikMutate<FormSchema, FormFields, ReturnData>>((mutateFn) as formikMutate<FormSchema, FormFields, ReturnData>, [mutateFn])