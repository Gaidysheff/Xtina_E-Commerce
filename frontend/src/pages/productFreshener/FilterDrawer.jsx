"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

import ProductListFilters from "./freshenersFiltered/ProductListFilters";
import { useState } from "react";

const FilterDrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <main className="my-8">
      <div
        className="flex flex-col items-center justify-center"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="text-primaryDark hover:text-white bg-primary 
          hover:bg-primaryDark/80 focus:ring-2 text-sm px-5 py-2.5
          focus:ring-primaryDark/80 font-medium rounded-lg  
          dark:bg-primaryDark/80 dark:hover:bg-primary focus:outline-none 
          dark:focus:ring-primaryLight/80 dark:ring-primaryLight
          dark:active:ring-white dark:text-primaryLight 
          dark:hover:text-primaryDark"
        >
          Открыть опции для фильтрации
        </Button>
      </div>
      <section className="mx-auto max-w-lg mt-[2rem]">
        {props.data?.length == 0 && (
          <div
            className="text-md xsm:text-xl sm:text-2xl md:text-3xl text-center
            lg:text-4xl italic font-['Pacifico'] my-1 md:my-3
            text-primaryDark/60 dark:text-primary/80 
            drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]
            min-h-56 flex items-center"
          >
            У нас нет товара, соответствующего выбранным критериям фильтрации.
          </div>
        )}
      </section>
      <Drawer open={isOpen} onClose={handleClose} className="w-50">
        <DrawerHeader title="ФИЛЬТРЫ ТОВАРА" titleIcon={() => <></>} />
        <DrawerItems>
          <ProductListFilters onChange={props.onChange} />
        </DrawerItems>
      </Drawer>
    </main>
  );
};

export default FilterDrawer;
