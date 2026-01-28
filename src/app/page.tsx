import { getCurrentUser } from "@/lib/actions/auth-actions";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello app!</h1>
      {user ? (
        <div className="flex flex-col gap-3 w-fit">
          <h3 className="text-xl">Session data</h3>
          <pre className="p-3 bg-blue-300 dark:bg-blue-800 rounded-xl">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
    
  );
}
