import Search from "./Search";

export default function Header() {
    return (
        <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Discover Events</h1>

            <Search />
        </div>
    );
}