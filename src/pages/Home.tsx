import { Link } from "react-router-dom"
import family from '../assets/002.jpg'
import work from '../assets/005.jpeg'
import reactLogo from '../assets/react.svg'
import '../styles/Home.scss'

export function Home () {
    return (
        <>
        <div className='row'>
            <div className='box text'>
                <h1>Kilka słów o nas</h1>
                <h3>Czyli kim jesteśmy i dokąd zmierzamy</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Blandit turpis cursus in hac habitasse platea dictumst. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Pellentesque adipiscing commodo elit at. Lectus nulla at volutpat diam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Consectetur adipiscing elit ut aliquam. Nisl rhoncus mattis rhoncus urna neque viverra justo. Fusce id velit ut tortor pretium viverra suspendisse potenti. In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Tempus quam pellentesque nec nam aliquam. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Id aliquet lectus proin nibh nisl condimentum. Quis varius quam quisque id diam vel quam.
                </p>
                <p>
                    Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Porttitor eget dolor morbi non arcu risus quis varius. Tellus mauris a diam maecenas sed enim ut sem viverra. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Vestibulum sed arcu non odio euismod. Tellus id interdum velit laoreet. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna eget est lorem ipsum dolor sit. Fringilla ut morbi tincidunt augue interdum velit. Lorem sed risus ultricies tristique nulla aliquet. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.
                </p>
                <Link to="/votes"><button>Zobacz więcej</button></Link>
            </div>
            <div className='box'>
                <div className='inner_row'>
                    <div className='inner_box background_text wood'>
                        <img src={reactLogo} className="logo" alt="React logo" />
                    </div>
                    <div className='inner_box'>
                        <img src={work} className="raw_image" alt="Work" />
                    </div>
                </div>
                <div className='inner_row'>
                    <div className='inner_box'>
                    <img src={family} className='raw_image' alt="Family" />
                    </div>
                    <div className='inner_box background_text hands'>
                        <span>
                            gdy stawałem się dorosłym człowiekiem ciągle
                            słyszałem głos Dziadka mówiącego o Domu przyjaźni
                            i miłości. Cały czas obraz ten okarzy mi się
                            z drewnianym ciepłym Domem krytym strzechą.
                            Domem, który żył. Domem, który miał duszę
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='box background-text'>
                <h2>
                    <p>Budowa domów z drewna</p>
                    <p>Budowa bram wjazdowych</p>
                    <p>Wykończenie wnętrz</p>
                    <p>Altany ogrodowe</p>
                    <p>Kamienne elementy architektury</p>
                    <p>Remonty</p>
                </h2>
            </div>
            <div className='box text'>
                <h1>Nasza oferta</h1>
                <h3>Dowiedz się co możemy Tobie zaoferować</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Blandit turpis cursus in hac habitasse platea dictumst. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Pellentesque adipiscing commodo elit at. Lectus nulla at volutpat diam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Consectetur adipiscing elit ut aliquam. Nisl rhoncus mattis rhoncus urna neque viverra justo. Fusce id velit ut tortor pretium viverra suspendisse potenti. In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Tempus quam pellentesque nec nam aliquam. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Id aliquet lectus proin nibh nisl condimentum. Quis varius quam quisque id diam vel quam.
                </p>
                <p>
                    Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Porttitor eget dolor morbi non arcu risus quis varius. Tellus mauris a diam maecenas sed enim ut sem viverra. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Vestibulum sed arcu non odio euismod. Tellus id interdum velit laoreet. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna eget est lorem ipsum dolor sit. Fringilla ut morbi tincidunt augue interdum velit. Lorem sed risus ultricies tristique nulla aliquet. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.
                </p>
                <Link to="/votes"><button>Zobacz więcej</button></Link>
            </div>
        </div>
        </>
    )
}