import type { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

type ButtonProps = {
  color: string
  backgroundColor: string
}

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const H1 = styled.h1`
  color: red;
`

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const Text = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[5]};
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        ...
        <H1>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </H1>
        <Badge>Hello World!</Badge>
        <Button backgroundColor='transparent' color='#FF0000'>
          Hello
        </Button>
        <Button backgroundColor='#1E90FF' color='white'>
          World
        </Button>
        <StyledLink href='https://google.com'>Index</StyledLink>
        <Text>Themeから参照した色を使用</Text>
      </main>
    </div>
  )
}

export default Home
