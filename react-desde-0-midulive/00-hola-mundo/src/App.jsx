import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';

export function App () {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Durán',
            initialIsFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Heraldo',
            initialIsFollowing: false
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hernandez',
            initialIsFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomas Chein',
            initialIsFollowing: false
        }
    ]
    
    return (
        <section className="App">
            {
                users.map((user) => {
                    const { userName, name, initialIsFollowing } = user;

                    return (
                        <TwitterFollowCard 
                            key={userName}
                            initialIsFollowing={ initialIsFollowing } 
                            userName={ userName }
                        >
                            { name }
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}