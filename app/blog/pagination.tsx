'use client'
import usePagination from '@lucasmogari/react-pagination'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { memo, PropsWithChildren, ReactNode } from 'react'
// import { headers } from "next/headers";
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

type Props = {
  page: number
  itemCount: number
  perPage: number
}

const Pagination = ({ page, itemCount, perPage }: Props) => {
  // use the usePagination hook
  // getPageItem - function that returns the type of page based on the index.
  // size - the number of pages

  const { getPageItem, totalPages } = usePagination({
    totalItems: itemCount,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 5,
  })

  const firstPage = 1
  // calculate the next page
  const nextPage = Math.min(page + 1, totalPages)
  // calculate the previous page
  const prevPage = Math.max(page - 1, firstPage)
  // create a new array based on the total pages
  const arr = new Array(totalPages)

  return (
    <div className="flex items-center justify-center gap-2">
      {[...arr].map((_, i) => {
        // getPageItem function returns the type of page based on the index.
        // it also automatically calculates if the page is disabled.
        const { page, disabled, current } = getPageItem(i)

        if (page === 'previous') {
          return (
            <PaginationLink page={prevPage} disabled={disabled} key={page}>
              {`<`}
            </PaginationLink>
          )
        }

        if (page === 'gap') {
          return (
            <span className="text-pinkText" key={`${page}-${i}`}>
              ...
            </span>
          )
        }

        if (page === 'next') {
          return (
            <PaginationLink page={nextPage} disabled={disabled} key={page}>
              {`>`}
            </PaginationLink>
          )
        }

        return (
          <PaginationLink active={current} key={page} page={page!}>
            {page}
          </PaginationLink>
        )
      })}
    </div>
  )
}

type PaginationLinkProps = {
  page?: number | string
  active?: boolean
  disabled?: boolean
} & PropsWithChildren

function PaginationLink({ page, children, ...props }: PaginationLinkProps) {
  const router = useRouter()
  // const headersList = headers();
  // const activePath = headersList.get("x-invoke-path");
  // console.log(activePath)
  const searchParams = useSearchParams()
  const query = searchParams.get('page')?.toString()

  // we use existing data from router query, we just modify the page.
  const q = { query, page }
  return (
    <Link
      // only use the query for the url, it will only modify the query, won't modify the route.
      href={{ query: q }}
      // toggle the appropriate classes based on active, disabled states.
      className={cn({
        'p-2': true,
        'font-bold text-blackText': props.active,
        'text-blackText': !props.active,
        'pointer-events-none text-gray-200': props.disabled,
      })}
    >
      {children}
    </Link>
  )
}
export default memo(Pagination)
