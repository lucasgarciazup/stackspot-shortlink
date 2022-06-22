import React from 'react'
import PageHeader from 'components/PageHeader'
import { Container } from '@citric/core'
import ListLink from 'components/ListLink'
import FormLink from 'components/FormLink'

const Application: React.FC = () => {
  return (
    <>
      <PageHeader />
      <Container sx={{ mb: 10 }}>
        <FormLink visibility="NEW" />
        <ListLink />
      </Container>
    </>
  )
}

export default Application
