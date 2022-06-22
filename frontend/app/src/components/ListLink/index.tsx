import React, { ChangeEvent, useCallback, useState } from 'react'
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
  Tr,
  usePagination
} from '@citric/core'
import InputFilter from 'components/InputFilter'
import ViewMore from 'components/ViewMore'
import FormEditModal from 'containers/FormEditModal'
import { Edit, Trash } from '@citric/icons/dist'

const listItems = [
  {
    short: 'javascript',
    url: 'google.com.br'
  },
  {
    short: 'typescript',
    url: 'google.com.br'
  },
  {
    short: 'java',
    url: 'google.com.br'
  },
  {
    short: 'cloud',
    url: 'google.com.br'
  },
  {
    short: 'aws',
    url: 'google.com.br'
  },
  {
    short: 'charp',
    url: 'google.com.br'
  }
]

const ListLink: React.FC = () => {
  const [dataShow, setDataShow] = useState(listItems)
  const { data, canViewMore, viewMore } = usePagination({
    data: dataShow,
    initialState: 1,
    contentPerPage: 4
  })
  const [openModal, setOpenModal] = useState(null)
  const debouncedChangeHandler = useCallback((term: string) => {
    setDataShow(
      listItems.filter((el) =>
        el.short.toLowerCase().includes(term.toLowerCase())
      )
    )
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
                  <Th sx={{ width: '12%', textAlign: 'center' }}>Ação</Th>
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
                      <Button
                        colorScheme="warning"
                        onClick={() => setOpenModal(el)}
                      >
                        <Edit />
                      </Button>
                      <Button
                        colorScheme="danger"
                        onClick={() => alert(`deletar ${el.short}`)}
                      >
                        <Trash />
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

      <ViewMore canViewMore={canViewMore} viewMore={viewMore} />
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
