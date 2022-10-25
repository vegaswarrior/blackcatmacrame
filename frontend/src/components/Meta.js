import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Black Cat Macrame',
  description: 'Hand Craftred Micro Macrame',
  keywords: 'Macrame, Micro Macrame, Wall Art, Custom Hand Made',
}

export default Meta
