import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
}


const postsDirectory = path.join(process.cwd(), 'src/app/posts');

export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            description: data.description,
            content,
        } as Post; //ensuring the return matches the post type.
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}