import dbConnect from "/lib/dbConnect";
import Product from "/models/Product";

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the incoming request body
    
    const body = await req.json();
   

    console.log(body);
    // Create a new product in the database
    const newProduct = await Product.create(body);

    // Return a success response
    return new Response(JSON.stringify({ success: true, data: newProduct }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
    });
  }
}
