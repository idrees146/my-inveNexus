import dbConnect from "/lib/dbConnect";
import Product from "/models/Product";

export async function GET(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all products
    const products = await Product.find({});

    // Return the fetched products
    return new Response(JSON.stringify({ success: true, data: products }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);

    // Return an error response
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
    });
  }
}
