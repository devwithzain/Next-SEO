import { navItem } from "@constants";
import Link from "next/link";

export default function Navbar() {
	return (
		<>
			<div className="w-full bg-sky-200 px-[100rem] py-[20rem] flex items-center justify-between gap-x-[10rem] uppercase">
				<div>
					<Link href={"/"}>
						<h1 className="text-[30rem] font-bold tracking-wide">🌏 SEO</h1>
					</Link>
				</div>
				<div className="gap-x-[10rem] flex">
					{navItem.map((item) => (
						<Link
							key={item.id}
							href={item.href}
							className="text-[20rem]">
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
