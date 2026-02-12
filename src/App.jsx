import { useState } from "react"
import { episodeList } from "./data"

export default function App() {
  const episdoe = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState;

function EpisodeDetails() {
  if (!seltectedEpisode) {
    return (
      <section className = "details">
        <h2>Episode Detials</h2>
        <p>See Episode Detail</p>
      </section>
    );
  }
  return (
    <section className = "details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisdoe.description}</p>
    </section>
  )
}

function EpisodeList() {
  return (
    <section className = "episodes">
      <h2>Episode</h2>
      <ol>
        {episodeList.map((epsisode) => (
          <li
            key={episode.id}
            onClick = {() => setSelectedEpisode(episode)}
            className={selectedEpisdoe?.id === epsisode.id ? "selected" : ""}
          >
            {episode.title}
          </li>  
        ))}
      </ol>
    </section>
  )
}

return (
  <>
    <header>
      <h1>Dark Echos</h1>
    </header>
    <main>
      <EpisodeList />
      <EpisdoeDetails />
    </main>
  </>
);
}
