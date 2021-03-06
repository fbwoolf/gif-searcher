/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './Main'
export {default as UserContainer} from './User/UserContainer'
export {default as NewSearchEntry} from './Search/NewSearchEntry'
export {default as GifList} from './Gif/GifList'
export {Login, Signup} from './Auth/AuthContainer'
