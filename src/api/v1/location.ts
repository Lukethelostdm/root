import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type GeoLocationResponse = {
  country_code: string;
};

type ApiResponse = {
  countryCode?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> {
  try {
    const { data } = await axios.get<GeoLocationResponse>("https://geolocation-db.com/json/");

    res.status(200).json({ countryCode: data.country_code });
  } catch (error) {
    console.error("Error fetching location:", error);

    res.status(500).json({ error: "Failed to fetch location" });
  }
}
