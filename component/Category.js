import Link from 'next/link'
import React from 'react'

const Category = ({title,linkHref}) => {
  return (
    <div className="d-flex justify-content-between align-items-end mb-1 container text-white">
    <h3>{title}</h3>
    {!linkHref ? null : ( <Link href={`/${linkHref}`}><a className='text-decoration-none text-primary'>lihat semua...</a></Link>)}
   
  </div>
  )
}

export default Category