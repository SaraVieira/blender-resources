import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <svg
                  width="30"
                  height="auto"
                  viewBox="0 0 480 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M184 304H296V352H184V304Z" fill="#F2F2F2" />
                  <path
                    d="M304 40H176C158.327 40 144 54.327 144 72L166.56 297.6C167.382 305.776 174.263 312 182.48 312H297.52C305.737 312 312.618 305.776 313.44 297.6L336 72C336 54.327 321.673 40 304 40Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M240 176C219.822 151.791 183.839 148.523 159.63 168.701C158.307 169.804 157.034 170.966 155.816 172.184L154.216 173.784L166.56 297.6C167.382 305.776 174.263 312 182.48 312H297.52C305.737 312 312.618 305.776 313.44 297.6L325.336 178.672L324.184 179.824C301.897 202.106 265.766 202.102 243.483 179.815C242.265 178.596 241.103 177.323 240 176Z"
                    fill="#FFDB8B"
                  />
                  <path
                    d="M224 8H256C264.837 8 272 15.163 272 24V48H208V24C208 15.163 215.163 8 224 8Z"
                    fill="#427C9D"
                  />
                  <path
                    d="M136 392V456C136 464.837 143.163 472 152 472H328C336.837 472 344 464.837 344 456V392C344 365.49 322.51 344 296 344H184C157.49 344 136 365.49 136 392Z"
                    fill="#FFC261"
                  />
                  <path
                    d="M240 440C257.673 440 272 425.673 272 408C272 390.327 257.673 376 240 376C222.327 376 208 390.327 208 408C208 425.673 222.327 440 240 440Z"
                    fill="#5192A9"
                  />
                  <path
                    d="M176 40H304C321.673 40 336 54.327 336 72H144C144 54.327 158.327 40 176 40Z"
                    fill="#5192A9"
                  />
                  <path
                    d="M128 392V456C128 469.255 138.745 480 152 480H328C341.255 480 352 469.255 352 456V392C351.947 364.195 331.517 340.633 304 336.64V319.04C313.514 316.427 320.434 308.219 321.4 298.4L344 72.8C344 72.664 343.952 72.536 344 72.408C344.048 72.28 344 72.144 344 72C343.974 49.92 326.08 32.026 304 32H280V24C280 10.745 269.255 0 256 0H224C210.745 0 200 10.745 200 24V32H176C153.92 32.026 136.026 49.92 136 72C136 72.144 136.072 72.264 136.08 72.408C136.088 72.552 136.024 72.664 136.04 72.8L158.6 298.4C159.576 308.21 166.493 316.406 176 319.016V336.616C148.474 340.61 128.041 364.186 128 392ZM336 392V456C336 460.418 332.418 464 328 464H152C147.582 464 144 460.418 144 456V392C144.026 369.92 161.92 352.026 184 352H296C318.08 352.026 335.974 369.92 336 392ZM192 320H288V336H192V320ZM152.84 80H327.2L317.664 174.944C298.132 193.643 267.14 192.969 248.441 173.437C247.648 172.609 246.885 171.754 246.152 170.872C225.029 145.532 188.285 140.011 160.648 158.024L152.84 80ZM216 24C216 19.582 219.582 16 224 16H256C260.418 16 264 19.582 264 24V32H216V24ZM176 48H304C314.168 48.012 323.229 54.418 326.632 64H153.368C156.771 54.418 165.832 48.012 176 48ZM162.536 176.888C182.148 158.292 213.122 159.116 231.717 178.728C232.453 179.504 233.164 180.305 233.848 181.128C245.562 195.154 262.625 203.62 280.88 204.464C281.864 204.464 282.832 204.528 283.816 204.528C294.925 204.505 305.844 201.644 315.536 196.216L305.48 296.8C305.068 300.903 301.604 304.021 297.48 304H182.48C178.371 304 174.931 300.888 174.52 296.8L162.536 176.888Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M240 368C217.909 368 200 385.909 200 408C200 430.091 217.909 448 240 448C262.091 448 280 430.091 280 408C279.974 385.92 262.08 368.026 240 368ZM240 432C226.745 432 216 421.255 216 408C216 394.745 226.745 384 240 384C253.255 384 264 394.745 264 408C264 421.255 253.255 432 240 432Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M240 392C235.582 392 232 395.582 232 400V408C232 412.418 235.582 416 240 416C244.418 416 248 412.418 248 408V400C248 395.582 244.418 392 240 392Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">
                      Home
                    </a>
                  </Link>
                  <Link href="/categories">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                      Categories
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                      Add Resource
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>

      <div className="wrapper">{children}</div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
        }

        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1.5rem;
        }

        code {
          font-family: "Menlo";
        }
      `}</style>
    </>
  );
}
