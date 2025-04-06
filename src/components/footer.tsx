// Footer.tsx

import Link from 'next/link';

export default function Footer() {
    return (
        <div className="px-4 sm:px-6 lg:px-16 py-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0 bg-white dark:bg-background">
            <div className="font-semibold text-lg">🚀 VirtualOffice</div>
            <div className="flex gap-4">
                <Link href="/terms" className="hover:underline opacity-80">Terms</Link>
                <Link href="/privacy" className="hover:underline opacity-80">Privacy</Link>
            </div>
        </div>
    );
}
