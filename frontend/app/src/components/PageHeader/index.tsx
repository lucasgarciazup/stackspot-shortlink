import React from 'react'
import {
  Avatar,
  Box,
  Container,
  Dropdown,
  DropdownItem,
  Flex,
  LinkBox,
  Text
} from '@citric/core'
import { MouseEvent, useState } from 'react'
import { SxProp } from '@citric/core/dist/component-style'
import { Menu, Times } from '@citric/icons'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const styles: Record<string, SxProp> = {
  header: {
    py: 5,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  headerWrapper: {
    height: '80px'
  },
  menu: {
    alignItems: 'center',
    'down(sm)': {
      py: 7,
      alignItems: 'unset',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginLeft: '-10px'
    }
  }
}

interface Props {
  bg?: SxProp['bg']
}

const PageHeader = ({ bg = 'light.400' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  return (
    <Box sx={styles.headerWrapper}>
      <Box sx={{ ...styles.header, bg }}>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Link to="/">
              <Logo />
            </Link>

            <LinkBox
              href="#"
              sx={{ display: ['none', 'none', 'block'] }}
              onClick={(event: MouseEvent<HTMLElement>) => {
                setIsOpen(!isOpen)
                event.preventDefault()
              }}
            >
              {isOpen ? <Times /> : <Menu />}
            </LinkBox>

            <Box
              sx={{
                ...styles.menu,
                display: ['flex', isOpen ? 'flex' : 'none']
              }}
            >
              <Box pl={5} mt={[0, 0, 5]} sx={{ position: 'relative' }}>
                <Avatar size="sm" onClick={() => setVisible(true)}>
                  Lucas
                </Avatar>
                <Dropdown
                  visible={visible}
                  sx={{
                    position: 'absolute',
                    width: '100px',
                    right: 0,
                    mt: '10px'
                  }}
                  onClose={() => setVisible(false)}
                >
                  <DropdownItem onClick={() => alert('logout')}>
                    <Text>Logout</Text>
                  </DropdownItem>
                </Dropdown>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default PageHeader
