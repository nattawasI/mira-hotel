type FacilitiesProps = {
  bedRooms: number | string
  bathRooms: number | string
  maxGuest: string
}
const facilities = ({ bedRooms, bathRooms, maxGuest }: FacilitiesProps): JSX.Element => {
  return (
    <div className="mt-1 flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        <span className="flex h-1.5 w-1.5 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.5 4.5C3.26625 4.5 2.25 5.51625 2.25 6.75V11.835C1.7925 12.249 1.5 12.8415 1.5 13.5V20.25H5.25V18.75H18.75V20.25H22.5V13.5C22.5 12.8415 22.2075 12.249 21.75 11.835V6.75C21.75 5.51625 20.7337 4.5 19.5 4.5H4.5ZM4.5 6H19.5C19.9163 6 20.25 6.33375 20.25 6.75V11.25H18.75V10.5C18.75 9.26625 17.7337 8.25 16.5 8.25H13.5C12.9248 8.25 12.3997 8.475 12 8.835C11.5898 8.46073 11.0552 8.25224 10.5 8.25H7.5C6.26625 8.25 5.25 9.26625 5.25 10.5V11.25H3.75V6.75C3.75 6.33375 4.08375 6 4.5 6ZM7.5 9.75H10.5C10.9163 9.75 11.25 10.0837 11.25 10.5V11.25H6.75V10.5C6.75 10.0837 7.08375 9.75 7.5 9.75ZM13.5 9.75H16.5C16.9163 9.75 17.25 10.0837 17.25 10.5V11.25H12.75V10.5C12.75 10.0837 13.0837 9.75 13.5 9.75ZM3.75 12.75H20.25C20.6663 12.75 21 13.0837 21 13.5V18.75H20.25V17.25H3.75V18.75H3V13.5C3 13.0837 3.33375 12.75 3.75 12.75Z"
              fill="#797774"
            />
          </svg>
        </span>
        <span>
          {bedRooms.toString()} {Number(bedRooms) > 1 ? 'bedrooms' : 'bedroom'}
        </span>
      </div>
      <div className="flex items-center gap-0.5">
        <span className="flex h-1.5 w-1.5 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <path
              d="M9 6.66663V7.33329H3V6.66663C3 5.56196 4.34333 4.66663 6 4.66663C7.65667 4.66663 9 5.56196 9 6.66663Z"
              stroke="#797774"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14.6666V4.16665C14 2.60198 12.209 1.33331 10 1.33331C7.79103 1.33331 6.00003 2.60198 6.00003 4.16665V4.66665M6.00003 9.66665V9.33331M3.39037 9.34331L3.27637 9.65665M1.39037 14.3433L1.27637 14.6566M6.00003 14.6666V14.3333M6.00003 12.3333V11.6666M2.44737 11.6866L2.21937 12.3133"
              stroke="#797774"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>
          {bathRooms.toString()} {Number(bedRooms) > 1 ? 'baths' : 'bath'}
        </span>
      </div>
      <div className="flex items-center gap-0.5">
        <span className="flex h-1.5 w-1.5 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.5 4.5C3.26625 4.5 2.25 5.51625 2.25 6.75V11.835C1.7925 12.249 1.5 12.8415 1.5 13.5V20.25H5.25V18.75H18.75V20.25H22.5V13.5C22.5 12.8415 22.2075 12.249 21.75 11.835V6.75C21.75 5.51625 20.7337 4.5 19.5 4.5H4.5ZM4.5 6H19.5C19.9163 6 20.25 6.33375 20.25 6.75V11.25H18.75V10.5C18.75 9.26625 17.7337 8.25 16.5 8.25H13.5C12.9248 8.25 12.3997 8.475 12 8.835C11.5898 8.46073 11.0552 8.25224 10.5 8.25H7.5C6.26625 8.25 5.25 9.26625 5.25 10.5V11.25H3.75V6.75C3.75 6.33375 4.08375 6 4.5 6ZM7.5 9.75H10.5C10.9163 9.75 11.25 10.0837 11.25 10.5V11.25H6.75V10.5C6.75 10.0837 7.08375 9.75 7.5 9.75ZM13.5 9.75H16.5C16.9163 9.75 17.25 10.0837 17.25 10.5V11.25H12.75V10.5C12.75 10.0837 13.0837 9.75 13.5 9.75ZM3.75 12.75H20.25C20.6663 12.75 21 13.0837 21 13.5V18.75H20.25V17.25H3.75V18.75H3V13.5C3 13.0837 3.33375 12.75 3.75 12.75Z"
              fill="#797774"
            />
          </svg>
        </span>
        <span>{maxGuest}</span>
      </div>
    </div>
  )
}

export default facilities
