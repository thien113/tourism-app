import dbConnect from "../../../db/connect";
import Attraction from "../../../db/models/Attraction";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const attractionToUpdate = await Attraction.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(attractionToUpdate);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "DELETE") {
    try {
      const attractionToDelete = await Attraction.findByIdAndDelete(id);
      return response.status(200).json(attractionToDelete);
    } catch {
      console.error(`Error: ${response.status}`);
    }
  }
}
