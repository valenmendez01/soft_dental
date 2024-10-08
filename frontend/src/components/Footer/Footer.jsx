
const Footer = () => {
  return (
    <div className="relative mt-16 bg-custom-blue">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-custom-blue"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3 pb-4">
          <div>
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center text-gray-100"
            >
              <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Company
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold tracking-wide text-gray-100">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  References
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="font-semibold tracking-wide text-gray-100">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-4 pb-4 custom-footer-border sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;