import { Box, Button, Card, CardContent, Container, Text } from '@citric/core'
import { SxProp } from '@citric/core/dist/component-style'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import { Container } from './styles';
const styles: Record<string, Record<string, SxProp> | SxProp> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}
const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container sx={styles.container}>
      <Card>
        <CardContent>
          <Text appearance="h3" align="center" sx={{ mb: 10 }}>
            Stackspot ShortLink
          </Text>
          <Button color="primary" onClick={() => navigate('/app')}>
            AUTENTICAR COM CONTA LIVEPASS
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Login
