import { listPosts } from "@/lib/data";
import PostsTable from "./posts-table";

export default async function Posts() {
  const data = await listPosts("news");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:mt-30 md:ml-12 md:mr-12">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <PostsTable
                title={item.title}
                content={item.content}
                image={item.image}
              />
            </div>
          ))
        ) : (
          <ul>
            <div className="text-center text-red-500 py-6">
              No data available
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
