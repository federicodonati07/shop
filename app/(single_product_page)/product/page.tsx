'use client';

import { useEffect, useState } from 'react';
import SingleProductPageLogic from "./logic";
import { useSearchParams } from "next/navigation";
import NavBar from '@/components/home/navbar';
import { IoReturnDownBackOutline } from "react-icons/io5";
import Link from 'next/link';
import {CircularProgress} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const SingleProductPage = function() {
    const searchParams = useSearchParams();
    const uuid = searchParams.get("uuid");

    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            const productData = await SingleProductPageLogic({ uuid });
            setProduct(productData);
        }

        if (uuid) {
            fetchProduct();
        }
    }, [uuid]);

    if (!product) {
        return( 
            <div className='flex flex-row items-center justify-center'>
                <CircularProgress color="danger" label="Loading..." className='text-white text-2xl'/>
            </div>
        )
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="text-white bg-blue-900 absolute w-full h-full">
                <Link href="/">
                    <div className='m-5 absolute top-0 left-0'>
                        <IoReturnDownBackOutline className='transition-all duration-500 text-4xl border rounded-full cursor-pointer hover:bg-white hover:text-blue-900'/>
                    </div>
                </Link>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="containerImageCorrelate mt-20 ml-2">
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-yellow-500 uppercase font-bold">New</p>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt={product.title}
                                className="z-0 object-cover"
                                src={product.image_src}
                            />
                            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                <div>
                                <p className="text-black text-tiny">Available soon.</p>
                                <p className="text-black text-tiny">Get notified.</p>
                                </div>
                                <Button className="text-tiny" color="primary" radius="full" size="sm">
                                    Notify Me
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="containerInfo">
                        ciao
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProductPage;
