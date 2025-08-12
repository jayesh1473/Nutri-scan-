import { cn } from "@/lib/utils";
import React from "react";
import { FileUpload } from "./fileupload";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex flex-col h-[50rem] w-full items-center justify-center bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl px-8 w-full">
        {/* Left Section: Heading */}
        <div className="text-left max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            <span className="text-green-400">Scan & Decode</span>{" "}
            <br />
            Your Food Packet Instantly.
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Packet pe likha har shabd padhne ki zarurat nahi!
            <br />
            <span className="text-white font-medium">NutriScan hai na, sab bataa dega bhai!</span>
          </p>
   
        </div>

        {/* Right Section: File Upload Component */}
        <div className="w-full md:w-[350px] bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl border border-green-200">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
