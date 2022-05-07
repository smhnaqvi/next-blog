import {useRouter} from 'next/router'

export default function BlogPostDetail() {
    const router = useRouter();
    const {id} = router.query
    return (<h1>Post {id}</h1>)
}