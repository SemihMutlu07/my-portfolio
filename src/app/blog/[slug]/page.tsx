import { getAllPosts } from '../../utils/blog';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const BlogPost = ({ params }: { params: { slug: string} }) => {
    const posts = getAllPosts();
    const post = posts.find((p) => p.slug === params.slug);

    if(!post) return <div>Post not found</div>;

    return (
        <main className='bg-gray-50 min-h-screen py-10 px-6'>
            <div className='container mx-auto'>
                <article className='prose lg:prose-xl mx-auto'>
                    <h1>{post.title}</h1>
                    <p className='text-gray-500'>{post.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>
            </div>
        </main>
    );
};

export default BlogPost;