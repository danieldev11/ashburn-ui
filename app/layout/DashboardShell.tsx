import * as React from "react"
import { Button } from "../primitives/button"
import { Sheet, SheetContent, SheetTrigger } from "../primitives/sheet"
import { Menu } from "lucide-react"

interface NavItem {
    label: string
    href: string
    icon?: React.ReactNode
}

interface DashboardShellProps {
    navItems: NavItem[]
    children?: React.ReactNode
    sidebarHeader?: React.ReactNode
    userSlot?: React.ReactNode
}

export function DashboardShell({
    navItems,
    children,
    sidebarHeader,
    userSlot,
}: DashboardShellProps) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 md:flex-row">
            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden m-4">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <div className="px-2 py-6">{sidebarHeader}</div>
                    <nav className="grid gap-2 text-lg font-medium">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-auto">{userSlot}</div>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-background md:flex">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    {sidebarHeader}
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto border-t p-4">{userSlot}</div>
            </aside>

            {/* Main Content */}
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>
        </div>
    )
}
