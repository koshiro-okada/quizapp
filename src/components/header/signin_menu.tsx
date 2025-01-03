"use client";

import { signout } from "@/app/actions";
import { signOut } from "@/auth";
import { stringResources } from "@/libs/string_resources";
import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import type { User as UserType } from "next-auth";

export default function SigninMenu({ user }: { user?: UserType }) {
  if (user === undefined) return null;
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User as="button" avatarProps={{ src: user.image }} name={user.name} />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem
          as="button"
          key="signout"
          color="danger"
          onClick={async () => {
            await signout();
          }}
        >
          {stringResources.signout}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
