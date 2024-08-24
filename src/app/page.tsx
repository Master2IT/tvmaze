import {Button} from "antd";
import Link from "next/link";

export default function Home() {
    return (
        <div className="p-5">
            <Link href="/dashboard/movies">
                <Button>Search your series by click here...</Button>
            </Link>
        </div>
    );
}
