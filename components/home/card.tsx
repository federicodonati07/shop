import React from "react";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CardTSX({ index, title, desc, price, discount, image, stripe_url, uuid }) {
  const sub = (price * discount) / 100;
  const nprice = price - sub;
  const rnprice = nprice.toFixed(2);


  return (
    <Link href={`/product?uuid=${uuid}`} className="m-0">
      <Card shadow="sm" isPressable className="bg-slate-900 text-white m-4">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-[250px]"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-small flex flex-col sm:flex sm:flex-row sm:justify-between">
          <div className="flex flex-col text-left">
            <b>{title}</b>
            <span className="hidden sm:block text-tiny mr-4">{desc}</span>
          </div>
          <div className="flex flex-col items-end">
            {discount !== 0 ? (
              <>
                  <s className="text-default-500">€{price}</s>
                  <p className="bg-green-900 text-white p-1 rounded tracking-widest font-number">
                      <b>€{rnprice}</b>
                  </p>
                  <p className="bg-red-900 text-white p-1 rounded flex flex-row">
                      <RiDiscountPercentFill className="text-xl mr-2"/>
                      -{discount}%
                  </p>
              </>
            ):(
              <p className="bg-green-900 text-white p-1 rounded tracking-widest font-number"><b>€{price}</b></p>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
