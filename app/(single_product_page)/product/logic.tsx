'use client';
import { createClient } from "@/utils/supabase/server";

const SingleProductPageLogic = async function({ id }) {
    const supabase = createClient();
    const { data: product, error } = await supabase
        .from("products")
        .select()
        .eq("id", id)
        .single();

    if (error) {
        console.error('Error fetching product:', error);
        return null;
    }

    return product;
}

export default SingleProductPageLogic;
