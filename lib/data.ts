import postgres from 'postgres';
import { Expenses, Post } from './definitions';

//prepare: false, para eliminar cache e não dar imcompatibilidade de tipos quando houver
// alguma alteração em alguma tabela do banco de dados.

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', prepare: false });


export async function listPosts(section: string) {
 
	const data = await sql<Post[]>`
    SELECT * FROM posts
    WHERE posts.section = ${section}
    ORDER BY posts.created_at DESC;
  `;

	return data;
}


export async function fetchPostBySlug(slug: string) {
  try {
    const data = await sql<Post[]>`
      SELECT * FROM posts      
      WHERE posts.slug = ${slug}
    `;

    const post = data.map((post) => ({
      ...post,            
    }));
    
    return post[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post.');
  }
}

export async function fetchExpenseById(id: number) {
  try {
    const data = await sql<Expenses[]>`
      SELECT * FROM expenses      
      WHERE expenses.id = ${id};
    `;

    const expense = data.map((expense) => ({
      ...expense,      
    }));

    return expense[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch expense.');
  }
}