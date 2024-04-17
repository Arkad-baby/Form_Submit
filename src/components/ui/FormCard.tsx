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
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Ghost } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function CardWithForm() {
  const { toast } = useToast()
  const [formStep,setFormStep]=React.useState(0);
  //FormSchema bata TS le bujhne type extract gareko
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
    if(values.password!=values.confirmPassword){
      toast({
        title:"Confirm Password don't match!",
        variant:"destructive"
      })
      return;
    }
    console.log(values)
    alert(JSON.stringify(values,null ,4))
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Register Now</CardTitle>
        <CardDescription>Join With Us in this beautiful upward Spiral Journey</CardDescription>
      </CardHeader>
      <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3  overflow-hidden ">
      {/* name */}
      <div className={`flex justify-center items-start  
      ${formStep==1? "translate-x-[-50%]":"translate-x-[50%]" } transition-all duration-300 ease-in-out  `}>

      <div className={cn({
         "space-y-3": true,
         "min-w-[98%] pr-2":true,
       
    
      })}>

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
        {/* email  */}
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
        {/* Student Id */}
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
        {/* Year  */}
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
      </div>
      <div className={cn({
         "space-y-3": true,
         "min-w-full  pl-2":true,     
              
      })}>

        {/* Password  */}
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
        {/*Confirm Password  */}

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
          </div>
          </div>
<div className="flex justify-between">
        <Button className={cn({"hidden":formStep==0})} type="submit">Submit</Button>

       { 
       formStep==0?
        <Button 
        type="button"
        onClick={()=>{
          //validation
          form.trigger(["name","email","studentId","year"])
          const nameState=form.getFieldState("name")
          const emailState=form.getFieldState("email")
          const idState=form.getFieldState("studentId")
          const yearState=form.getFieldState("year")

          // The isDirty property typically indicates whether the value of the field has been changed from its initial value.
        if(nameState.invalid || !nameState.isDirty) return;
        if(emailState.invalid || !emailState.isDirty)return;
        if(idState.invalid || !idState.isDirty) return;
        if(yearState.invalid || !yearState.isDirty) return;
          setFormStep(1)
          }}
           variant={"ghost"}
            >Next Step 
            <ArrowRight className="ml-2 w-6 h-6" /> 
            </Button>
            :
            <Button 
            onClick={()=>{setFormStep(0)}}
             type="button"
              variant={"ghost"} 
              >
                <ArrowLeft className="mr-2 w-6 h-6" /> Go Back 
                </Button>}
</div>
      </form>
    </Form>
      </CardContent>
    
    </Card>
  )
}
