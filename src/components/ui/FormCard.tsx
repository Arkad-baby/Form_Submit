import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formSchema } from "@/validators/auth"
import {  useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form"

export function CardWithForm() {
 type formType=z.infer<typeof formSchema>;
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     confirmPassword:"",
     email:"",
     name:"",
     password:"",
     studentId:"",
     year:""
    },
  })

 

  function onSubmit(values: formType) {
    console.log(values)
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Register Now</CardTitle>
        <CardDescription>Join With Us in this beautiful upward Spiral Journey</CardDescription>
      </CardHeader>
      <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Bobby Fisher" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="eg:bobbyFisher@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This is future university emial.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Id</FormLabel>
              <FormControl>
                <Input placeholder="Your Id" {...field} />
              </FormControl>
              <FormDescription>
                This is ID provided by the university.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {
                [1,2,3,4].map((year)=>(

                  <SelectItem value={year.toString()} key={year}>{year} Year</SelectItem>        
                 ))
                 }
                </SelectContent>
              </Select>
          
              <FormMessage />
            </FormItem>
          )}
        />
               <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>
                Enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
               <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm </FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>
                Re-enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </CardContent>
    
    </Card>
  )
}
