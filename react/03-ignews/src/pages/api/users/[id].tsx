import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query;

  const users = [
    {id: 1, name: "Arthur"},
    {id: 2, name: "Dani"},
    {id: 3, name: "Sergio"},
  ];

  return response.json(id);
};
