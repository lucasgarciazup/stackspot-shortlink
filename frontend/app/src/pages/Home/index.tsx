import { Text } from '@citric/core/dist'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Home: React.FC = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!params.id) {
      navigate('/404')
    }
  }, [params.id, navigate])

  return <Text>Carregando...</Text>
}

export default Home
