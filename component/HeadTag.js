import Head from 'next/head'

const HeadTag = ({title}) => {
  return (
<Head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>{title}</title>
</Head>
  )
}

export default HeadTag