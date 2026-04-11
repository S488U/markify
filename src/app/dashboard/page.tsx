import { redirect } from "next/navigation";
import NotesDashboard from "@/src/components/NotesDashboard";
import { getUser } from "@/src/lib/auth";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/signin");
  }

  return <NotesDashboard />;
}
