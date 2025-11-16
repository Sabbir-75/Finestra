"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"

import { cn } from "@/lib/utils"

function Menubar({
    className,
    ...props
}) {
    return (
        <MenubarPrimitive.Root
            data-slot="menubar"
            className={cn(
                "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
                className
            )}
            {...props} />
    );
}

function MenubarMenu({
    ...props
}) {
    return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}







function MenubarTrigger({
    className,
    ...props
}) {
    return (
        <MenubarPrimitive.Trigger
            data-slot="menubar-trigger"
            className={cn(
                "hover:bg-primary text-[#FFFFFF] flex items-center rounded-full px-3 py-1.5 text-sm lg:text-base duration-150 font-medium outline-hidden select-none",
                className
            )}
            {...props} />
    );
}


export {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
}