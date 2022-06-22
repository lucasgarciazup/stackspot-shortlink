import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Flex,
  FormHelper,
  FormItem,
  Input,
  Text
} from '@citric/core/dist'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Visibility } from 'src/types/visibility'

type FormValues = {
  id: string
  short: string
  url: string
}

interface Props {
  visibility: Visibility
  modal?: () => void
  values?: FormValues
}
const FormLink: React.FC<Props> = ({ visibility, values, modal }) => {
  const schema = yup
    .object({
      short: yup.string().required('Campo obrigatório'),
      url: yup
        .string()
        .url('o campo deve ser uma URL válida')
        .required('Campo obrigatório')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: values
  })

  const settings = {
    NEW: {
      title: 'Adicionar novo shortlink',
      button: 'Adicionar'
    },
    EDIT: {
      title: 'Editar shortlink',
      button: 'Salvar'
    }
  }[visibility]

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      <Card>
        <CardHeader>
          <Text appearance="h3">{settings.title}</Text>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} id="form-shortlink">
            <Flex flexDirection="column">
              <FormItem>
                <Input {...register('short')} placeholder="Short link" />
                <FormHelper colorScheme="danger">
                  {errors.short?.message}
                </FormHelper>
              </FormItem>
              <FormItem>
                <Input
                  {...register('url')}
                  placeholder="exemplo: https://docs.stackspot.com/latest/docs"
                />
                <FormHelper colorScheme="danger">
                  {errors.url?.message}
                </FormHelper>
              </FormItem>
            </Flex>
          </form>
        </CardContent>
        <CardFooter>
          {modal && (
            <Button colorScheme="light" onClick={modal}>
              Cancelar
            </Button>
          )}
          <Button color="primary" form="form-shortlink">
            {settings.button}
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default FormLink
