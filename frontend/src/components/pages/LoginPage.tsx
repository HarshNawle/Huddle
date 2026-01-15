import { RabbitIcon } from "lucide-react";
import TextFlip from "../TextFlip";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import TalkingPeople from "../../assets/5914759-removebg-preview.png";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const message = await login(email, password);
      toast.success(message);
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("Unexpected error occurred");
      }

      console.log("Error in Login:", error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 flex-1 overflow-hidden">
      {/* Signup Layout  */}
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-6 md:gap-8 py-8 lg:py-0">
        {/* TEXT LAYOUT */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center px-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-300 text-gray-800 flex items-center gap-2">
            Welcome back to{" "}
            <RabbitIcon
              className="size-9 dark:text-blue-800 text-gray-800 border
             border-gray-400 dark:border-blue-800 dark:bg-black bg-white rounded-full p-1"
            />{" "}
            Huddle
          </span>
          <div className="text-sm sm:text-[15px] md:text-base dark:text-gray-400 text-gray-800">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              Your conversations continue{" "}
              <TextFlip
                words={["right away", "in real time", "effortlessly"]}
              />{" "}
              on Huddle.
            </div>
          </div>
        </div>

        {/* FORM LAYOUT */}
        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="maxleiter@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400">
            Sign up
          </Link>
        </div>

        <div className="w-full max-w-[400px] px-4 sm:px-6 md:px-0">
          <InteractiveHoverButton className="w-full" onClick={onSubmitHandler}>
            Login
          </InteractiveHoverButton>
        </div>
      </div>

      {/* Image Layout - Hidden on mobile, visible on large screens */}
      <div
        className="hidden lg:flex w-full lg:w-1/2 h-64 lg:h-full min-h-[300px] lg:min-h-[500px]
       dark:bg-blue-800 bg-gray-900 rounded-xl shadow-xl overflow-hidden items-center justify-center"
      >
        <img
          src={TalkingPeople}
          alt="Talking People"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
