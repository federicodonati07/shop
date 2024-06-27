// products.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/server";
import CardTSX from "@/components/home/card";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const supabase = createClient();
            const { data: products } = await supabase
                .from("products")
                .select();

            setProducts(products || []);
        };

        fetchProducts();
    }, []);

    if (products.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <>
            {products.map((product, index) => {
                const collect = {
                    index: index,
                    title: product.title,
                    desc: product.desc,
                    price: product.price,
                    discount: product.discount,
                    image: product.image_src,
                    stripe_ulr: product.stripe_url,
                    uuid: product.uuid
                };

                return (
                    <CardTSX
                        key={index}
                        index={collect.index}
                        title={collect.title}
                        desc={collect.desc}
                        price={collect.price}
                        discount={collect.discount}
                        image={collect.image}
                        stripe_url={collect.stripe_ulr}
                        uuid={collect.uuid}
                    />
                );
            })}
        </>
    );
}
