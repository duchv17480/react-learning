import {useEffect, useState} from "react";

const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                console.log('>>check')
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            window.scrollY >=200? setShow(true) : setShow(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs && tabs.map(tab => (
                <button key={tab}
                    style={type === tab ? {
                        color: 'fff', background: '#333'
                    } : {}
                    }
                    onClick={() => setType(tab)}
                >{tab}
                </button>
            ))}
            <ul>
                {posts && posts.map((posts, index) =>
                  <li key={posts.id}>
                    {posts.title || posts.name}
                  </li>
                )}
            </ul>
            {show && (
                <button
                    style={{
                        position:'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >show</button>
            )}
        </div>
    )
}
export default Content