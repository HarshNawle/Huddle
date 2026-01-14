import { RabbitIcon } from "lucide-react"
import TextFlip from "../TextFlip"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "../ui/field"
import { Input } from "../ui/input"
import TalkingPeople from "../../assets/people-talking.png"
import { InteractiveHoverButton } from "../ui/interactive-hover-button"
import { Link, useNavigate } from "react-router-dom"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"

const SignupPage = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await axios.post("http://localhost:8400/api/users/register", 
        user,
        {
          headers : {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      )
      
      if(response.data.success){
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log('Error in Signup: ', error);
    }
    setUser({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: ""
    });
  }
  
  const navigate = useNavigate();
  const handlCheckBox = (gender: string) => {
    setUser({ ...user, gender });
  }

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 sm:p-2 md:p-4 my-[-10px] lg:p-6 flex-1 overflow-hidden">
      {/* Signup Layout  */}
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-3 py-8 lg:py-0">

        {/* TEXT LAYOUT */}
        <div className="flex flex-col gap-2 text-center px-4 ">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-300 text-gray-800 flex items-center gap-2">
            Welcome to <RabbitIcon className="size-9 dark:text-blue-800 text-gray-800 border
             border-gray-400 dark:border-blue-800 dark:bg-black bg-white rounded-full p-1" /> Huddle
          </span>
          <div className="text-sm sm:text-[15px] md:text-base dark:text-gray-400 text-gray-800">
            <span className="text-center">
              Huddle is more than just a chat app where
              <div className="flex items-center justify-center gap-2 flex-wrap">
                conversations are <TextFlip words={["instant", "smooth", "secure"]} />
              </div>
            </span>
          </div>
        </div>

        {/* FORM LAYOUT */}
        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <FieldSet>
            <FieldGroup className="gap-2">
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" placeholder="Max Leiter"
                  value={user.fullName}
                  onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
                <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="maxleiter@gmail.com"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })} />

              </Field>
              <Field>
                <RadioGroup className="flex items-center gap-1">
                  <Field orientation={"horizontal"}>
                    <RadioGroupItem value="Male" checked={user.gender === "Male"}
                     onClick={() => handlCheckBox("Male")} />
                    <FieldLabel>Male</FieldLabel>
                  </Field>
                  <Field orientation={"horizontal"}>
                    <RadioGroupItem value="Female" checked={user.gender === "Female"}
                     onClick={() => handlCheckBox("Female")} />
                    <FieldLabel>Female</FieldLabel>
                  </Field>
                </RadioGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>

                <Input id="password" type="password" placeholder="••••••••"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>

                <Input id="confirmPassword" type="password" placeholder="••••••••"
                  value={user.confirmPassword}
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
              </Field>
            </FieldGroup>
          </FieldSet>

        </div>
        <div>
          Already have an account? <Link to="/login" className="text-blue-600 dark:text-blue-400" >Log in</Link>
        </div>
        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <InteractiveHoverButton className="w-full" type="submit" onClick={onSubmitHandler} >Sign Up</InteractiveHoverButton>
        </div>

      </div>

      {/* Image Layout - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:flex w-full lg:w-1/2 h-64 lg:h-full min-h-[300px] lg:min-h-[500px]
       dark:bg-blue-800 bg-gray-900 rounded-xl shadow-xl overflow-hidden items-center justify-center">
        <img src={TalkingPeople} alt="Talking People" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default SignupPage