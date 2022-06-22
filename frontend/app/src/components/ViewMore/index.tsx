import { Flex, IconButton, Text } from '@citric/core'
import { ChevronDown } from '@citric/icons'
import React from 'react'

// import { Container } from './styles';
interface Props {
  canViewMore: boolean
  viewMore: (index: number) => void
}

const ViewMore: React.FC<Props> = ({ canViewMore, viewMore }) => {
  if (!canViewMore) return null
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      sx={{
        p: '10px',
        height: '40px',
        mt: 5,
        mb: 10,
        cursor: canViewMore ? 'pointer' : 'not-allowed'
      }}
      onClick={() => viewMore(2)}
    >
      <Text appearance="body1">Ver mais</Text>
      <IconButton disabled={!canViewMore} sx={{ mx: '4px' }}>
        <ChevronDown />
      </IconButton>
    </Flex>
  )
}

export default ViewMore
