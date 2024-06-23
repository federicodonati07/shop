import React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { CiUser } from "react-icons/ci";

export default function NavBar(){
    return(
        <Navbar className="bg-slate-900 text-slate-50">
            <NavbarBrand>
                <Image src="/imgs/logo.png" alt="logo.png" width={50} height={50}></Image>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="center">
                <NavbarItem>
                    <Link href="/">
                        <span className="text-2xl tracking-widest font-bold">SHOP</span>
                    </Link>   
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/access" variant="flat" className="flex flex-row">
                        <CiUser className="text-2xl font-bold"/>
                        <span className="text-tiny text-slate-50">Account</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}