import dbConnect from "../../../db/connect";
import Attraction from "../../../db/models/Attraction";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const attractions = await Attraction.find();
    return response.status(200).json(attractions);
  }

  if (request.method === "POST") {
    try {
      const attractionData = request.body;
      const attraction = new Attraction(attractionData);
      await attraction.save();
      return response.status(201).json({ status: "Attraction created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
