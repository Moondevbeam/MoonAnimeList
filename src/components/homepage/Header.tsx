import { Menu } from '@headlessui/react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-800 p-4 font-semibold">
      <div className="text-white font-bold text-2xl">
      Tamashii 
      </div>

      <Menu as="div" className="relative inline-block z-10">
        {({ open }) => (
          <>
            <Menu.Button className="text-white">
              Menu
            </Menu.Button>
            <Menu.Items
              as="div"
              className={`absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open ? 'visible' : 'invisible'
                }`}
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                  href='/'
                    className={`${
                      active ? 'bg-gray-300' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                  href='/about'
                    className={`${
                      active ? 'bg-gray-300' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    About
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                  href='/'
                    className={`${
                      active ? 'bg-gray-300' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Login
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Header;
