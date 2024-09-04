import './App.css';
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return (
    
        <section className="App">
        <TwitterFollowCard isFollowing userName="midudev">
        Miguel Angel Durán
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} userName="Alberto_Sink">
        Alberto Sink
        </TwitterFollowCard>

        </section>
    )
}