import Link from 'next/link';
// import { auth } from '@/lib/auth';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { SignOutButton } from '@/components/auth/signout-button';
// import { Icons } from '@/components/icons';
import { Navigation } from '@/components/nav/navigation';
import { siteConfig } from '@/config/site';
import { ModeToggle } from '../theme-toggle';

// import { ThemeToggle } from '@/components/theme-toggle';

export async function Header(): Promise<JSX.Element> {
  //   const session = await auth();

  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-transparent">
      <div className="container flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
        >
          {/* <Icons.rocket className="size-6 md:hidden lg:flex" /> */}
          <span className="hidden md:flex">Content Studio</span>
        </Link>
        <Navigation navItems={siteConfig.navItems} />
        <div className="flex items-center justify-center">
          <ModeToggle />
          {/* <NavigationMobile navItems={siteConfig.navItems} /> */}
          <Link href="/myfeed">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
