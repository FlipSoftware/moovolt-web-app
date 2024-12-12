import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { DarkModeToggle } from "./components/darkmode-toggle";
import DashboardPage from "./pages/DashboardPage";
import { Search } from "./components/search";
import { UserNav } from "./components/user-nav";

function NavHeader() {
  const { state, isMobile } = useSidebar();

  return (
    <header className="sticky top-0 w-0 flex flex-wrap shrink-0 z-50 h-16 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div
        className={`absolute ${
          isMobile
            ? "w-[100vw]"
            : state === "expanded"
              ? "w-[calc(100vw-var(--sidebar-width))]"
              : state === "collapsed"
                ? "w-[calc(100vw-var(--sidebar-width-icon))]"
                : "w-[calc(100vw-var(--sidebar-width-icon))]"
        } flex top-0 left-0 shrink-0 items-center gap-2 px-4 backdrop-blur`}
      >
        <SidebarTrigger className="-ml-1" />
        <div className="flex ml-auto h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <Search />
            <DarkModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}

export function App() {
  return (
    <SidebarProvider className="w-full overflow-x-clip">
      <AppSidebar />
      <NavHeader />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-16">
          <DashboardPage />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
