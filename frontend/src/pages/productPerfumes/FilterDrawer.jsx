"use client";

import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

import ProductListFilters from "./perfumesFiltered/ProductListFilters";
import { useState } from "react";

const FilterDrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <main className="my-5">
      <div className="flex flex-col items-center justify-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="text-primaryDark hover:text-white bg-primary hover:bg-primaryDark/80 focus:ring-2 
                    focus:ring-primaryDark/80 font-medium rounded-lg text-sm px-5 py-2.5 
                    dark:bg-primaryDark/80 dark:hover:bg-primary focus:outline-none dark:focus:ring-primaryLight/80
                    dark:ring-primaryLight
                    dark:active:ring-white dark:text-primaryLight dark:hover:text-primaryDark"
        >
          Открыть опции для фильтрации
        </Button>
      </div>
      {/* <section className="mx-auto max-w-lg"></section> */}
      <Drawer open={isOpen} onClose={handleClose} className="w-50">
        <DrawerHeader title="ФИЛЬТРЫ ТОВАРА" titleIcon={() => <></>} />
        <DrawerItems>
          <ProductListFilters onChange={props.onChange} />

          <Sidebar className="[&>div]:bg-transparent [&>div]:p-1">
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Поиск по названию"
                    required
                    size={32}
                  />
                </form>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/" icon={HiChartPie}>
                      Dashboard
                    </SidebarItem>
                    <SidebarItem
                      href="/e-commerce/products"
                      icon={HiShoppingBag}
                    >
                      Products
                    </SidebarItem>
                    <SidebarItem href="/users/list" icon={HiUsers}>
                      Users list
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-in" icon={HiLogin}>
                      Sign in
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-up" icon={HiPencil}>
                      Sign up
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </SidebarItem>
                    <SidebarItem
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </SidebarItem>
                    <SidebarItem
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </SidebarItem>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </main>
  );
};

export default FilterDrawer;
