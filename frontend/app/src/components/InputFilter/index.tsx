import React, { ComponentProps } from 'react'
import { Box, defaultTheme, Input } from '@citric/core'
import { SxProp } from '@citric/core/dist/component-style'
import { Filter } from '@citric/icons'

const styles: Record<string, SxProp | Record<string, SxProp>> = {
  wrapper: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: '11.68px',
    left: '11.2px',
    fill: defaultTheme.colorScheme.light['700']
  },
  input: {
    paddingLeft: '32px',
    '&:focus': {
      paddingLeft: '32.8px'
    }
  }
}

const InputFilter = (props: ComponentProps<typeof Input>) => (
  <Box sx={styles.wrapper}>
    <Input sx={styles.input} {...props} type="search" />
    <Box as="span" sx={styles.icon}>
      <Filter />
    </Box>
  </Box>
)

export default InputFilter
