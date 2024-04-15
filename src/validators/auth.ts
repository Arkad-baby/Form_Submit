import {z} from "zod";

 export const formSchema = z.object({
    email: z.string().email(),
    name:z.string().min(2).max(255),
    year:z.string().min(0).max(255),
    studentId:z.string().min(7).max(7),
    password:z.string().min(2).max(100),
    confirmPassword:z.string().min(2).max(100),
  })