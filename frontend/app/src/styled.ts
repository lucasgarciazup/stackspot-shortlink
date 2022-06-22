import styled from 'styled-components'

const Container = styled.div`
  font-family: sans-serif;
  overflow-y: auto;
  margin-top: 72px;
  padding: 0 20px;
`

const Title = styled.h1`
  font-size: 1.8rem;
  color: #000000;
`

const Subtitle = styled.h2`
  font-size: 1.6rem;
  color: #404659;

  margin-bottom: 20px;
`

const Navigation = styled.nav`
  display: flex;
  gap: 7px;
  margin-bottom: 15px;
  padding-top: 25px;

  a {
    text-decoration: none;
    color: #000000;

    &.active {
      font-weight: bold;
      border-bottom: 2px solid #ff6d00;
    }
  }
`

const Content = styled.div`
  display: block;
  width: 100%;

  a {
    text-decoration: none;
    color: #ff6d00;
    margin-left: 4px;
  }
`

export default {
  Container,
  Title,
  Subtitle,
  Navigation,
  Content
}
