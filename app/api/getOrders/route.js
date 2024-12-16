import dbConnect from "/lib/dbConnect";
import Orders from "/models/Orders"

export async function GET(req) {

    try {

        await dbConnect();

        const orders = await Orders.find({})
   

        //return the products
        return new Response(JSON.stringify({ success: true, data: orders }), {
            status: 200,
            
        })
       

    }
    catch (error) {

        console.log(" An error occured while fetching the products: " + error.message)


        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 400,
        });

    }
}