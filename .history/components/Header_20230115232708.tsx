import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center hustify-between space-x-2 font-bold px-10 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Transactions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
