import { createClient } from "@/utils/supabase/server";

export default async function Products(){
    const supabase = createClient()
    const {data: products} = await supabase.from("products").select()

    console.log(JSON.stringify(products))
}