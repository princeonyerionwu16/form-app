"use client";
import { useRouter } from "next/navigation";
import { CheckCircle, User, Mail, BookOpen } from "lucide-react";

export default function Dashboard({ name = "", email = "", course = "" }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 p-6 flex items-center justify-center">
      
      <div className="w-full max-w-3xl space-y-6 animate-fade-in">
    
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-900">
            🎓 Student Dashboard
          </h1>

          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition"
          >
            ← Back
          </button>
        </div>

        {/* SUCCESS CARD */}
        <div className="rounded-2xl bg-white p-5 shadow-md border border-green-200 flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <div>
            <p className="font-semibold text-green-700">
              Registration Successful
            </p>
            <p className="text-sm text-slate-500">
              Your details have been recorded successfully.
            </p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid sm:grid-cols-2 gap-4">
          
          {/* NAME */}
          <div className="rounded-2xl bg-white p-5 shadow border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <User className="w-4 h-4" />
              Full Name
            </div>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {name || "Not provided"}
            </p>
          </div>

          {/* EMAIL */}
          <div className="rounded-2xl bg-white p-5 shadow border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Mail className="w-4 h-4" />
              Email Address
            </div>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {email || "Not provided"}
            </p>
          </div>

          {/* COURSE */}
          <div className="rounded-2xl bg-white p-5 shadow border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BookOpen className="w-4 h-4" />
              Selected Course
            </div>
            <p className="mt-2 text-lg font-semibold text-sky-600">
              {course || "Not provided"}
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/")}
            className="flex-1 rounded-xl bg-slate-900 text-white py-3 font-medium hover:bg-slate-700 transition"
          >
            Register Another
          </button>

          <button
            className="flex-1 rounded-xl border border-slate-300 py-3 font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Download Info
          </button>
        </div>

      </div>
    </div>
  );
}
