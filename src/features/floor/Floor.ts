import { z } from "zod";

export const Floor = z.object({
    id: z.string(),
    sequence: z.number(),
    name: z.string(),
    fileName: z.string(),
});

export type Floor = z.infer<typeof Floor>;