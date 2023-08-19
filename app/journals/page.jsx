import React from 'react'
import { Journals } from '@/constants'

const page = () => {
  return (
    <div className='px-20'>
      {
        Journals.map((journal) => {
            return (
                <div key={journal.ID} className='my-10'>
                    <h1>{journal.Title}</h1>
                    <p>{journal.Authors}</p>
                    <p>{journal.Journal}</p>
                    <a href={journal.DOI} className='text-red-600'>{journal.DOI}</a>
                </div>
            )
        })
      }
    </div>
  )
}

export default page
