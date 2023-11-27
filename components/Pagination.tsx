'use client'
import Link from 'next/link'
import '../css/pagination.css'

const Pagination = ({ items, pageSize, currentPage }) => {
  const pagesCount = Math.ceil(items / pageSize) // 100/10

  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <div>
      <ul className="paginationList">
        <li key={'previous'} className={'pageItem text-greyText'}>
          <Link href={`blog?page=${currentPage - 1}`} scroll={false}>{'<'}</Link>
        </li>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? 'pageItemActive text-blackText text-pinkText' : 'pageItem text-greyText'}>
            <Link href={`blog?page=${page}`} scroll={false}>{page}</Link>
          </li>
        ))}
        <li key={'next'} className={'pageItem text-greyText'}>
          <Link href={`blog?page=${currentPage + 1}`} scroll={false}>{'>'}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
