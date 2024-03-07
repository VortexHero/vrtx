import configuration from "../config.json";
import { z } from "zod";

export const schema = z.object({
  projects: z.array(
    z.object({
      name: z.string(),
      projects: z
        .array(
          z.object({
            name: z.string(),
            web: z.string().url().optional(),
            ios: z.string().url().optional(),
            github: z.string().url().optional(),
            description: z.string(),
          }),
        )
        .optional(),
      web: z.string().url().optional(),
      ios: z.string().url().optional(),
      github: z.string().url().optional(),
      tagline: z.string(),
      description: z.string(),
    }),
  ),
});

export const config = schema.parse(configuration);
