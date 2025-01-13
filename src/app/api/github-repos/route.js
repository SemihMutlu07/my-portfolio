// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const githubToken = process.env.GITHUB_TOKEN;
//     if (!githubToken) {
//       throw new Error('GitHub token is missing in environment variables.');
//     }

//     const response = await fetch('https://api.github.com/repos', {
//       headers: {
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`GitHub API returned an error: ${response.status}`);
//     }

//     const repos = await response.json();

//     // Ensure repos is an array
//     if (!Array.isArray(repos)) {
//       throw new Error('Unexpected response format from GitHub API.');
//     }

//     return NextResponse.json(repos);
//   } catch (error) {
//     console.error('API Route Error:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
