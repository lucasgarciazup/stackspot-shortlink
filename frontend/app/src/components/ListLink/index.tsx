import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@citric/core'
import InputFilter from 'components/InputFilter'
import FormEditModal from 'containers/FormEditModal'
import React, { ChangeEvent, useCallback, useState } from 'react'

const ListLink: React.FC = () => {
  const [data, setData] = useState(
    Array(10).fill({
      short: 'alksmd',
      url: 'google.com.br'
    })
  )
  const [openModal, setOpenModal] = useState(null)
  const debouncedChangeHandler = useCallback((term: string) => {
    console.log(term)
  }, [])

  return (
    <>
      <Card sx={{ mt: 5 }}>
        <CardHeader>
          <InputFilter
            placeholder="Filtrar shortlinks"
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              debouncedChangeHandler(target.value)
            }
          />
        </CardHeader>
        <CardContent>
          {data.length ? (
            <Table appearance="striped">
              <Thead>
                <Tr>
                  <Th>Shortlink</Th>
                  <Th>Url</Th>
                  <Th sx={{ width: '10%', textAlign: 'center' }}>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el, index) => (
                  <Tr key={index}>
                    <Td>{el?.short}</Td>
                    <Td>
                      <Link target="_blank" rel="noopener" href={el.url}>
                        {el?.url}
                      </Link>
                    </Td>
                    <Td>
                      <Button block onClick={() => setOpenModal(el)}>
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text align="center">Não foram encontrados resultados</Text>
          )}
        </CardContent>
      </Card>
      {!!openModal && (
        <FormEditModal
          onCloseModal={() => setOpenModal(null)}
          data={openModal}
        />
      )}
    </>
  )
}

export default ListLink
