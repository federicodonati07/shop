import { createClient } from "@/utils/supabase/server";
import CardTSX from "@/components/home/card";

export default async function Products(){
    const supabase = createClient()
    const {data: products} = await supabase.from("products").select()


    if(!products){
        return <p>No products available</p>
    }

    return(
        <>
            {products.map((product, index)=>{
                let collect = {
                    "index":index,
                    "title":product.title,
                    "desc":product.desc,
                    "price":product.price,
                    "discount":product.discount,
                    "image":product.image_src,
                    "stripe_url":product.stripe_url,
                    "uuid":product.uuid
                }

                return(
                    <CardTSX
                    index={collect.index}
                    title={collect.title}
                    desc={collect.desc}
                    price={collect.price}
                    discount={collect.discount}
                    image={collect.image}
                    stripe_url={collect.stripe_url}
                    uuid={collect.uuid}
                    ></CardTSX>
                )
            })}
        </>
    )
}