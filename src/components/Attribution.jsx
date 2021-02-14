import React from 'react'

export default function Attribution({ author }) {
    const base_url = `https://unsplash.com/`
    const params = ['utm_source=unsplash', 'utm_medium=referral', 'utm_content=creditCopyText'].join('&amp;')
    const authorLink = `${base_url}${author}?${params}`
    const unplashLink = `${base_url}?${params}`

    return (
        <span class="attribution">Photo by {' '}
            <a rel="noreferrer" target="_blank" href={authorLink}>Kris Guico</a> {' '}
            on <a rel="noreferrer" target="_blank" href={unplashLink}>Unsplash</a></span>
    )
}