import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, { message: "Name must be greater than 2 characters" }).max(255),
  year: z.string().min(1, { message: "Please select your year" }).max(255),
  //Suruma val lai unknown type ma casting gareko ani number ma feri casting gareko
  studentId: z.string().min(7, { message: "Student Id must contain 7 numbers" }).max(7).refine((val) => !isNaN(val as unknown as number), { message: "Student Id must be a number" }),
  password: z.string().min(6, { message: "Password must be greater than 6 characters" }).max(100),
  confirmPassword: z.string().min(6).max(100),
})