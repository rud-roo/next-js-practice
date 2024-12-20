"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export const createProduct = async (formData) => {
  // console.log("I am from server")

  const newProduct = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("image")
  };

  console.log(newProduct, "product from server");

	await fetch(`http://localhost:4000/products`, {
		method: "POST",
		body: JSON.stringify(newProduct),
		headers: {
			"Content-type": "application/json",
		},
	});

  // revalidatePath("/");
	// revalidatePath("/shop");
  revalidateTag("products");
}