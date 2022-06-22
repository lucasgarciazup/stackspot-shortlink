import React from 'react'
import PageHeader from 'components/PageHeader'
import { Container } from '@citric/core/dist'
import ListLink from 'components/ListLink'
import FormLink from 'components/FormLink'

const Application: React.FC = () => {
  return (
    <>
      <PageHeader />
      <Container>
        <FormLink visibility="NEW" />
        <ListLink />
      </Container>
    </>
  )
}

export default Application
