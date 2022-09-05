import React from "react"
import { Card } from "./Card"

type Props = {
    suggestedNames: string[],
}

export const Results = ({ suggestedNames }: Props) => {
    return (
        <ul className="list-style-none flex flex-wrap items-center gap-4">
            {
                suggestedNames?.length > 0 && React.Children.toArray(
                    suggestedNames.map((name) => <Card name={name} />)
                )
            }
        </ul>
    )
}
