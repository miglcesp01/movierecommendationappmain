import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster" // Import Toaster
import { GlobalAlertDialog } from "@/components/global-alert-dialog"
import { AlertDialogProvider } from "@/context/alert-dialog-context"

export const metadata: Metadata = {
  title: "Moviemania - Movie Recommendations",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AlertDialogProvider>
          {children}
          <Toaster />
          <GlobalAlertDialog />
        </AlertDialogProvider>
      </body>
    </html>
  )
}

