export default async function UsernamePage({
params
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
 
  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}