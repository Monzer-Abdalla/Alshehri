"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Dictionary } from "@/lib/i18n/types";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Dynamic schema based on dictionary strings
  const formSchema = z.object({
    name: z.string().min(1, dict.contact.form.validation.nameRequired),
    email: z
      .string()
      .min(1, dict.contact.form.validation.emailRequired)
      .email(dict.contact.form.validation.emailInvalid),
    subject: z.string().min(1, dict.contact.form.validation.subjectRequired),
    message: z
      .string()
      .min(1, dict.contact.form.validation.messageRequired)
      .min(10, dict.contact.form.validation.messageMin),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    setIsSubmitSuccessful(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitSuccessful(true);
      reset();
    } catch (error) {
      setSubmitError(dict.contact.form.errorMsg);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
      {isSubmitSuccessful ? (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{dict.contact.form.successTitle}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md">{dict.contact.form.successDesc}</p>
          <button
            onClick={() => setIsSubmitSuccessful(false)}
            className="mt-8 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            {dict.contact.form.submitBtn}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {submitError && (
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl text-red-600 text-sm">
              {submitError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {dict.contact.form.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={dict.contact.form.namePlaceholder}
                {...register("name")}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border 
                           text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600
                           ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-transparent'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {dict.contact.form.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={dict.contact.form.emailPlaceholder}
                {...register("email")}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border 
                           text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600
                           ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-transparent'}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {dict.contact.form.subjectLabel}
            </label>
            <input
              id="subject"
              type="text"
              placeholder={dict.contact.form.subjectPlaceholder}
              {...register("subject")}
              className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border 
                         text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600
                         ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-transparent'}`}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {dict.contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={dict.contact.form.messagePlaceholder}
              {...register("message")}
              className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border resize-none
                         text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600
                         ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-transparent'}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl
                       transition-all duration-300 shadow-lg shadow-red-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {dict.contact.form.submittingBtn}
              </>
            ) : (
              dict.contact.form.submitBtn
            )}
          </button>
        </form>
      )}
    </div>
  );
}
