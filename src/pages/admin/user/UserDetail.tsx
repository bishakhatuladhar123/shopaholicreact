import { useParams, useSearchParams } from "react-router";

export default function UserDetail() {
    const params = useParams<{ username: string }>();
    const [query, setQuery] = useSearchParams()

    return <>
        User Detail of {params.username}
        <br />
        Query: Search:{query.get("search")},page:{query.get("page")}
    </>;
}