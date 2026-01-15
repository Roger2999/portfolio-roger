import type { technologiesData } from "../types/technologies";

export const fetchTechService = async (): Promise<technologiesData> => {
  const response = await fetch("/data/technologies.json");
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status} | ${response.statusText}`
    );
  }
  const result: technologiesData = await response.json();
  return result;
};
