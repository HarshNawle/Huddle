import { RabbitIcon } from "lucide-react"
import TextFlip from "../TextFlip"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "../ui/field"
import { Input } from "../ui/input"
import TalkingPeople from "../../assets/people-talking.png"
import { InteractiveHoverButton } from "../ui/interactive-hover-button"
import { Link } from "react-router-dom"

const SignupPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 flex-1 overflow-hidden">
      {/* Signup Layout  */}
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-4 md:gap-5 py-8 lg:py-0">

        {/* TEXT LAYOUT */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center px-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-300 text-gray-800 flex items-center gap-2">
            Welcome to <RabbitIcon className="size-9 dark:text-blue-800 text-gray-800 border
             border-gray-400 dark:border-blue-800 dark:bg-black bg-white rounded-full p-1" /> Huddle
          </span>
          <div className="text-sm sm:text-[15px] md:text-base dark:text-gray-400 text-gray-800">
            <span className="text-center">
              Huddle is more than just a chat app where
              <p className="flex items-center justify-center gap-2 flex-wrap">
                conversations are <TextFlip words={["instant", "smooth", "secure"]} />
              </p>
            </span>
          </div>
        </div>

        {/* FORM LAYOUT */}
        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" placeholder="Max Leiter" />
                <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="maxleiter@gmail.com" />

              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>

                <Input id="password" type="password" placeholder="••••••••" />
              </Field>
            </FieldGroup>
          </FieldSet>

        </div>
        <div>
          Already have an account? <Link to="/login" className="text-blue-600 dark:text-blue-400" >Log in</Link>
        </div>
        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <InteractiveHoverButton className="w-full">Sign Up</InteractiveHoverButton>
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