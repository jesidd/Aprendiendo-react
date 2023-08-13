import './App.css'
import { TwitterFollowCard } from './Tw-Card'


export function App(){
    return (
        <>
            <TwitterFollowCard username="rem" initialIsFollowing={true}>
                Rem Natsuki
            </TwitterFollowCard>
            <TwitterFollowCard username="rem" initialIsFollowing={false}>
                Rem Mia
            </TwitterFollowCard>
        </>
    )
}

