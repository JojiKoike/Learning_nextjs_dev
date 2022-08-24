import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページはSSGによってビルド時に生成されたページで</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ['1', '2', '3']
  const paths = arr.map((id) => {
    return {
      params: { id }
    }
  })
  return { paths, fallback: false }
}

interface PostProps extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const { id } = context.params as PostProps
  return {
    props: {
      id
    }
  }
}

export default Post
