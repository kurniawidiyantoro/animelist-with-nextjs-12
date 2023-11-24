import React from 'react'
import { Button } from 'reactstrap'

const Pagination = ({page, last, setPage}) => {

    const scrool = () => {
        scrollTo( {
            behavior:'smooth',
            top:0
        })
    }

    const handleNextPage = () => {
        setPage((prev) => prev + 1 )
        scrool()
    }

    const handlePrevPage = () => {
        setPage((prev) => prev - 1 )
        scrool()
    }
const handleLastPage = () => {
   setPage(last)
}

  return (
    <div className='d-flex justify-content-center align-content-center gap-3'>
        {page <= 1 ? null : <Button className='bg-warning text-black' onClick={handlePrevPage}>
            Prev
        </Button> }
        
        <h4 className='text-white'>{page} of {last}</h4>
        {page >= last ? null : <Button className='bg-warning text-black' onClick={handleNextPage}>
            Next
        </Button> }
     
    </div>
  )
}

export default Pagination