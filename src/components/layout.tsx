import Sidebar from './sidebar';
import { Toaster } from "../components/ui/toaster"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  );
}