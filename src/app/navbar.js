import Link from 'next/link'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
    return (
        <header className="mb-10 z-50">
            <Link href="/">
                <div className="flex items-center mb-4">
                    <div className="mr-4">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=400"
                            alt=""
                        />
                    </div>
                    <span className="text-lg font-bold">William Tietjen</span>
                </div>
            </Link>
            <nav className="flex items-center">
                <div className="flex gap-x-8">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-md leading-6 hoverable">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}