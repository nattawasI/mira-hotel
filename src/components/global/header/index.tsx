/** libs */
import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { cln } from '@/libs/utils'

/** components */
import Menu from '@/components/global/header/menu'

/** types */
import { ThemeProps } from '@/components/global/types'

type HeaderProps = HTMLAttributes<HTMLDivElement> & ThemeProps

const Header = (props: HeaderProps): JSX.Element => {
  const { theme = 'dark', className, ...restProps } = props
  return (
    <header {...restProps} className={cln('fixed left-0 top-0 z-30 w-full', className)}>
      <div className="content-container flex justify-between pt-1.75">
        <Link href="/" className="focus-visible:outline-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="87" height="26" viewBox="0 0 87 26" fill="none">
            <g clipPath="url(#clip0_102_257)">
              <path
                d="M31.3336 25.0285V25.6973H21.7106V25.0285C21.7106 25.0285 24.2092 24.8279 24.2092 23.1876V12.0137C24.2092 9.50395 24.0742 8.03081 22.1492 8.03081C19.4483 8.03081 17.9619 10.3733 17.9619 12.9165V23.1876C17.9619 24.8279 20.4604 25.0285 20.4604 25.0285V25.6973H10.8375V25.0285C10.8375 25.0285 13.336 24.8279 13.336 23.1876V12.0137C13.336 9.50395 13.2011 8.03081 11.2761 8.03081C8.57517 8.03081 7.08881 10.3733 7.08881 12.9165V23.1876C7.08881 24.8279 9.58732 25.0285 9.58732 25.0285V25.6973H0V25.0285C0 25.0285 2.49851 24.8279 2.49851 23.1876V10.1393C2.49851 8.46551 0 8.29832 0 8.29832V7.62956H7.09068V9.90521C7.9004 8.36519 9.58919 7.32861 11.6491 7.32861C15.0248 7.32861 16.9835 8.56582 17.692 10.4737C18.1644 9.0674 19.7857 7.32861 22.5204 7.32861C26.8089 7.32861 28.8351 9.30332 28.8351 12.2143V23.1876C28.8351 24.8279 31.3336 25.0285 31.3336 25.0285Z"
                fill="currentColor"
              />
              <path
                d="M43.7212 25.0284V25.6972H34.0982V25.0284C34.0982 25.0284 36.5968 24.8278 36.5968 23.1875V10.1392C36.5968 8.46542 34.0982 8.29823 34.0982 8.29823V7.62947H41.2227V23.1875C41.2227 24.8278 43.7212 25.0284 43.7212 25.0284ZM35.9895 2.77722C35.9895 1.27065 37.204 0 38.8254 0C40.3455 0 41.6275 1.27065 41.6275 2.77722C41.6275 4.38411 40.3455 5.58788 38.8254 5.58788C37.204 5.58788 35.9895 4.38411 35.9895 2.77722Z"
                fill="currentColor"
              />
              <path
                d="M62.8658 10.3399C62.2248 11.3096 60.9746 11.4768 59.6251 10.3065C58.5454 9.37021 57.8013 8.36521 56.2831 8.56583C54.1557 8.86678 53.4809 11.2762 53.4809 13.184V23.1876C53.4809 24.8279 55.9794 25.0285 55.9794 25.0285V25.6973H46.3565V25.0285C46.3565 25.0285 48.855 24.8279 48.855 23.1876V10.1393C48.855 8.46552 46.3565 8.29833 46.3565 8.29833V7.62957H53.1773V10.808C53.8183 8.7999 55.2035 7.86363 56.6205 7.52925C58.5454 7.09456 60.4348 7.46238 61.1114 7.62957C63.2388 8.13114 63.3738 9.57084 62.8677 10.3399H62.8658Z"
                fill="currentColor"
              />
              <path
                d="M86.4302 21.5489C85.5174 20.7798 84.4415 21.1124 83.3263 22.487C82.5334 23.4828 81.6094 24.7237 80.5897 25.0302H80.586C80.4754 25.0636 80.3648 25.0896 80.2561 25.0971C79.8156 25.1342 79.4707 25.0543 79.2121 24.8277C79.1408 24.7645 79.0715 24.694 79.0134 24.6048C78.9759 24.5546 78.9422 24.4915 78.9122 24.4246C78.9028 24.4079 78.8953 24.3912 78.8916 24.3744C78.8241 24.1144 78.8016 23.7781 78.8016 23.336V11.7553C78.8016 8.87958 76.2056 7.32471 72.4531 7.32471C72.3726 7.32471 72.292 7.32471 72.2151 7.32842C71.9639 7.33214 71.7184 7.34143 71.4766 7.36186C69.3605 7.51791 67.6642 8.14394 67.13 8.40773C65.1151 9.38672 65.4937 10.9416 66.2097 11.5193C66.9013 12.1045 67.6885 12.0562 68.5151 11.4097C68.8019 11.1942 69.0943 10.9063 69.3905 10.5441C70.1402 9.5985 71.0118 8.44674 71.9658 8.06406C72.0183 8.04363 72.0689 8.01576 72.1233 8.0009H72.1326C72.1326 8.0009 72.1514 7.99718 72.1589 7.99347C72.1608 7.99347 72.1645 7.99347 72.1664 7.99347C72.2039 7.97675 72.2507 7.96746 72.2938 7.96003C72.3482 7.94703 72.4082 7.9396 72.4644 7.93402C72.9049 7.89687 73.2498 7.97675 73.5028 8.19967C73.5459 8.23682 73.5834 8.27584 73.6171 8.3167C73.6246 8.32785 73.634 8.339 73.6415 8.34828C73.6771 8.38915 73.709 8.43188 73.7408 8.48018C73.7408 8.48018 73.7427 8.4839 73.7446 8.48575C73.7652 8.52848 73.7877 8.56563 73.8083 8.60836C73.8252 8.6418 73.8383 8.67152 73.8514 8.70496C73.8683 8.74211 73.8814 8.78112 73.8983 8.81828C73.8983 8.82199 73.8983 8.82757 73.902 8.83128C73.9451 8.94831 73.9789 9.08392 74.0089 9.22696C74.0857 9.59664 74.1195 10.0555 74.1195 10.6091V11.7144C74.0895 11.7274 74.0595 11.7348 74.0295 11.7478C74.0126 11.7571 73.9957 11.7608 73.9789 11.7683C73.9751 11.7683 73.9695 11.772 73.9658 11.772C69.7859 12.8216 64.4572 17.3171 64.0242 21.482C63.6549 25.1639 66.9969 26.0018 68.7869 26.0018C72.6856 26.0018 73.7708 23.245 74.0838 22.3198C74.0876 22.3106 74.0876 22.3031 74.0932 22.2938C74.0932 22.3031 74.097 22.3106 74.097 22.3198C74.1007 22.3459 74.1101 22.37 74.1176 22.396V22.4462C74.2994 23.0889 74.6443 23.6444 75.1185 24.0902C75.186 24.1571 75.2534 24.2202 75.3265 24.2797C75.4877 24.419 75.6564 24.5398 75.8401 24.6494C75.9638 24.7255 76.0913 24.7998 76.2225 24.8686C76.3537 24.9355 76.4943 25.0023 76.633 25.0618C76.7773 25.1212 76.9254 25.1751 77.0734 25.2308C77.2046 25.2736 77.3415 25.3144 77.4802 25.3571C77.6282 25.3999 77.7763 25.4333 77.93 25.4667C78.0575 25.4965 78.1887 25.5206 78.3236 25.5429C78.4642 25.5689 78.6029 25.5894 78.7472 25.6061C78.7566 25.6098 78.7603 25.6098 78.7678 25.6098C79.2383 25.6729 79.735 25.7027 80.2561 25.7027C80.5747 25.7027 80.884 25.6897 81.1895 25.6692C81.2101 25.6692 81.2326 25.6655 81.2532 25.6655C81.2795 25.6655 81.3039 25.6618 81.3301 25.6562C83.375 25.4872 85.0038 24.8872 85.5211 24.6308C87.5155 23.6592 87.1462 22.1211 86.434 21.5545L86.4302 21.5489ZM70.4701 24.7608C69.3211 24.7608 68.3071 23.8561 68.3071 21.4152C68.3071 17.514 70.0559 14.6365 73.9601 12.4537C73.9639 12.4537 73.9695 12.45 73.9733 12.45C73.9901 12.4407 74.007 12.4333 74.0239 12.424C74.0538 12.4073 74.0838 12.3943 74.1138 12.3813V18.6695C74.1045 19.0225 74.0763 19.3884 74.0239 19.7618C74.0107 19.8677 73.9939 19.9717 73.9733 20.0776C73.9695 20.1036 73.9639 20.1315 73.9601 20.1575C73.574 22.435 72.4288 24.7608 70.4701 24.7608Z"
                fill="currentColor"
              />
              <path
                d="M80.391 8.89064C79.5195 8.89064 78.8091 8.18658 78.8091 7.32276C78.8091 6.45894 79.5195 5.75488 80.391 5.75488C81.2626 5.75488 81.973 6.45894 81.973 7.32276C81.973 8.18658 81.2626 8.89064 80.391 8.89064ZM80.391 5.9165C79.6076 5.9165 78.9721 6.54811 78.9721 7.32276C78.9721 8.09741 79.6094 8.72902 80.391 8.72902C81.1726 8.72902 81.8099 8.09741 81.8099 7.32276C81.8099 6.54811 81.1726 5.9165 80.391 5.9165Z"
                fill="currentColor"
              />
              <path
                d="M79.8081 8.11624V6.52979H80.3779C80.7171 6.52979 80.9289 6.70441 80.9289 7.00906C80.9289 7.24685 80.7715 7.42704 80.5185 7.46791L80.9702 8.11438H80.7696L80.3385 7.48649H79.973V8.11438H79.8062L79.8081 8.11624ZM79.9749 7.34902H80.3648C80.6103 7.34902 80.7621 7.23013 80.7621 7.00906C80.7621 6.788 80.6103 6.66911 80.3648 6.66911H79.9749V7.34902Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_102_257">
                <rect width="87" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Menu />
      </div>
    </header>
  )
}

export default Header
