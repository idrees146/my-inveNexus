import dbConnect from "/lib/dbConnect";
import Orders from "/models/Orders"

export async function POST(req) {

    try {
        await dbConnect();

        //parsing the request to json

        const body = await req.json();

        console.log(body);

        //creating new product in the database

        const newOrder = await Orders.create(body);

        //returning success message

        return new Response(JSON.stringify({ success: true, data: newOrder }), {
            status: 201,
        });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 400,
        })
    }


}