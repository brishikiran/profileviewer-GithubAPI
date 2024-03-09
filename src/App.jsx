import { useState } from 'react';
import Search from './components/Search/Search';
import Preview from './components/Preview/Preview';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-gray-200 to-blue-500 text-white">
      <main className="flex flex-col items-center gap-5 w-full mt-5">
        <Search setData={setData} setIsLoading={setIsLoading} />
        <Preview
          avatarUrl={data.avatar_url}
          blog={data.blog}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split("T")[0]}
        />
      </main>
    </div>
  );
}

export default App;
