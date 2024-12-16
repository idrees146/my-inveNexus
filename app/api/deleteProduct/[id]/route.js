// app/api/deleteProduct/[id]/route.js

import dbConnect from "/lib/dbConnect";
import Product from "/models/Product";

export async function DELETE(request, { params }) {
  try {
    // Connect to the database
    await dbConnect();

    const { id } = params; // Get the product ID from the URL parameters

    // Try to delete the product by its ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    // If no product is found, return a 404
    if (!deletedProduct) {
      return new Response(
        JSON.stringify({ success: false, message: "Product not found" }),
        { status: 404 }
      );
    }

    // Return a success response
    return new Response(
      JSON.stringify({ success: true, message: "Product deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
