import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ui/toogleMode";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange >
      <Component {...pageProps} />
      <Toaster />
      <ModeToggle className="absolute top-6 right-8"  />
    </ThemeProvider>
  )
}
