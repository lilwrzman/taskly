"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import React from "react"

export const NextAuthProvider = ({children, session}: { children: React.ReactNode, session: Session | null }) => {
  return <SessionProvider session={session} basePath="/auth">{children}</SessionProvider>
}