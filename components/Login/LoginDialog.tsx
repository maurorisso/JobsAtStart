"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import People from "/public/people.jpg";

const LoginDialog = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{isSignup ? "Sign Up" : "Login"}</DialogTitle>
        <DialogDescription>
          {isSignup
            ? "Already have an account? "
            : "Don't have an account yet? No problem! "}
          <button
            onClick={toggleForm}
            className="hover:underline font-semibold"
          >
            {isSignup ? "Login here" : "Sign up here"}
          </button>
        </DialogDescription>
      </DialogHeader>
      <form action="">
        <div className="grid gap-4 py-4 bg-background">
          {isSignup && (
            <>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Join As" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startie">Startie</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="first-name" className="text-right">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  name="firstName"
                  required
                  type="text"
                  placeholder="First Name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="last-name" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  name="lastName"
                  required
                  type="text"
                  placeholder="Last Name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="user@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirm-password" className="text-right">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  className="col-span-3"
                />
              </div>
            </>
          )}
          {!isSignup && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="user@start-berlin.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="********"
                  className="col-span-3"
                />
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default LoginDialog;
