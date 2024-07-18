import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function Home() {
    return (
        <Menubar className="justify-center items-center gap-8 backdrop-blur-xl">
            <MenubarMenu>
                <MenubarTrigger>Products</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Customers</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Transactions</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
