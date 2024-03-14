const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-300 py-5 sm:px-16 px-6 font-[sans-serif]">
      <div className="lg:flex lg:justify-between lg:items-cente max-lg:text-center">
        <p className="text-base">
          © 2023
          <a
            href="https://readymadeui.com/"
            
            className="mx-1 hover:underline"
          >
            ReadymadeUI
          </a>
          All Rights Reserved.
        </p>
        <ul className="flex flex-wrap space-x-6 gap-y-2 max-lg:mt-4 max-lg:justify-center">
          <li>
            <a href="javascript:void(0)" className="text-base hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-base hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-base hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
